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

import type { SeriesSankeyOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Sankey/SankeySeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Sankey series
 */
const Sankey = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "sankey",
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

interface SankeySeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesSankeyOptions>;
}

export function SankeySeries(_props: SankeySeriesProps) {
  return null;
}

SankeySeries.type = "Series";
Sankey.Series = SankeySeries;

// TODO: Fix typings
// @ts-ignore:
SankeySeries.defaultProps = {
  type: "sankey",
};

Sankey.type = "SeriesChart";
export default Sankey;
