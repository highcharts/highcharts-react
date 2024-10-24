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

import type { SeriesBellcurveOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Bellcurve/BellcurveSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Bellcurve series
 */
const Bellcurve = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "bellcurve",
        },
      },
      props.options || {}
    )
  );

  return (
    <Highcharts
      title={props.title}
      chartConstructor="chart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface BellcurveSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesBellcurveOptions>;
}

export function BellcurveSeries(_props: BellcurveSeriesProps) {
  return null;
}

BellcurveSeries.type = "Series";
Bellcurve.Series = BellcurveSeries;

// TODO: Fix typings
// @ts-ignore:
BellcurveSeries.defaultProps = {
  type: "bellcurve",
};

Bellcurve.type = "SeriesChart";
export default Bellcurve;
