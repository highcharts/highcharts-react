/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesVwapOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/VWAP/VWAPIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Vwap series
 */
const Vwap = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "vwap",
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

interface VwapSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesVwapOptions>;
}

export function VwapSeries(_props: VwapSeriesProps) {
  return null;
}

VwapSeries.type = "Series";
Vwap.Series = VwapSeries;

// TODO: Fix typings
// @ts-ignore:
VwapSeries.defaultProps = {
  type: "vwap",
};

Vwap.type = "SeriesChart";
export default Vwap;
