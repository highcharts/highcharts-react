/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesZigzagOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/Zigzag/ZigzagIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Zigzag series
 */
const Zigzag = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "zigzag",
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

interface ZigzagSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesZigzagOptions>;
}

export function ZigzagSeries(_props: ZigzagSeriesProps) {
  return null;
}

ZigzagSeries.type = "Series";
Zigzag.Series = ZigzagSeries;

// TODO: Fix typings
// @ts-ignore:
ZigzagSeries.defaultProps = {
  type: "zigzag",
};

Zigzag.type = "SeriesChart";
export default Zigzag;
