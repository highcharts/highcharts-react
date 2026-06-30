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
import type { SeriesContourOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Contour series
 */
declare const Contour: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ContourSeries;
    type: string;
};
type SeriesContourConfig = Omit<SeriesContourOptions, "type">;
export interface ContourSeriesProps {
    id?: SeriesContourConfig["id"];
    index?: SeriesContourConfig["index"];
    name?: SeriesContourConfig["name"];
    className?: SeriesContourConfig["className"];
    color?: SeriesContourConfig["color"];
    events?: SeriesContourConfig["events"];
    data?: SeriesContourConfig["data"];
    options?: SeriesContourConfig;
}
export declare function ContourSeries(_props: ContourSeriesProps): any;
export declare namespace ContourSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Contour;
