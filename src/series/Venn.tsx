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

import type { SeriesVennOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Venn/VennSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Venn series
 */
const Venn = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "venn",
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

interface VennSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesVennOptions>;
}

export function VennSeries(_props: VennSeriesProps) {
  return null;
}

VennSeries.type = "Series";
Venn.Series = VennSeries;

// TODO: Fix typings
// @ts-ignore:
VennSeries.defaultProps = {
  type: "venn",
};

Venn.type = "SeriesChart";
export default Venn;
