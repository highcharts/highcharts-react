/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-08
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

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/esm/modules/tilemap.src.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
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

Tilemap.type = "SeriesChart";
export default Tilemap;
