/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-04
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesMappointOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

if (typeof getHighcharts().__provided === "undefined") {
}

/**
 * Mappoint series
 */
const Mappoint = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "mappoint",
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

interface MappointSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesMappointOptions>;
  children?: React.ReactNode;
}

export function MappointSeries(_props: MappointSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
MappointSeries.type = "Series";
Mappoint.Series = MappointSeries;

MappointSeries._HCReact = {
  type: "Series",
  HC_Option: "series.mappoint",
  childOption: "series.mappoint",
};

Mappoint.type = "SeriesChart";
export default Mappoint;
