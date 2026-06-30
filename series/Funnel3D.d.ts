/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.0.
 * Build stamp: 2026-06-30
 *
 */
import React from "react";
import type { SeriesFunnel3dOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";



/**
 * Funnel3D series
 */
declare const Funnel3D: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof Funnel3DSeries;
    type: string;
};
type SeriesFunnel3dConfig = Omit<SeriesFunnel3dOptions, "type">;
export interface Funnel3DSeriesProps {
    id?: SeriesFunnel3dConfig["id"];
    index?: SeriesFunnel3dConfig["index"];
    name?: SeriesFunnel3dConfig["name"];
    className?: SeriesFunnel3dConfig["className"];
    color?: SeriesFunnel3dConfig["color"];
    events?: SeriesFunnel3dConfig["events"];
    data?: SeriesFunnel3dConfig["data"];
    options?: SeriesFunnel3dConfig;
}
export declare function Funnel3DSeries(_props: Funnel3DSeriesProps): any;
export declare namespace Funnel3DSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Funnel3D;
