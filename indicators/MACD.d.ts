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
import type { SeriesMacdOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * MACD series
 */
declare const MACD: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MACDSeries;
    type: string;
};
type SeriesMacdConfig = Omit<SeriesMacdOptions, "type">;
export interface MACDSeriesProps {
    id?: SeriesMacdConfig["id"];
    index?: SeriesMacdConfig["index"];
    name?: SeriesMacdConfig["name"];
    className?: SeriesMacdConfig["className"];
    color?: SeriesMacdConfig["color"];
    events?: SeriesMacdConfig["events"];
    options?: SeriesMacdConfig;
}
export declare function MACDSeries(_props: MACDSeriesProps): any;
export declare namespace MACDSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default MACD;
