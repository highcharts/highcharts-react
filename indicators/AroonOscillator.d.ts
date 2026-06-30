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
import type { SeriesAroonoscillatorOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";



/**
 * AroonOscillator series
 */
declare const AroonOscillator: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AroonOscillatorSeries;
    type: string;
};
type SeriesAroonoscillatorConfig = Omit<SeriesAroonoscillatorOptions, "type">;
export interface AroonOscillatorSeriesProps {
    id?: SeriesAroonoscillatorConfig["id"];
    index?: SeriesAroonoscillatorConfig["index"];
    name?: SeriesAroonoscillatorConfig["name"];
    className?: SeriesAroonoscillatorConfig["className"];
    color?: SeriesAroonoscillatorConfig["color"];
    events?: SeriesAroonoscillatorConfig["events"];
    options?: SeriesAroonoscillatorConfig;
}
export declare function AroonOscillatorSeries(_props: AroonOscillatorSeriesProps): any;
export declare namespace AroonOscillatorSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default AroonOscillator;
