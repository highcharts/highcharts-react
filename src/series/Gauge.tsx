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

import type { SeriesGaugeOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Gauge/GaugeSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Gauge series
 */
const Gauge = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "gauge",
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

interface GaugeSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesGaugeOptions>;
}

export function GaugeSeries(_props: GaugeSeriesProps) {
  return null;
}

GaugeSeries.type = "Series";
Gauge.Series = GaugeSeries;

// TODO: Fix typings
// @ts-ignore:
GaugeSeries.defaultProps = {
  type: "gauge",
};

Gauge.type = "SeriesChart";
export default Gauge;
