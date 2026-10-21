/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.1.1.
 * Build stamp: 2026-10-12
 *
 */
import type { AlignObject, AnimationOptionsObject, CSSObject, ColorType, DateTimeFormatOptions, Dictionary, FormatterCallbackFunction, Point, ShadowOptionsObject, TooltipFormatterCallbackFunction, TooltipPositionerCallbackFunction, TooltipShapeValue } from "highcharts";

/** Props for the `<Tooltip />` component. */
export type TooltipProps = {
    animation?: boolean | Partial<AnimationOptionsObject>;
    backgroundColor?: ColorType;
    borderColor?: ColorType;
    borderRadius?: number;
    borderWidth?: number;
    changeDecimals?: number;
    className?: string;
    clusterFormat?: string;
    dateTimeLabelFormats?: Dictionary<string | DateTimeFormatOptions>;
    distance?: number;
    enabled?: boolean;
    fixed?: boolean;
    followPointer?: boolean;
    followTouchMove?: boolean;
    footerFormat?: string;
    format?: string;
    formatter?: TooltipFormatterCallbackFunction;
    header?: {
        backgroundColor?: ColorType;
        borderColor?: ColorType;
        borderWidth?: number;
        distance?: number;
        shape?: string;
    };
    headerFormat?: string;
    hideDelay?: number;
    nullFormat?: string;
    nullFormatter?: TooltipFormatterCallbackFunction;
    outside?: boolean | undefined;
    padding?: number;
    pointFormat?: string;
    pointFormatter?: FormatterCallbackFunction<Point>;
    position?: AlignObject;
    positioner?: TooltipPositionerCallbackFunction;
    shadow?: boolean | ShadowOptionsObject;
    shape?: TooltipShapeValue;
    shared?: boolean;
    showDelay?: number;
    snap?: number;
    split?: boolean;
    stickOnContact?: boolean;
    style?: CSSObject;
    useHTML?: boolean;
    valueDecimals?: number | undefined;
    valuePrefix?: string;
    valueSuffix?: string;
    xDateFormat?: string | DateTimeFormatOptions;
    children?: React.ReactNode;
};
/**
 * Options for the tooltip that appears when the user hovers over a series or
 * point.
 *
 * Sets `tooltip` on the parent chart. The children set `format`.
 *
 * @example
 * import { Chart, Tooltip } from '@highcharts/react';
 *
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
