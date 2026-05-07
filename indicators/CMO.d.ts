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
import type { SeriesCmoOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * CMO series
 */
declare const CMO: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof CMOSeries;
    type: string;
};
type SeriesCmoConfig = Omit<SeriesCmoOptions, "type">;
export interface CMOSeriesProps {
    id?: SeriesCmoConfig["id"];
    index?: SeriesCmoConfig["index"];
    name?: SeriesCmoConfig["name"];
    className?: SeriesCmoConfig["className"];
    color?: SeriesCmoConfig["color"];
    events?: SeriesCmoConfig["events"];
    options?: SeriesCmoConfig;
}
export declare function CMOSeries(_props: CMOSeriesProps): any;
export declare namespace CMOSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default CMO;
