/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesPictorialOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

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
  children?: React.ReactNode;
}

export function PictorialSeries(_props: PictorialSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
PictorialSeries.type = "Series";
Pictorial.Series = PictorialSeries;

PictorialSeries._HCReact = {
  type: "Series",
  HC_Option: "series.pictorial",
  childOption: "series.pictorial",
};

// TODO: Fix typings
// @ts-ignore:
PictorialSeries.defaultProps = {
  type: "pictorial",
};

Pictorial.type = "SeriesChart";
export default Pictorial;
