/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesRocOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/ROC/ROCIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Roc series
 */
const Roc = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "roc",
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

interface RocSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesRocOptions>;
  children?: React.ReactNode;
}

export function RocSeries(_props: RocSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
RocSeries.type = "Series";
Roc.Series = RocSeries;

RocSeries._HCReact = {
  type: "Series",
  HC_Option: "series.roc",
  childOption: "series.roc",
};

// TODO: Fix typings
// @ts-ignore:
RocSeries.defaultProps = {
  type: "roc",
};

Roc.type = "SeriesChart";
export default Roc;
