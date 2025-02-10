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

import type { SeriesBellcurveOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Bellcurve/BellcurveSeries.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
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

Bellcurve.type = "SeriesChart";
export default Bellcurve;
