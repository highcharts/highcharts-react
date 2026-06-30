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
import type { SeriesDpoOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * DPO series
 */
declare const DPO: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DPOSeries;
    type: string;
};
type SeriesDpoConfig = Omit<SeriesDpoOptions, "type">;
export interface DPOSeriesProps {
    id?: SeriesDpoConfig["id"];
    index?: SeriesDpoConfig["index"];
    name?: SeriesDpoConfig["name"];
    className?: SeriesDpoConfig["className"];
    color?: SeriesDpoConfig["color"];
    events?: SeriesDpoConfig["events"];
    options?: SeriesDpoConfig;
}
export declare function DPOSeries(_props: DPOSeriesProps): any;
export declare namespace DPOSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default DPO;
