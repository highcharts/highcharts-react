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
import type { SeriesDisparityindexOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * DisparityIndex series
 */
declare const DisparityIndex: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DisparityIndexSeries;
    type: string;
};
type SeriesDisparityindexConfig = Omit<SeriesDisparityindexOptions, "type">;
export interface DisparityIndexSeriesProps {
    id?: SeriesDisparityindexConfig["id"];
    index?: SeriesDisparityindexConfig["index"];
    name?: SeriesDisparityindexConfig["name"];
    className?: SeriesDisparityindexConfig["className"];
    color?: SeriesDisparityindexConfig["color"];
    events?: SeriesDisparityindexConfig["events"];
    options?: SeriesDisparityindexConfig;
}
export declare function DisparityIndexSeries(_props: DisparityIndexSeriesProps): any;
export declare namespace DisparityIndexSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default DisparityIndex;
