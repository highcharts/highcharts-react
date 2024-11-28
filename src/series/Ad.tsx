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

import type { SeriesAdOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/AD/ADIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Ad series
 */
const Ad = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "ad",
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

interface AdSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesAdOptions>;
  children?: React.ReactNode;
}

export function AdSeries(_props: AdSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
AdSeries.type = "Series";
Ad.Series = AdSeries;

AdSeries._HCReact = {
  type: "Series",
  HC_Option: "series.ad",
  childOption: "series.ad",
};

// TODO: Fix typings
// @ts-ignore:
AdSeries.defaultProps = {
  type: "ad",
};

Ad.type = "SeriesChart";
export default Ad;
