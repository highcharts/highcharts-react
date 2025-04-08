/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-07
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

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/esm/modules/cylinder.src.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
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

Cylinder.type = "SeriesChart";
export default Cylinder;
