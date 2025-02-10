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

import type { SeriesAoOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/AO/AOIndicator.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Ao series
 */
const Ao = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "ao",
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

interface AoSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesAoOptions>;
  children?: React.ReactNode;
}

export function AoSeries(_props: AoSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
AoSeries.type = "Series";
Ao.Series = AoSeries;

AoSeries._HCReact = {
  type: "Series",
  HC_Option: "series.ao",
  childOption: "series.ao",
};

Ao.type = "SeriesChart";
export default Ao;
