/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-10
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesTiledwebmapOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/TiledWebMap/TiledWebMapSeries.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
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
    <Chart
      title={props.title}
      chartConstructor="mapChart"
      options={chartConfig}
    >
      {props.children}
    </Chart>
  );
};

interface TiledwebmapSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesTiledwebmapOptions>;
  children?: React.ReactNode;
}

export function TiledwebmapSeries(_props: TiledwebmapSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
TiledwebmapSeries.type = "Series";
Tiledwebmap.Series = TiledwebmapSeries;

TiledwebmapSeries._HCReact = {
  type: "Series",
  HC_Option: "series.tiledwebmap",
  childOption: "series.tiledwebmap",
};

Tiledwebmap.type = "SeriesChart";
export default Tiledwebmap;
