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
/** Props for the `<YAxis />` component. */
export type YAxisProps = {
    endOnTick?: boolean;
    gridLineWidth?: number;
    height?: number | string;
    labels?: {
        align?: Highcharts.AlignValue;
        distance?: number | string;
        levels?: Array<{
            level?: number;
            style?: Highcharts.CSSObject;
        }>;
        symbol?: {
            height?: number;
            type?: Highcharts.SymbolKeyValue;
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
        formatter?: Highcharts.AxisLabelsFormatterCallbackFunction;
        indentation?: number;
        overflow?: string;
        padding?: number;
        position3d?: string;
        reserveSpace?: boolean;
        rotation?: number;
        skew3d?: boolean;
        staggerLines?: number;
        step?: number;
        style?: Highcharts.CSSObject;
        useHTML?: boolean;
        zIndex?: number;
    };
    lineWidth?: number;
    max?: number | string | null;
    maxColor?: Highcharts.ColorType;
    maxLength?: number | string;
    maxPadding?: number;
    min?: number | string | null;
    minColor?: Highcharts.ColorType;
    minLength?: number | string;
    minPadding?: number;
    opposite?: boolean;
    plotBands?: Array<{
        innerRadius?: number | string;
        outerRadius?: number | string;
        thickness?: number | string;
        acrossPanes?: boolean;
        borderColor?: Highcharts.ColorString;
        borderRadius?: number | string | Highcharts.BorderRadiusOptionsObject;
        borderWidth?: number;
        className?: string;
        color?: Highcharts.ColorType;
        events?: {
            click?: Highcharts.EventCallbackFunction<Highcharts.PlotLineOrBand>;
            mousemove?: Highcharts.EventCallbackFunction<Highcharts.PlotLineOrBand>;
            mouseout?: Highcharts.EventCallbackFunction<Highcharts.PlotLineOrBand>;
            mouseover?: Highcharts.EventCallbackFunction<Highcharts.PlotLineOrBand>;
        };
        from?: number | string;
        id?: string;
        label?: {
            align?: Highcharts.AlignValue;
            allowOverlap?: boolean;
            inside?: boolean;
            rotation?: number;
            style?: Highcharts.CSSObject;
            text?: string;
            textAlign?: Highcharts.AlignValue;
            useHTML?: boolean;
            verticalAlign?: Highcharts.VerticalAlignValue;
            x?: number;
            y?: number;
        };
        to?: number | string;
        zIndex?: number;
    }>;
    plotLines?: Array<{
        acrossPanes?: boolean;
        className?: string;
        color?: Highcharts.ColorString;
        dashStyle?: Highcharts.DashStyleValue;
        events?: {
            click?: Highcharts.EventCallbackFunction<Highcharts.PlotLineOrBand>;
            mousemove?: Highcharts.EventCallbackFunction<Highcharts.PlotLineOrBand>;
            mouseout?: Highcharts.EventCallbackFunction<Highcharts.PlotLineOrBand>;
            mouseover?: Highcharts.EventCallbackFunction<Highcharts.PlotLineOrBand>;
        };
        id?: string;
        label?: {
            align?: Highcharts.AlignValue;
            formatter?: Highcharts.FormatterCallbackFunction<Highcharts.PlotLineOrBand>;
            rotation?: number;
            style?: Highcharts.CSSObject;
            text?: string;
            textAlign?: Highcharts.AlignValue;
            useHTML?: boolean;
            verticalAlign?: Highcharts.VerticalAlignValue;
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
        lineColor?: Highcharts.ColorString;
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
        barBackgroundColor?: Highcharts.ColorType;
        barBorderColor?: Highcharts.ColorType;
        barBorderRadius?: number;
        barBorderWidth?: number;
        buttonArrowColor?: Highcharts.ColorType;
        buttonBackgroundColor?: Highcharts.ColorType;
        buttonBorderColor?: Highcharts.ColorType;
        buttonBorderRadius?: number;
        buttonBorderWidth?: number;
        buttonsEnabled?: boolean;
        liveRedraw?: boolean;
        minWidth?: number;
        rifleColor?: Highcharts.ColorType;
        trackBackgroundColor?: Highcharts.ColorType;
        trackBorderColor?: Highcharts.ColorType;
        trackBorderRadius?: number;
        trackBorderWidth?: number;
    };
    showLastLabel?: boolean;
    softMax?: number;
    softMin?: number;
    stackLabels?: {
        align?: Highcharts.AlignValue;
        allowOverlap?: boolean;
        animation?: boolean | Partial<Highcharts.AnimationOptionsObject>;
        backgroundColor?: Highcharts.ColorType;
        borderColor?: Highcharts.ColorType;
        borderRadius?: number;
        borderWidth?: number;
        crop?: boolean;
        enabled?: boolean;
        format?: string;
        formatter?: Highcharts.FormatterCallbackFunction<Highcharts.StackItemObject>;
        overflow?: Highcharts.DataLabelsOverflowValue;
        rotation?: number;
        style?: Highcharts.CSSObject;
        textAlign?: Highcharts.AlignValue;
        useHTML?: boolean;
        verticalAlign?: Highcharts.VerticalAlignValue;
        x?: number;
        y?: number;
    };
    stackShadow?: {
        borderColor?: Highcharts.ColorType;
        borderWidth?: number;
        color?: Highcharts.ColorType;
        enabled?: boolean;
    };
    startOnTick?: boolean;
    stops?: Array<[number, Highcharts.ColorType]>;
    tickPixelInterval?: number;
    tickWidth?: number;
    title?: {
        margin?: number;
        text?: string | undefined;
        align?: Highcharts.AxisTitleAlignValue;
        offset?: number | string;
        position3d?: "offset" | "chart" | "flap" | "ortho" | null;
        reserveSpace?: boolean;
        rotation?: number;
        skew3d?: boolean | null;
        style?: Highcharts.CSSObject;
        textAlign?: Highcharts.AlignValue;
        useHTML?: boolean;
        x?: number;
        y?: number;
    };
    tooltipValueFormat?: string;
    top?: number | string;
    type?: Highcharts.AxisTypeValue;
    accessibility?: {
        description?: string;
        enabled?: boolean;
        rangeDescription?: string;
    };
    alignTicks?: boolean;
    allowDecimals?: boolean | undefined;
    alternateGridColor?: Highcharts.ColorType;
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
        color?: Highcharts.ColorType;
        dashStyle?: Highcharts.DashStyleValue;
        label?: {
            align?: Highcharts.AlignValue;
            backgroundColor?: Highcharts.ColorType;
            borderColor?: Highcharts.ColorType;
            borderRadius?: number;
            borderWidth?: number;
            enabled?: boolean;
            format?: string;
            formatter?: Highcharts.XAxisCrosshairLabelFormatterCallbackFunction;
            padding?: number;
            shape?: string;
            style?: Highcharts.CSSObject;
        };
        showDelay?: number;
        snap?: boolean;
        width?: number;
        zIndex?: number;
    };
    crossing?: number;
    dateTimeLabelFormats?: {
        day?: Highcharts.AxisDateTimeLabelFormatsOptionsObject | string;
        hour?: Highcharts.AxisDateTimeLabelFormatsOptionsObject | string;
        millisecond?: Highcharts.AxisDateTimeLabelFormatsOptionsObject | string;
        minute?: Highcharts.AxisDateTimeLabelFormatsOptionsObject | string;
        month?: Highcharts.AxisDateTimeLabelFormatsOptionsObject | string;
        second?: Highcharts.AxisDateTimeLabelFormatsOptionsObject | string;
        week?: Highcharts.AxisDateTimeLabelFormatsOptionsObject | string;
        year?: Highcharts.AxisDateTimeLabelFormatsOptionsObject | string;
    };
    events?: {
        afterBreaks?: Highcharts.AxisEventCallbackFunction;
        afterSetExtremes?: Highcharts.AxisSetExtremesEventCallbackFunction;
        pointBreak?: Highcharts.AxisPointBreakEventCallbackFunction;
        pointInBreak?: Highcharts.AxisPointBreakEventCallbackFunction;
        setExtremes?: Highcharts.AxisSetExtremesEventCallbackFunction;
    };
    floor?: number;
    grid?: {
        borderColor?: Highcharts.ColorString;
        borderWidth?: number;
        cellHeight?: number;
        columns?: Array<Highcharts.XAxisOptions>;
        enabled?: boolean;
    };
    gridLineColor?: Highcharts.ColorType;
    gridLineDashStyle?: Highcharts.DashStyleValue;
    gridLineInterpolation?: "circle" | "polygon";
    gridZIndex?: number;
    id?: string;
    left?: number | string;
    lineColor?: Highcharts.ColorType;
    linkedTo?: number | string;
    margin?: number;
    maxRange?: number;
    minRange?: number;
    minTickInterval?: number;
    minorGridLineColor?: Highcharts.ColorType;
    minorGridLineDashStyle?: Highcharts.DashStyleValue;
    minorGridLineWidth?: number;
    minorTickColor?: Highcharts.ColorType;
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
    tickColor?: Highcharts.ColorType;
    tickInterval?: number;
    tickLength?: number;
    tickPosition?: string;
    tickPositioner?: Highcharts.AxisTickPositionerCallbackFunction;
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
