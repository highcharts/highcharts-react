/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesWmaOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/WMA/WMAIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Wma series
 */
const Wma = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "wma",
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

interface WmaSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesWmaOptions>;
}

export function WmaSeries(_props: WmaSeriesProps) {
  return null;
}

WmaSeries.type = "Series";
Wma.Series = WmaSeries;

// TODO: Fix typings
// @ts-ignore:
WmaSeries.defaultProps = {
  type: "wma",
};

Wma.type = "SeriesChart";
export default Wma;
