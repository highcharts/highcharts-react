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

import type { SeriesPsarOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/PSAR/PSARIndicator.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Psar series
 */
const Psar = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "psar",
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

interface PsarSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesPsarOptions>;
  children?: React.ReactNode;
}

export function PsarSeries(_props: PsarSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
PsarSeries.type = "Series";
Psar.Series = PsarSeries;

PsarSeries._HCReact = {
  type: "Series",
  HC_Option: "series.psar",
  childOption: "series.psar",
};

Psar.type = "SeriesChart";
export default Psar;
