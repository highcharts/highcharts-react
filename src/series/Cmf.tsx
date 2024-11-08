/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesCmfOptions } from "highcharts/highcharts";

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
}

export function CmfSeries(_props: CmfSeriesProps) {
  return null;
}

CmfSeries.type = "Series";
Cmf.Series = CmfSeries;

// TODO: Fix typings
// @ts-ignore:
CmfSeries.defaultProps = {
  type: "cmf",
};

Cmf.type = "SeriesChart";
export default Cmf;
