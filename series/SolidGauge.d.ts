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
import type { SeriesSolidgaugeOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * SolidGauge series
 */
declare const SolidGauge: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SolidGaugeSeries;
    type: string;
};
type SeriesSolidgaugeConfig = Omit<SeriesSolidgaugeOptions, "type">;
export interface SolidGaugeSeriesProps {
    id?: SeriesSolidgaugeConfig["id"];
    index?: SeriesSolidgaugeConfig["index"];
    name?: SeriesSolidgaugeConfig["name"];
    className?: SeriesSolidgaugeConfig["className"];
    color?: SeriesSolidgaugeConfig["color"];
    events?: SeriesSolidgaugeConfig["events"];
    data?: SeriesSolidgaugeConfig["data"];
    options?: SeriesSolidgaugeConfig;
}
export declare function SolidGaugeSeries(_props: SolidGaugeSeriesProps): any;
export declare namespace SolidGaugeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default SolidGauge;
