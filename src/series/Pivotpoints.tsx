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

import type { SeriesPivotpointsOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/PivotPoints/PivotPointsIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Pivotpoints series
 */
const Pivotpoints = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "pivotpoints",
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

interface PivotpointsSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesPivotpointsOptions>;
}

export function PivotpointsSeries(_props: PivotpointsSeriesProps) {
  return null;
}

PivotpointsSeries.type = "Series";
Pivotpoints.Series = PivotpointsSeries;

// TODO: Fix typings
// @ts-ignore:
PivotpointsSeries.defaultProps = {
  type: "pivotpoints",
};

Pivotpoints.type = "SeriesChart";
export default Pivotpoints;
