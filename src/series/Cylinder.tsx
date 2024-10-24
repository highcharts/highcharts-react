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

import type { SeriesCylinderOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Cylinder/CylinderSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Cylinder series
 */
const Cylinder = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "cylinder",
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

interface CylinderSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesCylinderOptions>;
}

export function CylinderSeries(_props: CylinderSeriesProps) {
  return null;
}

CylinderSeries.type = "Series";
Cylinder.Series = CylinderSeries;

// TODO: Fix typings
// @ts-ignore:
CylinderSeries.defaultProps = {
  type: "cylinder",
};

Cylinder.type = "SeriesChart";
export default Cylinder;
