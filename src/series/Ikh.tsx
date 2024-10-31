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

import type { SeriesIkhOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/IKH/IKHIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Ikh series
 */
const Ikh = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "ikh",
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

interface IkhSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesIkhOptions>;
}

export function IkhSeries(_props: IkhSeriesProps) {
  return null;
}

IkhSeries.type = "Series";
Ikh.Series = IkhSeries;

// TODO: Fix typings
// @ts-ignore:
IkhSeries.defaultProps = {
  type: "ikh",
};

Ikh.type = "SeriesChart";
export default Ikh;
