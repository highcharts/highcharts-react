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

import type { SeriesVariwideOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Variwide/VariwideSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Variwide series
 */
const Variwide = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "variwide",
        },
      },
      props.options || {}
    )
  );

  return (
    <Highcharts
      title={props.title}
      chartConstructor="chart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface VariwideSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesVariwideOptions>;
}

export function VariwideSeries(_props: VariwideSeriesProps) {
  return null;
}

VariwideSeries.type = "Series";
Variwide.Series = VariwideSeries;

// TODO: Fix typings
// @ts-ignore:
VariwideSeries.defaultProps = {
  type: "variwide",
};

Variwide.type = "SeriesChart";
export default Variwide;
