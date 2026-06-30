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
import type { SeriesGaugeOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Gauge series
 */
declare const Gauge: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof GaugeSeries;
    type: string;
};
type SeriesGaugeConfig = Omit<SeriesGaugeOptions, "type">;
export interface GaugeSeriesProps {
    id?: SeriesGaugeConfig["id"];
    index?: SeriesGaugeConfig["index"];
    name?: SeriesGaugeConfig["name"];
    className?: SeriesGaugeConfig["className"];
    color?: SeriesGaugeConfig["color"];
    events?: SeriesGaugeConfig["events"];
    data?: SeriesGaugeConfig["data"];
    options?: SeriesGaugeConfig;
}
export declare function GaugeSeries(_props: GaugeSeriesProps): any;
export declare namespace GaugeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Gauge;
