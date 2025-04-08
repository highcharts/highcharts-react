/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-07
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesGeoheatmapOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/esm/modules/geoheatmap.src.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Geoheatmap series
 */
const Geoheatmap = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "geoheatmap",
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

interface GeoheatmapSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesGeoheatmapOptions>;
  children?: React.ReactNode;
}

export function GeoheatmapSeries(_props: GeoheatmapSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
GeoheatmapSeries.type = "Series";
Geoheatmap.Series = GeoheatmapSeries;

GeoheatmapSeries._HCReact = {
  type: "Series",
  HC_Option: "series.geoheatmap",
  childOption: "series.geoheatmap",
};

Geoheatmap.type = "SeriesChart";
export default Geoheatmap;
