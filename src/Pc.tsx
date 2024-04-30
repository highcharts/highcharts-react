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

import Mod from "highcharts/es-modules/Stock/Indicators/PC/PCIndicator.js";

Mod(HighchartsNS);

/**
 * Pc series
 */
const Pc = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Highcharts.Options>(
    Object.assign(
      {
        chart: {
          type: "pc",
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

Pc.Series = (_props: ICommonSeriesAttributes) => <></>;

// TODO: Fix typings
// @ts-ignore:
Pc.Series.defaultProps = {
  type: "pc",
};

export default Pc;