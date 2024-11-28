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

import type { SeriesTilemapOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Tilemap/TilemapSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Tilemap series
 */
const Tilemap = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "tilemap",
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

interface TilemapSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesTilemapOptions>;
  children?: React.ReactNode;
}

export function TilemapSeries(_props: TilemapSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
TilemapSeries.type = "Series";
Tilemap.Series = TilemapSeries;

TilemapSeries._HCReact = {
  type: "Series",
  HC_Option: "series.tilemap",
  childOption: "series.tilemap",
};

// TODO: Fix typings
// @ts-ignore:
TilemapSeries.defaultProps = {
  type: "tilemap",
};

Tilemap.type = "SeriesChart";
export default Tilemap;
