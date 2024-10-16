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

import type { SeriesObvOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/OBV/OBVIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Obv series
 */
const Obv = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "obv",
        },
      },
      props.options || {}
    )
  );

  return (
    <Highcharts
      title={props.title}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface ObvSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesObvOptions>;
}

Obv.Series = (_props: ObvSeriesProps) => <></>;

Obv.Series.type = "Series";

// TODO: Fix typings
// @ts-ignore:
Obv.Series.defaultProps = {
  type: "obv",
};

Obv.type = "SeriesChart";
export default Obv;
