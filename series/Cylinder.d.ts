/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v12.6.0.
 * Build stamp: 2026-06-10
 *
 */
import React from "react";
import type { SeriesCylinderOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Cylinder series
 */
declare const Cylinder: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof CylinderSeries;
    type: string;
};
type SeriesCylinderConfig = Omit<SeriesCylinderOptions, "type">;
export interface CylinderSeriesProps {
    id?: SeriesCylinderConfig["id"];
    index?: SeriesCylinderConfig["index"];
    name?: SeriesCylinderConfig["name"];
    className?: SeriesCylinderConfig["className"];
    color?: SeriesCylinderConfig["color"];
    events?: SeriesCylinderConfig["events"];
    data?: SeriesCylinderConfig["data"];
    options?: SeriesCylinderConfig;
}
export declare function CylinderSeries(_props: CylinderSeriesProps): any;
export declare namespace CylinderSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Cylinder;
