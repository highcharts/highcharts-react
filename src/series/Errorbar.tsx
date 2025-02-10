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
  // @ts-ignore
} from "react";

import type { SeriesErrorbarOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/ErrorBar/ErrorBarSeries.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Errorbar series
 */
const Errorbar = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "errorbar",
        },
      },
      props.options || {}
    )
  );

  return (
    <Chart title={props.title} chartConstructor="chart" options={chartConfig}>
      {props.children}
    </Chart>
  );
};

interface ErrorbarSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesErrorbarOptions>;
  children?: React.ReactNode;
}

export function ErrorbarSeries(_props: ErrorbarSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
ErrorbarSeries.type = "Series";
Errorbar.Series = ErrorbarSeries;

ErrorbarSeries._HCReact = {
  type: "Series",
  HC_Option: "series.errorbar",
  childOption: "series.errorbar",
};

Errorbar.type = "SeriesChart";
export default Errorbar;
