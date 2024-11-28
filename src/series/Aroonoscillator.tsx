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

import type { SeriesAroonoscillatorOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/AroonOscillator/AroonOscillatorIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Aroonoscillator series
 */
const Aroonoscillator = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "aroonoscillator",
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

interface AroonoscillatorSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesAroonoscillatorOptions>;
  children?: React.ReactNode;
}

export function AroonoscillatorSeries(_props: AroonoscillatorSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
AroonoscillatorSeries.type = "Series";
Aroonoscillator.Series = AroonoscillatorSeries;

AroonoscillatorSeries._HCReact = {
  type: "Series",
  HC_Option: "series.aroonoscillator",
  childOption: "series.aroonoscillator",
};

// TODO: Fix typings
// @ts-ignore:
AroonoscillatorSeries.defaultProps = {
  type: "aroonoscillator",
};

Aroonoscillator.type = "SeriesChart";
export default Aroonoscillator;
