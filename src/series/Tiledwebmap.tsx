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

import type { SeriesTiledwebmapOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/TiledWebMap/TiledWebMapSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Tiledwebmap series
 */
const Tiledwebmap = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "tiledwebmap",
        },
      },
      props.options || {}
    )
  );

  return (
    <Highcharts
      title={props.title}
      chartConstructor="mapChart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface TiledwebmapSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesTiledwebmapOptions>;
}

export function TiledwebmapSeries(_props: TiledwebmapSeriesProps) {
  return null;
}

TiledwebmapSeries.type = "Series";
Tiledwebmap.Series = TiledwebmapSeries;

// TODO: Fix typings
// @ts-ignore:
TiledwebmapSeries.defaultProps = {
  type: "tiledwebmap",
};

Tiledwebmap.type = "SeriesChart";
export default Tiledwebmap;
