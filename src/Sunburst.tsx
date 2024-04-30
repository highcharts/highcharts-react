/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-04-30
 *
 */

import {
  useState,
  React,
  // @ts-ignore
} from "react";

import Highcharts, {
  ICommonAttributes,
  ICommonSeriesAttributes,
  HighchartsNS,
} from "./Highcharts";

import Mod from "highcharts/es-modules/Series/Sunburst/SunburstSeries.js";

Mod(HighchartsNS);

/**
 * Sunburst series
 */
const Sunburst = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Highcharts.Options>(
    Object.assign(
      {
        chart: {
          type: "sunburst",
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

Sunburst.Series = (_props: ICommonSeriesAttributes) => <></>;

// TODO: Fix typings
// @ts-ignore:
Sunburst.Series.defaultProps = {
  type: "sunburst",
};

export default Sunburst;
