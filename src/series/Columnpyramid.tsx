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

import type { SeriesColumnpyramidOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/ColumnPyramid/ColumnPyramidSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Columnpyramid series
 */
const Columnpyramid = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "columnpyramid",
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

interface ColumnpyramidSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesColumnpyramidOptions>;
}

Columnpyramid.Series = (_props: ColumnpyramidSeriesProps) => <></>;

Columnpyramid.Series.type = "Series";

// TODO: Fix typings
// @ts-ignore:
Columnpyramid.Series.defaultProps = {
  type: "columnpyramid",
};

Columnpyramid.type = "SeriesChart";
export default Columnpyramid;
