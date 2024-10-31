/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesSunburstOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Sunburst/SunburstSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Sunburst series
 */
const Sunburst = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "sunburst",
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

interface SunburstSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesSunburstOptions>;
}

export function SunburstSeries(_props: SunburstSeriesProps) {
  return null;
}

SunburstSeries.type = "Series";
Sunburst.Series = SunburstSeries;

// TODO: Fix typings
// @ts-ignore:
SunburstSeries.defaultProps = {
  type: "sunburst",
};

Sunburst.type = "SeriesChart";
export default Sunburst;
