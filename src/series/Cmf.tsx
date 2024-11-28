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

import type { SeriesCmfOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/CMF/CMFIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Cmf series
 */
const Cmf = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "cmf",
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

interface CmfSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesCmfOptions>;
  children?: React.ReactNode;
}

export function CmfSeries(_props: CmfSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
CmfSeries.type = "Series";
Cmf.Series = CmfSeries;

CmfSeries._HCReact = {
  type: "Series",
  HC_Option: "series.cmf",
  childOption: "series.cmf",
};

// TODO: Fix typings
// @ts-ignore:
CmfSeries.defaultProps = {
  type: "cmf",
};

Cmf.type = "SeriesChart";
export default Cmf;
