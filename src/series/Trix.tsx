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

import type { SeriesTrixOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/TRIX/TRIXIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Trix series
 */
const Trix = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "trix",
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

interface TrixSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesTrixOptions>;
  children?: React.ReactNode;
}

export function TrixSeries(_props: TrixSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
TrixSeries.type = "Series";
Trix.Series = TrixSeries;

TrixSeries._HCReact = {
  type: "Series",
  HC_Option: "series.trix",
  childOption: "series.trix",
};

// TODO: Fix typings
// @ts-ignore:
TrixSeries.defaultProps = {
  type: "trix",
};

Trix.type = "SeriesChart";
export default Trix;
