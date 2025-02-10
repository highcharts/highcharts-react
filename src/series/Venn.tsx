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

import type { SeriesVennOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Venn/VennSeries.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Venn series
 */
const Venn = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "venn",
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

interface VennSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesVennOptions>;
  children?: React.ReactNode;
}

export function VennSeries(_props: VennSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
VennSeries.type = "Series";
Venn.Series = VennSeries;

VennSeries._HCReact = {
  type: "Series",
  HC_Option: "series.venn",
  childOption: "series.venn",
};

Venn.type = "SeriesChart";
export default Venn;
