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

import type { SeriesCmoOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/CMO/CMOIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface CmoSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesCmoOptions>;
}

export function CmoSeries(_props: CmoSeriesProps) {
  return null;
}

CmoSeries.type = "Series";
Cmo.Series = CmoSeries;

// TODO: Fix typings
// @ts-ignore:
CmoSeries.defaultProps = {
  type: "cmo",
};

Cmo.type = "SeriesChart";
export default Cmo;
