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

import type { SeriesVwapOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/VWAP/VWAPIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Vwap series
 */
const Vwap = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "vwap",
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

interface VwapSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesVwapOptions>;
  children?: React.ReactNode;
}

export function VwapSeries(_props: VwapSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
VwapSeries.type = "Series";
Vwap.Series = VwapSeries;

VwapSeries._HCReact = {
  type: "Series",
  HC_Option: "series.vwap",
  childOption: "series.vwap",
};

// TODO: Fix typings
// @ts-ignore:
VwapSeries.defaultProps = {
  type: "vwap",
};

Vwap.type = "SeriesChart";
export default Vwap;
