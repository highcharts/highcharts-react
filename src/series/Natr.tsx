/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-08
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesNatrOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/esm/modules/natr.src.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Natr series
 */
const Natr = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "natr",
        },
      },
      props.options || {}
    )
  );

  return (
    <Chart
      title={props.title}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Chart>
  );
};

interface NatrSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesNatrOptions>;
  children?: React.ReactNode;
}

export function NatrSeries(_props: NatrSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
NatrSeries.type = "Series";
Natr.Series = NatrSeries;

NatrSeries._HCReact = {
  type: "Series",
  HC_Option: "series.natr",
  childOption: "series.natr",
};

Natr.type = "SeriesChart";
export default Natr;
