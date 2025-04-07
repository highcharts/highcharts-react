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

import type { SeriesPointandfigureOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/PointAndFigure/PointAndFigureSeries.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Pointandfigure series
 */
const Pointandfigure = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "pointandfigure",
        },
      },
      props.options || {}
    )
  );

  return (
    <Chart
      title={props.title}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Chart>
  );
};

interface PointandfigureSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesPointandfigureOptions>;
  children?: React.ReactNode;
}

export function PointandfigureSeries(_props: PointandfigureSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
PointandfigureSeries.type = "Series";
Pointandfigure.Series = PointandfigureSeries;

PointandfigureSeries._HCReact = {
  type: "Series",
  HC_Option: "series.pointandfigure",
  childOption: "series.pointandfigure",
};

Pointandfigure.type = "SeriesChart";
export default Pointandfigure;
