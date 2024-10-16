/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-15
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesHeatmapOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

/**
 * Heatmap series
 */
const Heatmap = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "heatmap",
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

interface HeatmapSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesHeatmapOptions>;
}

Heatmap.Series = (_props: HeatmapSeriesProps) => <></>;

Heatmap.Series.type = "Series";

// TODO: Fix typings
// @ts-ignore:
Heatmap.Series.defaultProps = {
  type: "heatmap",
};

Heatmap.type = "SeriesChart";
export default Heatmap;
