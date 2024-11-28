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

import type { SeriesCmoOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/CMO/CMOIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Cmo series
 */
const Cmo = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "cmo",
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

interface CmoSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesCmoOptions>;
  children?: React.ReactNode;
}

export function CmoSeries(_props: CmoSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
CmoSeries.type = "Series";
Cmo.Series = CmoSeries;

CmoSeries._HCReact = {
  type: "Series",
  HC_Option: "series.cmo",
  childOption: "series.cmo",
};

// TODO: Fix typings
// @ts-ignore:
CmoSeries.defaultProps = {
  type: "cmo",
};

Cmo.type = "SeriesChart";
export default Cmo;
