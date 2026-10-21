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
import type { AlignValue, AnimationOptionsObject, BubbleLegendFormatterContextObject, BubbleSizeByValue, CSSObject, ColorType, FormatterCallbackFunction, LegendItemClickCallbackFunction, Point, Series, VerticalAlignValue } from "highcharts";

/** Props for the `<Legend />` component. */
export type LegendProps = {
    accessibility?: {
        enabled?: boolean;
        keyboardNavigation?: {
            enabled?: boolean;
        };
    };
    align?: AlignValue;
    alignColumns?: boolean;
    backgroundColor?: ColorType;
    borderColor?: ColorType;
    borderRadius?: number;
    borderWidth?: number;
    bubbleLegend?: {
        borderColor?: ColorType;
        borderWidth?: number;
        className?: string;
        color?: ColorType;
        connectorClassName?: string;
        connectorColor?: ColorType;
        connectorDistance?: number;
        connectorWidth?: number;
        enabled?: boolean;
        labels?: {
            align?: AlignValue;
            allowOverlap?: boolean;
            className?: string;
            format?: string;
            formatter?: FormatterCallbackFunction<BubbleLegendFormatterContextObject>;
            style?: CSSObject;
            x?: number;
            y?: number;
        };
        legendIndex?: number;
        maxSize?: number;
        minSize?: number;
        ranges?: Array<{
            borderColor?: ColorType;
            color?: ColorType;
            connectorColor?: ColorType;
            value?: number;
        }>;
        sizeBy?: BubbleSizeByValue;
        sizeByAbsoluteValue?: boolean;
        zIndex?: number;
        zThreshold?: number;
    };
    className?: string;
    enabled?: boolean;
    events?: {
        itemClick?: LegendItemClickCallbackFunction;
    };
    floating?: boolean;
    itemCheckboxStyle?: CSSObject;
    itemDistance?: number;
    itemHiddenStyle?: CSSObject;
    itemHoverStyle?: CSSObject;
    itemMarginBottom?: number;
    itemMarginTop?: number;
    itemStyle?: CSSObject;
    itemWidth?: number;
    labelFormat?: string;
    labelFormatter?: FormatterCallbackFunction<Point | Series>;
    layout?: string;
    margin?: number;
    maxHeight?: number;
    maxWidth?: number | string;
    navigation?: {
        activeColor?: ColorType;
        animation?: boolean | Partial<AnimationOptionsObject>;
        arrowSize?: number;
        enabled?: boolean;
        inactiveColor?: ColorType;
        style?: CSSObject;
    };
    padding?: number;
    reversed?: boolean;
    rtl?: boolean;
    shadow?: boolean | CSSObject;
    squareSymbol?: boolean;
    symbolHeight?: number;
    symbolPadding?: number;
    symbolRadius?: number;
    symbolWidth?: number;
    title?: {
        style?: CSSObject;
        text?: string;
    };
    useHTML?: boolean;
    valueDecimals?: number;
    valueSuffix?: string;
    verticalAlign?: VerticalAlignValue;
    width?: number | string;
    x?: number;
    y?: number;
    children?: React.ReactNode;
};
/**
 * The legend is a box containing a symbol and name for each series item or
 * point item in the chart. Each series (or points in case of pie charts) is
 * represented by a symbol and its name in the legend.
 *
 * Sets `legend` on the parent chart. The children set `labelFormat`.
 *
 * @example
 * import { Chart, Legend } from '@highcharts/react';
 *
 * <Chart>
 *   <Legend align="right" layout="vertical" />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/legend
 */
export declare function Legend(props: LegendProps): any;
export declare namespace Legend {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
        defaultOptions: any;
        isArrayType: boolean;
    };
}
export default Legend;
