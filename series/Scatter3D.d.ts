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
import type { SeriesScatter3dOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Scatter3D series
 */
declare const Scatter3D: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof Scatter3DSeries;
    type: string;
};
type SeriesScatter3dConfig = Omit<SeriesScatter3dOptions, "type">;
export interface Scatter3DSeriesProps {
    id?: SeriesScatter3dConfig["id"];
    index?: SeriesScatter3dConfig["index"];
    name?: SeriesScatter3dConfig["name"];
    className?: SeriesScatter3dConfig["className"];
    color?: SeriesScatter3dConfig["color"];
    events?: SeriesScatter3dConfig["events"];
    data?: SeriesScatter3dConfig["data"];
    options?: SeriesScatter3dConfig;
}
export declare function Scatter3DSeries(_props: Scatter3DSeriesProps): any;
export declare namespace Scatter3DSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Scatter3D;
