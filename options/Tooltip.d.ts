/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.1.
 * Build stamp: 2026-08-26
 *
 */
/** Props for the `<Tooltip />` component. */
export type TooltipProps = {
    animation?: boolean | Partial<Highcharts.AnimationOptionsObject>;
    backgroundColor?: Highcharts.ColorType;
    borderColor?: Highcharts.ColorType;
    borderRadius?: number;
    borderWidth?: number;
    changeDecimals?: number;
    className?: string;
    clusterFormat?: string;
    dateTimeLabelFormats?: Highcharts.Dictionary<string | Highcharts.DateTimeFormatOptions>;
    distance?: number;
    enabled?: boolean;
    fixed?: boolean;
    followPointer?: boolean;
    followTouchMove?: boolean;
    footerFormat?: string;
    format?: string;
    formatter?: Highcharts.TooltipFormatterCallbackFunction;
    header?: {
        backgroundColor?: Highcharts.ColorType;
        borderColor?: Highcharts.ColorType;
        borderWidth?: number;
        distance?: number;
        shape?: string;
    };
    headerFormat?: string;
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
    showDelay?: number;
    snap?: number;
    split?: boolean;
    stickOnContact?: boolean;
    style?: Highcharts.CSSObject;
    useHTML?: boolean;
    valueDecimals?: number | undefined;
    valuePrefix?: string;
    valueSuffix?: string;
    xDateFormat?: string | Highcharts.DateTimeFormatOptions;
    children?: React.ReactNode;
};
/**
 * Options for the tooltip that appears when the user hovers over a series or
 * point.
 *
 * Sets `tooltip` on the parent chart. The children set `format`.
 *
 * @example
 * <Chart>
 *   <Tooltip valueSuffix=" units" />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/tooltip
 */
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
