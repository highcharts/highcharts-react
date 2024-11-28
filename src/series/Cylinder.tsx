/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesCylinderOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Cylinder/CylinderSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
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
    <Chart title={props.title} chartConstructor="chart" options={chartConfig}>
      {props.children}
    </Chart>
  );
};

interface CylinderSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesCylinderOptions>;
  children?: React.ReactNode;
}

export function CylinderSeries(_props: CylinderSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
CylinderSeries.type = "Series";
Cylinder.Series = CylinderSeries;

CylinderSeries._HCReact = {
  type: "Series",
  HC_Option: "series.cylinder",
  childOption: "series.cylinder",
};

// TODO: Fix typings
// @ts-ignore:
CylinderSeries.defaultProps = {
  type: "cylinder",
};

Cylinder.type = "SeriesChart";
export default Cylinder;
