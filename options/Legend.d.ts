/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-07
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
    backgroundColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
    borderColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
    borderRadius?: number;
    borderWidth?: number;
    bubbleLegend?: {
        borderColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
        borderWidth?: number;
        className?: string;
        color?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
        connectorClassName?: string;
        connectorColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
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
        ranges?: {
            borderColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
            color?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
            connectorColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
            value?: number;
        };
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
    labelFormatter?: Highcharts.FormatterCallbackFunction<Point | Series>;
    layout?: string;
    margin?: number;
    maxHeight?: number;
    navigation?: {
        activeColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
        animation?: boolean | Partial<Highcharts.AnimationOptionsObject>;
        arrowSize?: number;
        enabled?: boolean;
        inactiveColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
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
