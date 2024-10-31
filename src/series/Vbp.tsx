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

import type { SeriesVbpOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/VBP/VBPIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Vbp series
 */
const Vbp = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "vbp",
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

interface VbpSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesVbpOptions>;
}

export function VbpSeries(_props: VbpSeriesProps) {
  return null;
}

VbpSeries.type = "Series";
Vbp.Series = VbpSeries;

// TODO: Fix typings
// @ts-ignore:
VbpSeries.defaultProps = {
  type: "vbp",
};

Vbp.type = "SeriesChart";
export default Vbp;
