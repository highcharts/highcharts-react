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

import type { SeriesMfiOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/MFI/MFIIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Mfi series
 */
const Mfi = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "mfi",
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

interface MfiSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesMfiOptions>;
  children?: React.ReactNode;
}

export function MfiSeries(_props: MfiSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
MfiSeries.type = "Series";
Mfi.Series = MfiSeries;

MfiSeries._HCReact = {
  type: "Series",
  HC_Option: "series.mfi",
  childOption: "series.mfi",
};

// TODO: Fix typings
// @ts-ignore:
MfiSeries.defaultProps = {
  type: "mfi",
};

Mfi.type = "SeriesChart";
export default Mfi;
