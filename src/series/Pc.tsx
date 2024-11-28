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

import type { SeriesPcOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/PC/PCIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Pc series
 */
const Pc = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "pc",
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

interface PcSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesPcOptions>;
  children?: React.ReactNode;
}

export function PcSeries(_props: PcSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
PcSeries.type = "Series";
Pc.Series = PcSeries;

PcSeries._HCReact = {
  type: "Series",
  HC_Option: "series.pc",
  childOption: "series.pc",
};

// TODO: Fix typings
// @ts-ignore:
PcSeries.defaultProps = {
  type: "pc",
};

Pc.type = "SeriesChart";
export default Pc;
