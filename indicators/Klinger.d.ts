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
import type { SeriesKlingerOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Klinger series
 */
declare const Klinger: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof KlingerSeries;
    type: string;
};
type SeriesKlingerConfig = Omit<SeriesKlingerOptions, "type">;
export interface KlingerSeriesProps {
    id?: SeriesKlingerConfig["id"];
    index?: SeriesKlingerConfig["index"];
    name?: SeriesKlingerConfig["name"];
    className?: SeriesKlingerConfig["className"];
    color?: SeriesKlingerConfig["color"];
    events?: SeriesKlingerConfig["events"];
    options?: SeriesKlingerConfig;
}
export declare function KlingerSeries(_props: KlingerSeriesProps): any;
export declare namespace KlingerSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Klinger;
