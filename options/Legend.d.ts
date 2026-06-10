/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v12.6.0.
 * Build stamp: 2026-06-10
 *
 */
export type LegendProps = {
    accessibility?: {
        enabled?: boolean;
        keyboardNavigation?: {
            enabled?: boolean;
        };
    };
    align?: Highcharts.AlignValue;
    alignColumns?: boolean;
    backgroundColor?: Highcharts.ColorType;
    borderColor?: Highcharts.ColorType;
    borderRadius?: number;
    borderWidth?: number;
    bubbleLegend?: {
        borderColor?: Highcharts.ColorType;
        borderWidth?: number;
        className?: string;
        color?: Highcharts.ColorType;
        connectorClassName?: string;
        connectorColor?: Highcharts.ColorType;
        connectorDistance?: number;
        connectorWidth?: number;
        enabled?: boolean;
        labels?: {
            align?: Highcharts.AlignValue;
            allowOverlap?: boolean;
            className?: string;
            format?: string;
            formatter?: Highcharts.FormatterCallbackFunction<Highcharts.BubbleLegendFormatterContextObject>;
            style?: Highcharts.CSSObject;
            x?: number;
            y?: number;
        };
        legendIndex?: number;
        maxSize?: number;
        minSize?: number;
        ranges?: Array<{
            borderColor?: Highcharts.ColorType;
            color?: Highcharts.ColorType;
            connectorColor?: Highcharts.ColorType;
            value?: number;
        }>;
        sizeBy?: Highcharts.BubbleSizeByValue;
        sizeByAbsoluteValue?: boolean;
        zIndex?: number;
        zThreshold?: number;
    };
    className?: string;
    enabled?: boolean;
    events?: {
        itemClick?: Highcharts.LegendItemClickCallbackFunction;
    };
    floating?: boolean;
    itemCheckboxStyle?: Highcharts.CSSObject;
    itemDistance?: number;
    itemHiddenStyle?: Highcharts.CSSObject;
    itemHoverStyle?: Highcharts.CSSObject;
    itemMarginBottom?: number;
    itemMarginTop?: number;
    itemStyle?: Highcharts.CSSObject;
    itemWidth?: number;
    labelFormat?: string;
    labelFormatter?: Highcharts.FormatterCallbackFunction<Highcharts.Point | Highcharts.Series>;
    layout?: string;
    margin?: number;
    maxHeight?: number;
    maxWidth?: number | string;
    navigation?: {
        activeColor?: Highcharts.ColorType;
        animation?: boolean | Partial<Highcharts.AnimationOptionsObject>;
        arrowSize?: number;
        enabled?: boolean;
        inactiveColor?: Highcharts.ColorType;
        style?: Highcharts.CSSObject;
    };
    padding?: number;
    reversed?: boolean;
    rtl?: boolean;
    shadow?: boolean | Highcharts.CSSObject;
    squareSymbol?: boolean;
    symbolHeight?: number;
    symbolPadding?: number;
    symbolRadius?: number;
    symbolWidth?: number;
    title?: {
        style?: Highcharts.CSSObject;
        text?: string;
    };
    useHTML?: boolean;
    valueDecimals?: number;
    valueSuffix?: string;
    verticalAlign?: Highcharts.VerticalAlignValue;
    width?: number | string;
    x?: number;
    y?: number;
    children?: string | (string | number)[] | React.ReactElement | React.ReactElement[];
};
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
