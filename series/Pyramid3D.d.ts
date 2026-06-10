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
import type { SeriesPyramid3dOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";




/**
 * Pyramid3D series
 */
declare const Pyramid3D: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof Pyramid3DSeries;
    type: string;
};
type SeriesPyramid3dConfig = Omit<SeriesPyramid3dOptions, "type">;
export interface Pyramid3DSeriesProps {
    id?: SeriesPyramid3dConfig["id"];
    index?: SeriesPyramid3dConfig["index"];
    name?: SeriesPyramid3dConfig["name"];
    className?: SeriesPyramid3dConfig["className"];
    color?: SeriesPyramid3dConfig["color"];
    events?: SeriesPyramid3dConfig["events"];
    data?: SeriesPyramid3dConfig["data"];
    options?: SeriesPyramid3dConfig;
}
export declare function Pyramid3DSeries(_props: Pyramid3DSeriesProps): any;
export declare namespace Pyramid3DSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Pyramid3D;
