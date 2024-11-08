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

import type { SeriesPictorialOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Pictorial/PictorialSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Pictorial series
 */
const Pictorial = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "pictorial",
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

interface PictorialSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesPictorialOptions>;
}

export function PictorialSeries(_props: PictorialSeriesProps) {
  return null;
}

PictorialSeries.type = "Series";
Pictorial.Series = PictorialSeries;

// TODO: Fix typings
// @ts-ignore:
PictorialSeries.defaultProps = {
  type: "pictorial",
};

Pictorial.type = "SeriesChart";
export default Pictorial;
