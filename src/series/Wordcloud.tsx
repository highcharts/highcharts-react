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

import type { SeriesWordcloudOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Wordcloud/WordcloudSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Wordcloud series
 */
const Wordcloud = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "wordcloud",
        },
      },
      props.options || {}
    )
  );

  return (
    <Chart title={props.title} chartConstructor="chart" options={chartConfig}>
      {props.children}
    </Chart>
  );
};

interface WordcloudSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesWordcloudOptions>;
  children?: React.ReactNode;
}

export function WordcloudSeries(_props: WordcloudSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
WordcloudSeries.type = "Series";
Wordcloud.Series = WordcloudSeries;

WordcloudSeries._HCReact = {
  type: "Series",
  HC_Option: "series.wordcloud",
  childOption: "series.wordcloud",
};

// TODO: Fix typings
// @ts-ignore:
WordcloudSeries.defaultProps = {
  type: "wordcloud",
};

Wordcloud.type = "SeriesChart";
export default Wordcloud;
