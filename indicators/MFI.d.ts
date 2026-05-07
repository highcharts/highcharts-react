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
import type { SeriesMfiOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * MFI series
 */
declare const MFI: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MFISeries;
    type: string;
};
type SeriesMfiConfig = Omit<SeriesMfiOptions, "type">;
export interface MFISeriesProps {
    id?: SeriesMfiConfig["id"];
    index?: SeriesMfiConfig["index"];
    name?: SeriesMfiConfig["name"];
    className?: SeriesMfiConfig["className"];
    color?: SeriesMfiConfig["color"];
    events?: SeriesMfiConfig["events"];
    options?: SeriesMfiConfig;
}
export declare function MFISeries(_props: MFISeriesProps): any;
export declare namespace MFISeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default MFI;
