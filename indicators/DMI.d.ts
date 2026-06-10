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
import type { SeriesDmiOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * DMI series
 */
declare const DMI: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DMISeries;
    type: string;
};
type SeriesDmiConfig = Omit<SeriesDmiOptions, "type">;
export interface DMISeriesProps {
    id?: SeriesDmiConfig["id"];
    index?: SeriesDmiConfig["index"];
    name?: SeriesDmiConfig["name"];
    className?: SeriesDmiConfig["className"];
    color?: SeriesDmiConfig["color"];
    events?: SeriesDmiConfig["events"];
    options?: SeriesDmiConfig;
}
export declare function DMISeries(_props: DMISeriesProps): any;
export declare namespace DMISeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default DMI;
