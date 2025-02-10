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

import type { SeriesVbpOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/VBP/VBPIndicator.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Vbp series
 */
const Vbp = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "vbp",
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

interface VbpSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesVbpOptions>;
  children?: React.ReactNode;
}

export function VbpSeries(_props: VbpSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
VbpSeries.type = "Series";
Vbp.Series = VbpSeries;

VbpSeries._HCReact = {
  type: "Series",
  HC_Option: "series.vbp",
  childOption: "series.vbp",
};

Vbp.type = "SeriesChart";
export default Vbp;
