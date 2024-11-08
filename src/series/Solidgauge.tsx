/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesSolidgaugeOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/SolidGauge/SolidGaugeSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Solidgauge series
 */
const Solidgauge = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "solidgauge",
        },
      },
      props.options || {}
    )
  );

  return (
    <Chart title={props.title} chartConstructor="chart" options={chartConfig}>
      {props.children}
    </Chart>
  );
};

interface SolidgaugeSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesSolidgaugeOptions>;
}

export function SolidgaugeSeries(_props: SolidgaugeSeriesProps) {
  return null;
}

SolidgaugeSeries.type = "Series";
Solidgauge.Series = SolidgaugeSeries;

// TODO: Fix typings
// @ts-ignore:
SolidgaugeSeries.defaultProps = {
  type: "solidgauge",
};

Solidgauge.type = "SeriesChart";
export default Solidgauge;
