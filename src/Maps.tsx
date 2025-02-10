/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-10
 *
 */

import React, {
  useState,
  useEffect,
  useRef,
  // @ts-ignore
} from "react";

import { renderToStaticMarkup } from "react-dom/server";

import HC from "highcharts/es-modules/masters/highmaps.src.js";

// Add data-hc-option to allowed attributes
if (HC.AST.allowedAttributes.indexOf("data-hc-option") === -1) {
  HC.AST.allowedAttributes.push("data-hc-option");
}

export let Highcharts = HC;

export function setHighcharts(newHC?: typeof HC) {
  if (newHC === undefined) {
    Highcharts = HC;
    delete Highcharts.__provided;
    return;
  }

  Highcharts = newHC;
  Highcharts.__provided = true;
}

export function getHighcharts(): typeof HC & { __provided?: boolean } {
  return Highcharts;
}

export type WithoutType<T> = Omit<T, "type">;

export interface ICommonSeriesAttributes {
  type?: HC.SeriesOptionsType["type"];
  data?: number[] | Object;
  options?: WithoutType<HC.SeriesOptionsType>;
}

export interface ICommonAttributes {
  highcharts?: any;
  /** Options override - applied first, other props are merged in. */
  options?: HC.Options;
  /** Constructor to use */
  chartConstructor?: "chart" | "stockChart" | "ganttChart" | "mapChart";
  /** Children */
  children?: React.ReactNode;
  /** Links to Highcharts.Options.title.text */
  title?: string;
}

const toArr = (thing) => (Array.isArray(thing) ? thing : [thing]);

function getChildProps(children, renderHTML = undefined) {
  const optionsFromChildren = {};
  // TODO: Bundle this from utils
  function objInsert(obj, key, value = null) {
    const keys = key.split(".");
    let current = obj;
    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      if (!current[key]) {
        current[key] = {};
      }
      current = current[key];
    }
    current[keys[keys.length - 1]] = value;
    return obj;
  }
  function renderChildren(children) {
    return renderHTML
      ? renderHTML(children)
      : children.filter((c) => typeof c === "string").join(""); // fallback
  }
  /**
   * Updates the _HCReact metadata for a child.
   */
  function updateChildMeta(childMeta, parentMeta) {
    return {
      ...childMeta,
      childOption: `${parentMeta.childOption}.${childMeta.childOption}`,
      HCOption: `${parentMeta.HCOption}.${childMeta.HCOption}`,
    };
  }
  function handleChildren(children, obj, meta) {
    if (
      Array.isArray(children) &&
      children.some((c) => c.props && c.props["data-hc-option"])
    ) {
      const lostChildren = [];
      for (const child of children) {
        if (child.props["data-hc-option"]) {
          objInsert(
            obj,
            `${child.props["data-hc-option"]}`,
            renderChildren([child])
          );
        } else {
          lostChildren.push(child);
        }
      }
      if (lostChildren.length && meta.childOption) {
        objInsert(obj, meta.childOption, renderChildren(lostChildren));
      }
      return;
    }
    const nonOptionChildren = [];
    if (Array.isArray(children)) {
      for (const c of children) {
        if (c.type?._HCReact) {
          const { _HCReact: childMeta } = c.type;
          c.type._HCReact = updateChildMeta(childMeta, meta);
          handleChild(c);
          continue;
        }
        nonOptionChildren.push(c);
      }
    }
    if (meta.childOption) {
      // If children is an array, render the children that are not options.
      // Otherwise, render the children prop
      const childrenToRender = nonOptionChildren.length
        ? nonOptionChildren
        : [children];
      objInsert(obj, meta.childOption, renderChildren(childrenToRender));
    }
  }
  function handleChild(child) {
    if (child && typeof child === "object") {
      const { _HCReact: meta } = child.type ?? {};
      if (meta && meta.HCOption) {
        const optionParent = (optionsFromChildren[meta.HCOption] ??=
          meta.isArrayType ? [] : {});
        const { children, ...props } = child.props;
        const parentIsArray = Array.isArray(optionParent);
        const insertInto = parentIsArray ? {} : optionParent;
        if (meta.defaultOptions) {
          Object.assign(insertInto, meta.defaultOptions);
        }
        Object.assign(insertInto, props);
        // TODO: if the child has children we have to unpack it
        if (typeof children === "string" && meta.childOption) {
          objInsert(insertInto, meta.childOption, children);
        } else if (
          children &&
          typeof children === "object" &&
          "$$typeof" in children &&
          renderHTML
        ) {
          if (
            children.$$typeof === Symbol.for("react.element") &&
            "props" in children
          ) {
            // If there's only a children prop
            if (
              children.props?.children &&
              Object.keys(children.props).length === 1
            ) {
              handleChildren(children.props.children, insertInto, meta);
            } else if (meta.childOption) {
              objInsert(insertInto, meta.childOption, renderHTML(children));
            }
          }
        } else if (Array.isArray(children)) {
          handleChildren(children, insertInto, meta);
        }
        // Push to the option if array type
        if (parentIsArray) {
          optionsFromChildren[meta.HCOption].push(insertInto);
        }
      }
    }
  }
  if (Array.isArray(children)) {
    children.forEach(handleChild);
  } else {
    handleChild(children);
  }
  return optionsFromChildren;
}

// TODO: The config merge needs to use a deep merge instead of Object.assign
export function MapsChart(props: ICommonAttributes) {
  if (props.highcharts) {
    setHighcharts(props.highcharts);
  }

  const [chartConfig, setChartConfig] = useState<HC.Options>(
    Object.assign(
      Object.assign(
        {
          title: { text: props.title || undefined },
        },
        props.options || {}
      ),
      {
        series: props.children
          ? toArr(props.children)
              .filter((c) => c?.type?.type === "Series")
              .map((c) => {
                return Object.assign(
                  {
                    type:
                      c.props.type ??
                      c.type?._HCReact?.HC_Option.replace("series.", "") ??
                      "line",
                    data: c.props.data || [],
                  },
                  {
                    ...(c.props.options || {}),
                    ...getChildProps(c.props.children, renderToStaticMarkup),
                  }
                );
              })
          : [],
        ...getChildProps(props.children, renderToStaticMarkup),
      },
      props.options || {}
    )
  );

  const containerRef = useRef();
  const chartRef = useRef<HC.Chart>();

  /** Append prop to chart config */
  const appendProps = (config: HC.Options) => {
    config.title.text ??= props.title;
  };

  /** Append series to chart config */
  const appendSeries = () => {
    // config: HC.Options
    if (props.children) {
      const children = toArr(props.children).filter(
        (c) => c?.type?.type === "Series"
      );

      children.forEach((c, i) => {
        console.log("Adding series to chart");

        if (c.props) {
          const { children, type, options, ...otherProps } = c.props;

          if (options) {
            Object.assign(chartConfig.series[i], options);
          }

          chartConfig.series[i] = {
            ...chartConfig.series[i],
            type: type ?? c?.type?._HCReact.HC_Option.replace("series.", ""),
            ...getChildProps(c.props.children),
            ...otherProps,
          };
        }
      });
      setChartConfig({ ...chartConfig });
    }
  };

  // Update the chart on render
  useEffect(() => {
    console.log(JSON.stringify(chartConfig, undefined, "  "));
    if (!chartRef.current) {
      const HCConstructor = props.chartConstructor || "mapChart";
      console.log("Creating chart using", HCConstructor, "constructor");
      chartRef.current = getHighcharts()[HCConstructor](
        containerRef.current,
        chartConfig
      );
    } else {
      console.log("Updating chart");
      appendProps(chartConfig);
      appendSeries(); // chartConfig

      setChartConfig(chartConfig);
      chartRef.current.update({
        ...chartConfig,
        ...getChildProps(props.children, renderToStaticMarkup),
      });
    }
  });

  return <div ref={containerRef}></div>;
}

export interface MapsSeriesProps extends ICommonSeriesAttributes {
  type: HC.SeriesOptionsType["type"]; // required in generic series component
}
export function MapsSeries(props: MapsSeriesProps) {
  return null;
}
MapsSeries.type = "Series";

MapsChart.Series = MapsSeries;

export default MapsChart;
