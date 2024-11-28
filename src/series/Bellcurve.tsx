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

import type { SeriesBellcurveOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Bellcurve/BellcurveSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Bellcurve series
 */
const Bellcurve = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "bellcurve",
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

interface BellcurveSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesBellcurveOptions>;
  children?: React.ReactNode;
}

export function BellcurveSeries(_props: BellcurveSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
BellcurveSeries.type = "Series";
Bellcurve.Series = BellcurveSeries;

BellcurveSeries._HCReact = {
  type: "Series",
  HC_Option: "series.bellcurve",
  childOption: "series.bellcurve",
};

// TODO: Fix typings
// @ts-ignore:
BellcurveSeries.defaultProps = {
  type: "bellcurve",
};

Bellcurve.type = "SeriesChart";
export default Bellcurve;
