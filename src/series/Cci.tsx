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

import type { SeriesCciOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/CCI/CCIIndicator.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Cci series
 */
const Cci = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "cci",
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

interface CciSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesCciOptions>;
  children?: React.ReactNode;
}

export function CciSeries(_props: CciSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
CciSeries.type = "Series";
Cci.Series = CciSeries;

CciSeries._HCReact = {
  type: "Series",
  HC_Option: "series.cci",
  childOption: "series.cci",
};

Cci.type = "SeriesChart";
export default Cci;
