/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesDisparityindexOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/DisparityIndex/DisparityIndexIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Disparityindex series
 */
const Disparityindex = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "disparityindex",
        },
      },
      props.options || {}
    )
  );

  return (
    <Highcharts
      title={props.title}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface DisparityindexSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesDisparityindexOptions>;
}

export function DisparityindexSeries(_props: DisparityindexSeriesProps) {
  return null;
}

DisparityindexSeries.type = "Series";
Disparityindex.Series = DisparityindexSeries;

// TODO: Fix typings
// @ts-ignore:
DisparityindexSeries.defaultProps = {
  type: "disparityindex",
};

Disparityindex.type = "SeriesChart";
export default Disparityindex;
