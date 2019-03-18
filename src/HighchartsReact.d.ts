/*
 * Copyright (C) Highsoft AS
 */

import * as React from "react";
import * as Highcharts from "highcharts";

/**
 * Properties for a Highcharts component
 */
export interface HighchartsReactProps {

    /* *
     *
     *  Properties
     *
     * */

    /**
     * Indexer for custom properties
     */
    [key: string]: any;

    /**
     * Flag for `Chart.update` call (Default: true)
     */
    allowChartUpdate?: boolean;

    /**
     * Reference to the chart factory (Default: chart)
     */
    constructorType?: keyof typeof Highcharts;

    /**
     * Properties of the chart container
     */
    containerProps?: { [key: string]: any}

    /**
     * Highcharts namespace
     */
    highcharts?: typeof Highcharts;

    /**
     * Highcharts options
     */
    options?: Highcharts.Options;

    /**
     * Flags for `Chart.update` call: redraw, oneToOne, and animation. (Default:
     * [true, true, true])
     */
    updateArgs?: ([boolean] | [boolean, boolean] | [boolean, boolean, boolean]);

    /* *
     *
     *  Functions
     *
     * */

    /**
     * Callback for the chart factory
     */
    callback?: Highcharts.ChartCallbackFunction;
}

/**
 * Highcharts component for React
 */
export default class HighchartsReact
    extends React.PureComponent<HighchartsReactProps> {

    /* *
     *
     *  Constructor
     *
     * */

    /**
     * Creates a new Highcharts component.
     *
     * @param props
     *        Optional React props
     */
    constructor(props: HighchartsReactProps);

    /* *
     *
     *  Properties
     *
     * */

    /**
     * Chart reference
     */
    public readonly chart: Highcharts.Chart;

    /**
     * React reference
     */
    public readonly container: React.RefObject<HTMLDivElement>;

    /* *
     *
     *  Functions
     *
     * */

    /**
     * Creates the chart.
     */
    componentDidMount(): void;

    /**
     * Updates the chart. Can be turned off in the optional React props.
     */
    componentDidUpdate(): void;

    /**
     * Destroys the chart right before the component gets destroyed.
     */
    componentWillUnmount(): void;

    /**
     * Places the chart into the React container.
     */
    render(): React.ReactNode;
}
