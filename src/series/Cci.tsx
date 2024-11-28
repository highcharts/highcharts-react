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

import type { SeriesCciOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/CCI/CCIIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
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

// TODO: Fix typings
// @ts-ignore:
CciSeries.defaultProps = {
  type: "cci",
};

Cci.type = "SeriesChart";
export default Cci;
