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

import type { SeriesPackedbubbleOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/PackedBubble/PackedBubbleSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Packedbubble series
 */
const Packedbubble = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "packedbubble",
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

interface PackedbubbleSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesPackedbubbleOptions>;
}

export function PackedbubbleSeries(_props: PackedbubbleSeriesProps) {
  return null;
}

PackedbubbleSeries.type = "Series";
Packedbubble.Series = PackedbubbleSeries;

// TODO: Fix typings
// @ts-ignore:
PackedbubbleSeries.defaultProps = {
  type: "packedbubble",
};

Packedbubble.type = "SeriesChart";
export default Packedbubble;
