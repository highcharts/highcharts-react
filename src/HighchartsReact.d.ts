/*
 * Copyright (C) Highsoft AS
 */

import * as React from "react";
import * as Highcharts from "highcharts";

/**
 * Highcharts component for React
 */
declare class HighchartsReact
    extends React.PureComponent<HighchartsReact.Props> {

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
    constructor(props: HighchartsReact.Props);

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
    _createChart(props: HighchartsReact.Props): void;

    /**
     * Creates the chart.
     */
    componentDidMount(): void;

    /**
     * Updates (or recreates with immutable on) the chart. Can be turned off in the optional React props.
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

declare namespace HighchartsReact {

    /**
     * Properties for a Highcharts component
     */
    interface Props {

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
         * Immutably recreates the chart on receiving new props
         */
        immutable?: boolean;

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
}

export default HighchartsReact;
