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

import SeriesMod from "highcharts/es-modules/Stock/Indicators/CMF/CMFIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Cmf series
 */
const Cmf = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Highcharts.Options>(
    Object.assign(
      {
        chart: {
          type: "cmf",
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
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

Cmf.Series = (_props: ICommonSeriesAttributes) => <></>;

Cmf.Series.type = "Series";

// TODO: Fix typings
// @ts-ignore:
Cmf.Series.defaultProps = {
  type: "cmf",
};

Cmf.type = "SeriesChart";
export default Cmf;
