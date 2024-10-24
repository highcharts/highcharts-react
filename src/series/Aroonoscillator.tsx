/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesAroonoscillatorOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/AroonOscillator/AroonOscillatorIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface AroonoscillatorSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesAroonoscillatorOptions>;
}

export function AroonoscillatorSeries(_props: AroonoscillatorSeriesProps) {
  return null;
}

AroonoscillatorSeries.type = "Series";
Aroonoscillator.Series = AroonoscillatorSeries;

// TODO: Fix typings
// @ts-ignore:
AroonoscillatorSeries.defaultProps = {
  type: "aroonoscillator",
};

Aroonoscillator.type = "SeriesChart";
export default Aroonoscillator;
