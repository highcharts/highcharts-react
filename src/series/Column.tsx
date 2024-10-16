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

import type { SeriesColumnOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

/**
 * Column series
 */
const Column = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "column",
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

interface ColumnSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesColumnOptions>;
}

Column.Series = (_props: ColumnSeriesProps) => <></>;

Column.Series.type = "Series";

// TODO: Fix typings
// @ts-ignore:
Column.Series.defaultProps = {
  type: "column",
};

Column.type = "SeriesChart";
export default Column;
