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
import type { AlignValue, AnimationOptionsObject, AxisDateTimeLabelFormatsOptionsObject, AxisEventCallbackFunction, AxisLabelsFormatterCallbackFunction, AxisPointBreakEventCallbackFunction, AxisSetExtremesEventCallbackFunction, AxisTickPositionerCallbackFunction, AxisTitleAlignValue, AxisTypeValue, BorderRadiusOptionsObject, CSSObject, ColorString, ColorType, DashStyleValue, DataLabelsOverflowValue, EventCallbackFunction, FormatterCallbackFunction, PlotLineOrBand, StackItemObject, SymbolKeyValue, VerticalAlignValue, XAxisCrosshairLabelFormatterCallbackFunction, XAxisOptions } from "highcharts";

/** Props for the `<YAxis />` component. */
export type YAxisProps = {
    endOnTick?: boolean;
    gridLineWidth?: number;
    height?: number | string;
    labels?: {
        align?: AlignValue;
        distance?: number | string;
        levels?: Array<{
            level?: number;
            style?: CSSObject;
        }>;
        symbol?: {
            height?: number;
            type?: SymbolKeyValue;
            width?: number;
            x?: number;
            y?: number;
        };
        x?: number;
        y?: number;
        allowOverlap?: boolean;
        autoRotation?: Array<number>;
        autoRotationLimit?: number;
        enabled?: boolean;
        format?: string;
        formatter?: AxisLabelsFormatterCallbackFunction;
        indentation?: number;
        overflow?: string;
        padding?: number;
        position3d?: string;
        reserveSpace?: boolean;
        rotation?: number;
        skew3d?: boolean;
        staggerLines?: number;
        step?: number;
        style?: CSSObject;
        useHTML?: boolean;
        zIndex?: number;
    };
    lineWidth?: number;
    max?: number | string | null;
    maxColor?: ColorType;
    maxLength?: number | string;
    maxPadding?: number;
    min?: number | string | null;
    minColor?: ColorType;
    minLength?: number | string;
    minPadding?: number;
    opposite?: boolean;
    plotBands?: Array<{
        innerRadius?: number | string;
        outerRadius?: number | string;
        thickness?: number | string;
        acrossPanes?: boolean;
        borderColor?: ColorString;
        borderRadius?: number | string | BorderRadiusOptionsObject;
        borderWidth?: number;
        className?: string;
        color?: ColorType;
        events?: {
            click?: EventCallbackFunction<PlotLineOrBand>;
            mousemove?: EventCallbackFunction<PlotLineOrBand>;
            mouseout?: EventCallbackFunction<PlotLineOrBand>;
            mouseover?: EventCallbackFunction<PlotLineOrBand>;
        };
        from?: number | string;
        id?: string;
        label?: {
            align?: AlignValue;
            allowOverlap?: boolean;
            inside?: boolean;
            rotation?: number;
            style?: CSSObject;
            text?: string;
            textAlign?: AlignValue;
            useHTML?: boolean;
            verticalAlign?: VerticalAlignValue;
            x?: number;
            y?: number;
        };
        to?: number | string;
        zIndex?: number;
    }>;
    plotLines?: Array<{
        acrossPanes?: boolean;
        className?: string;
        color?: ColorString;
        dashStyle?: DashStyleValue;
        events?: {
            click?: EventCallbackFunction<PlotLineOrBand>;
            mousemove?: EventCallbackFunction<PlotLineOrBand>;
            mouseout?: EventCallbackFunction<PlotLineOrBand>;
            mouseover?: EventCallbackFunction<PlotLineOrBand>;
        };
        id?: string;
        label?: {
            align?: AlignValue;
            formatter?: FormatterCallbackFunction<PlotLineOrBand>;
            rotation?: number;
            style?: CSSObject;
            text?: string;
            textAlign?: AlignValue;
            useHTML?: boolean;
            verticalAlign?: VerticalAlignValue;
            x?: number;
            y?: number;
        };
        labels?: {
            clip?: boolean;
        };
        value?: number | string;
        width?: number;
        zIndex?: number;
    }>;
    resize?: {
        controlledAxis?: {
            next?: Array<number | string>;
            prev?: Array<number | string>;
        };
        cursor?: string;
        enabled?: boolean;
        lineColor?: ColorString;
        lineDashStyle?: string;
        lineWidth?: number;
        x?: number;
        y?: number;
    };
    reversed?: boolean;
    reversedStacks?: boolean;
    scrollbar?: {
        enabled?: boolean;
        margin?: number;
        opposite?: boolean;
        showFull?: boolean;
        size?: number;
        zIndex?: number;
        barBackgroundColor?: ColorType;
        barBorderColor?: ColorType;
        barBorderRadius?: number;
        barBorderWidth?: number;
        buttonArrowColor?: ColorType;
        buttonBackgroundColor?: ColorType;
        buttonBorderColor?: ColorType;
        buttonBorderRadius?: number;
        buttonBorderWidth?: number;
        buttonsEnabled?: boolean;
        liveRedraw?: boolean;
        minWidth?: number;
        rifleColor?: ColorType;
        trackBackgroundColor?: ColorType;
        trackBorderColor?: ColorType;
        trackBorderRadius?: number;
        trackBorderWidth?: number;
    };
    showLastLabel?: boolean;
    softMax?: number;
    softMin?: number;
    stackLabels?: {
        align?: AlignValue;
        allowOverlap?: boolean;
        animation?: boolean | Partial<AnimationOptionsObject>;
        backgroundColor?: ColorType;
        borderColor?: ColorType;
        borderRadius?: number;
        borderWidth?: number;
        crop?: boolean;
        enabled?: boolean;
        format?: string;
        formatter?: FormatterCallbackFunction<StackItemObject>;
        overflow?: DataLabelsOverflowValue;
        rotation?: number;
        style?: CSSObject;
        textAlign?: AlignValue;
        useHTML?: boolean;
        verticalAlign?: VerticalAlignValue;
        x?: number;
        y?: number;
    };
    stackShadow?: {
        borderColor?: ColorType;
        borderWidth?: number;
        color?: ColorType;
        enabled?: boolean;
    };
    startOnTick?: boolean;
    stops?: Array<[number, ColorType]>;
    tickPixelInterval?: number;
    tickWidth?: number;
    title?: {
        margin?: number;
        text?: string | undefined;
        align?: AxisTitleAlignValue;
        offset?: number | string;
        position3d?: "offset" | "chart" | "flap" | "ortho" | null;
        reserveSpace?: boolean;
        rotation?: number;
        skew3d?: boolean | null;
        style?: CSSObject;
        textAlign?: AlignValue;
        useHTML?: boolean;
        x?: number;
        y?: number;
    };
    tooltipValueFormat?: string;
    top?: number | string;
    type?: AxisTypeValue;
    accessibility?: {
        description?: string;
        enabled?: boolean;
        rangeDescription?: string;
    };
    alignTicks?: boolean;
    allowDecimals?: boolean | undefined;
    alternateGridColor?: ColorType;
    angle?: number;
    breaks?: Array<{
        breakSize?: number;
        from?: number | string;
        repeat?: number;
        to?: number | string;
    }>;
    categories?: Array<string>;
    ceiling?: number;
    className?: string;
    crosshair?: boolean | {
        className?: string;
        color?: ColorType;
        dashStyle?: DashStyleValue;
        label?: {
            align?: AlignValue;
            backgroundColor?: ColorType;
            borderColor?: ColorType;
            borderRadius?: number;
            borderWidth?: number;
            enabled?: boolean;
            format?: string;
            formatter?: XAxisCrosshairLabelFormatterCallbackFunction;
            padding?: number;
            shape?: string;
            style?: CSSObject;
        };
        showDelay?: number;
        snap?: boolean;
        width?: number;
        zIndex?: number;
    };
    crossing?: number;
    dateTimeLabelFormats?: {
        day?: AxisDateTimeLabelFormatsOptionsObject | string;
        hour?: AxisDateTimeLabelFormatsOptionsObject | string;
        millisecond?: AxisDateTimeLabelFormatsOptionsObject | string;
        minute?: AxisDateTimeLabelFormatsOptionsObject | string;
        month?: AxisDateTimeLabelFormatsOptionsObject | string;
        second?: AxisDateTimeLabelFormatsOptionsObject | string;
        week?: AxisDateTimeLabelFormatsOptionsObject | string;
        year?: AxisDateTimeLabelFormatsOptionsObject | string;
    };
    events?: {
        afterBreaks?: AxisEventCallbackFunction;
        afterSetExtremes?: AxisSetExtremesEventCallbackFunction;
        pointBreak?: AxisPointBreakEventCallbackFunction;
        pointInBreak?: AxisPointBreakEventCallbackFunction;
        setExtremes?: AxisSetExtremesEventCallbackFunction;
    };
    floor?: number;
    grid?: {
        borderColor?: ColorString;
        borderWidth?: number;
        cellHeight?: number;
        columns?: Array<XAxisOptions>;
        enabled?: boolean;
    };
    gridLineColor?: ColorType;
    gridLineDashStyle?: DashStyleValue;
    gridLineInterpolation?: "circle" | "polygon";
    gridZIndex?: number;
    id?: string;
    left?: number | string;
    lineColor?: ColorType;
    linkedTo?: number | string;
    margin?: number;
    maxRange?: number;
    minRange?: number;
    minTickInterval?: number;
    minorGridLineColor?: ColorType;
    minorGridLineDashStyle?: DashStyleValue;
    minorGridLineWidth?: number;
    minorTickColor?: ColorType;
    minorTickInterval?: number | "auto";
    minorTickLength?: number;
    minorTickPosition?: string;
    minorTickWidth?: number;
    minorTicks?: boolean;
    minorTicksPerMajor?: number;
    offset?: number | string;
    pane?: number;
    panningEnabled?: boolean;
    range?: number;
    showEmpty?: boolean;
    showFirstLabel?: boolean;
    startOfWeek?: number;
    staticScale?: number;
    tickAmount?: number;
    tickColor?: ColorType;
    tickInterval?: number;
    tickLength?: number;
    tickPosition?: string;
    tickPositioner?: AxisTickPositionerCallbackFunction;
    tickPositions?: Array<number>;
    tickmarkPlacement?: string;
    uniqueNames?: boolean;
    units?: Array<[string, Array<number> | null]>;
    visible?: boolean;
    width?: number | string;
    zIndex?: number;
    zoomEnabled?: boolean;
    children?: React.ReactNode;
};
/**
 * The Y axis or value axis. Normally this is the vertical axis, though if the
 * chart is inverted this is the horizontal axis. In case of multiple axes, the
 * yAxis node is an array of configuration objects.
 *
 * Sets `yAxis` on the parent chart. Several may be declared. The children set
 * `title.text`.
 *
 * @example
 * import { Chart, YAxis } from '@highcharts/react';
 *
 * <Chart>
 *   <YAxis>Temperature</YAxis>
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/yAxis
 */
export declare function YAxis(props: YAxisProps): any;
export declare namespace YAxis {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
        defaultOptions: any;
        isArrayType: boolean;
    };
}
export default YAxis;
