/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-08
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import Highcharts, {
  ICommonAttributes,
  ICommonSeriesAttributes,
  HighchartsNS,
} from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/ColumnRange/ColumnRangeSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Columnrange series
 */
const Columnrange = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Highcharts.Options>(
    Object.assign(
      {
        chart: {
          type: "columnrange",
        },
      },
      props.options || {}
    )
  );

  return (
    <Highcharts
      title={props.title}
      csv={props.csv}
      csvURL={props.csvURL}
      chartConstructor="chart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

Columnrange.Series = (_props: ICommonSeriesAttributes) => <></>;

Columnrange.Series.type = "Series";

// TODO: Fix typings
// @ts-ignore:
Columnrange.Series.defaultProps = {
  type: "columnrange",
};

Columnrange.type = "SeriesChart";
export default Columnrange;