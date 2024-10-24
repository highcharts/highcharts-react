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

import type { SeriesLollipopOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Lollipop/LollipopSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Lollipop series
 */
const Lollipop = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "lollipop",
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

interface LollipopSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesLollipopOptions>;
}

export function LollipopSeries(_props: LollipopSeriesProps) {
  return null;
}

LollipopSeries.type = "Series";
Lollipop.Series = LollipopSeries;

// TODO: Fix typings
// @ts-ignore:
LollipopSeries.defaultProps = {
  type: "lollipop",
};

Lollipop.type = "SeriesChart";
export default Lollipop;
