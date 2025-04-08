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

import type { SeriesChaikinOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/esm/modules/chaikin.src.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Chaikin series
 */
const Chaikin = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "chaikin",
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

interface ChaikinSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesChaikinOptions>;
  children?: React.ReactNode;
}

export function ChaikinSeries(_props: ChaikinSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
ChaikinSeries.type = "Series";
Chaikin.Series = ChaikinSeries;

ChaikinSeries._HCReact = {
  type: "Series",
  HC_Option: "series.chaikin",
  childOption: "series.chaikin",
};

Chaikin.type = "SeriesChart";
export default Chaikin;
