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

import type { SeriesArcdiagramOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/ArcDiagram/ArcDiagramSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="chart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface ArcdiagramSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesArcdiagramOptions>;
}

export function ArcdiagramSeries(_props: ArcdiagramSeriesProps) {
  return null;
}

ArcdiagramSeries.type = "Series";
Arcdiagram.Series = ArcdiagramSeries;

// TODO: Fix typings
// @ts-ignore:
ArcdiagramSeries.defaultProps = {
  type: "arcdiagram",
};

Arcdiagram.type = "SeriesChart";
export default Arcdiagram;
