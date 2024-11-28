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

import type { SeriesSmaOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/SMA/SMAIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Sma series
 */
const Sma = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "sma",
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

interface SmaSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesSmaOptions>;
  children?: React.ReactNode;
}

export function SmaSeries(_props: SmaSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
SmaSeries.type = "Series";
Sma.Series = SmaSeries;

SmaSeries._HCReact = {
  type: "Series",
  HC_Option: "series.sma",
  childOption: "series.sma",
};

// TODO: Fix typings
// @ts-ignore:
SmaSeries.defaultProps = {
  type: "sma",
};

Sma.type = "SeriesChart";
export default Sma;
