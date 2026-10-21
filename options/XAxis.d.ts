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
import type { AlignValue, AxisDateTimeLabelFormatsOptionsObject, AxisEventCallbackFunction, AxisLabelsFormatterCallbackFunction, AxisPointBreakEventCallbackFunction, AxisSetExtremesEventCallbackFunction, AxisTickPositionerCallbackFunction, AxisTitleAlignValue, AxisTypeValue, BorderRadiusOptionsObject, CSSObject, ColorString, ColorType, CurrentDateIndicatorOptions, DashStyleValue, EventCallbackFunction, FormatterCallbackFunction, PlotLineOrBand, VerticalAlignValue, XAxisCrosshairLabelFormatterCallbackFunction, XAxisOptions } from "highcharts";

/** Props for the `<XAxis />` component. */
export type XAxisProps = {
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
    currentDateIndicator?: boolean | CurrentDateIndicatorOptions;
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
    endOnTick?: boolean;
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
    gridLineWidth?: number;
    gridZIndex?: number;
    height?: number | string;
    id?: string;
    labels?: {
        align?: AlignValue;
        allowOverlap?: boolean;
        autoRotation?: Array<number>;
        autoRotationLimit?: number;
        distance?: number;
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
        x?: number;
        y?: number;
        zIndex?: number;
    };
    left?: number | string;
    lineColor?: ColorType;
    lineWidth?: number;
    linkedTo?: number | string;
    margin?: number;
    max?: number | string | null;
    maxPadding?: number;
    maxRange?: number;
    min?: number | string | null;
    minPadding?: number;
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
    opposite?: boolean;
    ordinal?: boolean;
    overscroll?: number | string;
    pane?: number;
    panningEnabled?: boolean;
    plotBands?: Array<{
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
    range?: number;
    reversed?: boolean;
    reversedStacks?: boolean;
    scrollbar?: {
        enabled?: boolean;
        opposite?: boolean;
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
        height?: number;
        liveRedraw?: boolean;
        margin?: number | undefined;
        minWidth?: number;
        rifleColor?: ColorType;
        showFull?: boolean;
        trackBackgroundColor?: ColorType;
        trackBorderColor?: ColorType;
        trackBorderRadius?: number;
        trackBorderWidth?: number;
        zIndex?: number;
    };
    showEmpty?: boolean;
    showFirstLabel?: boolean;
    showLastLabel?: boolean;
    softMax?: number;
    softMin?: number;
    startOfWeek?: number;
    startOnTick?: boolean;
    staticScale?: number;
    tickAmount?: number;
    tickColor?: ColorType;
    tickInterval?: number;
    tickLength?: number;
    tickPixelInterval?: number;
    tickPosition?: string;
    tickPositioner?: AxisTickPositionerCallbackFunction;
    tickPositions?: Array<number>;
    tickWidth?: undefined | number;
    tickmarkPlacement?: string;
    title?: {
        align?: AxisTitleAlignValue;
        margin?: number;
        offset?: number | string;
        position3d?: "offset" | "chart" | "flap" | "ortho" | null;
        reserveSpace?: boolean;
        rotation?: number;
        skew3d?: boolean | null;
        style?: CSSObject;
        text?: string | null;
        textAlign?: AlignValue;
        useHTML?: boolean;
        x?: number;
        y?: number;
    };
    top?: number | string;
    type?: AxisTypeValue;
    uniqueNames?: boolean;
    units?: Array<[string, Array<number> | null]>;
    visible?: boolean;
    width?: number | string;
    zIndex?: number;
    zoomEnabled?: boolean;
    children?: React.ReactNode;
};
/**
 * The X axis or category axis. Normally this is the horizontal axis, though if
 * the chart is inverted this is the vertical axis. In case of multiple axes,
 * the xAxis node is an array of configuration objects.
 *
 * Sets `xAxis` on the parent chart. Several may be declared. The children set
 * `title.text`.
 *
 * @example
 * import { Chart, XAxis } from '@highcharts/react';
 *
 * <Chart>
 *   <XAxis categories={["Jan", "Feb", "Mar"]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/xAxis
 */
export declare function XAxis(props: XAxisProps): any;
export declare namespace XAxis {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
        defaultOptions: any;
        isArrayType: boolean;
    };
}
export default XAxis;
