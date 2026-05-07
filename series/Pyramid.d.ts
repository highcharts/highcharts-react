/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-05-07
 *
 */
import React from "react";
import type { SeriesPyramidOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Pyramid series
 */
declare const Pyramid: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PyramidSeries;
    type: string;
};
type SeriesPyramidConfig = Omit<SeriesPyramidOptions, "type">;
export interface PyramidSeriesProps {
    id?: SeriesPyramidConfig["id"];
    index?: SeriesPyramidConfig["index"];
    name?: SeriesPyramidConfig["name"];
    className?: SeriesPyramidConfig["className"];
    color?: SeriesPyramidConfig["color"];
    events?: SeriesPyramidConfig["events"];
    data?: SeriesPyramidConfig["data"];
    options?: SeriesPyramidConfig;
}
export declare function PyramidSeries(_props: PyramidSeriesProps): any;
export declare namespace PyramidSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Pyramid;
