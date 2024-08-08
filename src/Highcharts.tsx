/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-08
 *
 */

import React, {
  useState,
  useEffect,
  useRef,
  // @ts-ignore
} from "react";

import { renderToStaticMarkup } from "react-dom/server";

import HC from "highcharts/es-modules/masters/highcharts.src.js";
// import * as Data from 'highcharts/es-modules/data';

export const HighchartsNS = HC;

// Data(Highcharts);

export interface ICommonSeriesAttributes {
  type?: string;
  data?: number[] | Object;
  options?: HC.SeriesOptions;
  defaultProps?: {
    type: "string";
  };
}

export interface ICommonAttributes {
  /** Options override - applied first, other props are merged in. */
  options?: HC.Options;
  /** Constructor to use */
  chartConstructor?: "chart" | "stockChart" | "ganttChart" | "mapChart";
  /** Children */
  children?: React.ReactNode;
  /** Links to Highcharts.Options.title.text */
  title?: string;
  /** Links to Highcharts.Options.data.csv */
  csv?: string;
  /** Links to Highcharts.Options.data.csvURL */
  csvURL?: string;
}

const toArr = (thing) => (Array.isArray(thing) ? thing : [thing]);

function getChildProps(children, renderHTML = undefined) {
  const optionsFromChildren = {};

  function isWrapperComponent(component) {}

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
      : children.filter((c) => c.substring || c.toFixed).join(""); // fallback
  }

  function handleChildren(children, obj, meta) {
    console.log(children);
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

      if (lostChildren.length) {
        objInsert(obj, meta.childOption, renderChildren(lostChildren));
      }

      return;
    }

    objInsert(obj, meta.childOption, renderChildren(children));
  }

  /**
   *
   * @param {import('react').ReactNode & {type?: any}} child
   *
   */
  function handleChild(child) {
    if (typeof child === "object") {
      const { _HCReact: meta } = child.type;
      if (meta && meta.type === "HC_Option" && meta.HCOption) {
        const optionParent = (optionsFromChildren[meta.HCOption] ??= {});

        const { children, ...otherProps } = child.props;

        console.log(children);

        // TODO: there will probably be mappings that have to be applied
        Object.entries(otherProps).forEach(
          ([key, value]) => (optionsFromChildren[meta.HCOption][key] = value)
        );

        // TODO: if the child has children we have to unpack it
        if (typeof children === "string" && meta.childOption) {
          objInsert(optionParent, meta.childOption, children);
        } else if (children?.$$typeof && renderHTML) {
          if (children.$$typeof === Symbol.for("react.element")) {
            // If there's only a children prop
            if (
              children.props?.children &&
              Object.keys(children.props).length === 1
            ) {
              handleChildren(children.props.children, optionParent, meta);
              return;
            }

            objInsert(optionParent, meta.childOption, renderHTML(children));
          }
        } else if (Array.isArray(children)) {
          handleChildren(children, optionParent, meta);
        }
      }
    }
  }

  if (Array.isArray(children)) {
    children.forEach(handleChild);
  } else {
    console.log(children);
    handleChild(children);
  }

  return optionsFromChildren;
}

// TODO: The config merge needs to use a deep merge instead of Object.assign
export function Highcharts(props: ICommonAttributes) {
  const [chartConfig, setChartConfig] = useState<HC.Options>(
    Object.assign(
      Object.assign(
        {
          title: { text: props.title || "My Chart" },
          data: {
            csv: props.csv || undefined,
            csvURL: props.csvURL || undefined,
          },
        },
        props.options || {}
      ),
      {
        series: props.children
          ? toArr(props.children)
              .filter((c) => c.type.type === "Series")
              .map((c) =>
                Object.assign(
                  {
                    type: c.props.type || "line",
                    data: c.props.data || [],
                  },
                  c.props.options || {}
                )
              )
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
    config.data.csv ??= props.csv;
    config.data.csvURL ??= props.csvURL;
  };

  /** Append series to chart config */
  const appendSeries = () => {
    // config: HC.Options
    if (props.children) {
      const children = toArr(props.children).filter(
        (c) => c.type.type === "Series"
      );

      children.forEach((c, i) => {
        console.log("Adding series to chart");

        if (c.props) {
          if (c.props.options) {
            Object.assign(chartConfig.series[i], c.props.options);
          }

          chartConfig.series[i] = {
            ...chartConfig.series[i],
            ...c.props,
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
      console.log(
        "Creating chart using",
        props.chartConstructor || "chart",
        "constructor"
      );
      chartRef.current = HC[props.chartConstructor || "chart"](
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

export interface HighchartsSeriesProps extends ICommonSeriesAttributes {
  type:
    | "arcdiagram"
    | "area"
    | "arearange"
    | "areaspline"
    | "areasplinerange"
    | "bar"
    | "bellcurve"
    | "boxplot"
    | "bubble"
    | "bullet"
    | "column"
    | "columnpyramid"
    | "columnrange"
    | "cylinder"
    | "dependencywheel"
    | "dumbbell"
    | "errorbar"
    | "funnel"
    | "funnel3d"
    | "gauge"
    | "heatmap"
    | "histogram"
    | "item"
    | "line"
    | "lollipop"
    | "networkgraph"
    | "organization"
    | "packedbubble"
    | "pareto"
    | "pictorial"
    | "pie"
    | "polygon"
    | "pyramid"
    | "pyramid3d"
    | "sankey"
    | "scatter"
    | "scatter3d"
    | "solidgauge"
    | "spline"
    | "streamgraph"
    | "sunburst"
    | "tilemap"
    | "timeline"
    | "treegraph"
    | "treemap"
    | "variablepie"
    | "variwide"
    | "vector"
    | "venn"
    | "waterfall"
    | "windbarb"
    | "wordcloud"
    | "xrange";
}
export function HighchartsSeries(props: HighchartsSeriesProps) {
  return null;
}
HighchartsSeries.type = "Series";

Highcharts.Series = HighchartsSeries;

export default Highcharts;
