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

import type { SeriesArcdiagramOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/ArcDiagram/ArcDiagramSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Arcdiagram series
 */
const Arcdiagram = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "arcdiagram",
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

interface ArcdiagramSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesArcdiagramOptions>;
  children?: React.ReactNode;
}

export function ArcdiagramSeries(_props: ArcdiagramSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
ArcdiagramSeries.type = "Series";
Arcdiagram.Series = ArcdiagramSeries;

ArcdiagramSeries._HCReact = {
  type: "Series",
  HC_Option: "series.arcdiagram",
  childOption: "series.arcdiagram",
};

// TODO: Fix typings
// @ts-ignore:
ArcdiagramSeries.defaultProps = {
  type: "arcdiagram",
};

Arcdiagram.type = "SeriesChart";
export default Arcdiagram;
