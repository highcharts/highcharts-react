/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-06
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

import SeriesMod from "highcharts/es-modules/Series/AreaSplineRange/AreaSplineRangeSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Areasplinerange series
 */
const Areasplinerange = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Highcharts.Options>(
    Object.assign(
      {
        chart: {
          type: "areasplinerange",
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

Areasplinerange.Series = (_props: ICommonSeriesAttributes) => <></>;

Areasplinerange.Series.type = "Series";

// TODO: Fix typings
// @ts-ignore:
Areasplinerange.Series.defaultProps = {
  type: "areasplinerange",
};

Areasplinerange.type = "SeriesChart";
export default Areasplinerange;
