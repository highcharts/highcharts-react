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

import type { SeriesTilemapOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Tilemap/TilemapSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="chart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface TilemapSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesTilemapOptions>;
}

export function TilemapSeries(_props: TilemapSeriesProps) {
  return null;
}

TilemapSeries.type = "Series";
Tilemap.Series = TilemapSeries;

// TODO: Fix typings
// @ts-ignore:
TilemapSeries.defaultProps = {
  type: "tilemap",
};

Tilemap.type = "SeriesChart";
export default Tilemap;
