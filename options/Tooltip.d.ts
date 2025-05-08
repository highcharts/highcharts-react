/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-05-07
 *
 */
export type TooltipProps = {
    animation?: {
        duration?: number;
    };
    backgroundColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
    borderColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
    borderRadius?: number;
    borderWidth?: number;
    changeDecimals?: number;
    className?: string;
    clusterFormat?: string;
    dateTimeLabelFormats?: {
        day?: string;
        hour?: string;
        millisecond?: string;
        minute?: string;
        month?: string;
        second?: string;
        week?: string;
        year?: string;
    };
    distance?: number;
    enabled?: boolean;
    fixed?: boolean;
    followPointer?: boolean;
    followTouchMove?: boolean;
    footerFormat?: string;
    format?: string;
    formatter?: Highcharts.TooltipFormatterCallbackFunction;
    headerFormat?: string;
    headerShape?: Highcharts.TooltipShapeValue;
    hideDelay?: number;
    nullFormat?: string;
    nullFormatter?: Highcharts.TooltipFormatterCallbackFunction;
    outside?: boolean | undefined;
    padding?: number;
    pointFormat?: string;
    pointFormatter?: Highcharts.FormatterCallbackFunction<Highcharts.Point>;
    position?: Highcharts.AlignObject;
    positioner?: Highcharts.TooltipPositionerCallbackFunction;
    shadow?: boolean | Highcharts.ShadowOptionsObject;
    shape?: Highcharts.TooltipShapeValue;
    shared?: boolean;
    snap?: number;
    split?: boolean;
    stickOnContact?: boolean;
    style?: {
        color?: string;
        cursor?: string;
        fontSize?: number | string;
    };
    useHTML?: boolean;
    valueDecimals?: number | undefined;
    valuePrefix?: string;
    valueSuffix?: string;
    xDateFormat?: string | Highcharts.DateTimeFormatOptions;
    children?: string | (string | number)[] | React.ReactElement | React.ReactElement[];
};
export declare function Tooltip(props: TooltipProps): any;
export declare namespace Tooltip {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
        defaultOptions: {
            useHTML: boolean;
        };
        isArrayType: boolean;
    };
}
export default Tooltip;
