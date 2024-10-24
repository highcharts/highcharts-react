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

import type { SeriesBbOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/BB/BBIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Bb series
 */
const Bb = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "bb",
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

interface BbSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesBbOptions>;
}

export function BbSeries(_props: BbSeriesProps) {
  return null;
}

BbSeries.type = "Series";
Bb.Series = BbSeries;

// TODO: Fix typings
// @ts-ignore:
BbSeries.defaultProps = {
  type: "bb",
};

Bb.type = "SeriesChart";
export default Bb;
