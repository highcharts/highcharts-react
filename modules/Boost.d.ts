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

/** Props for the `<Boost />` component. */
export type BoostProps = {
    allowForce?: boolean;
    chunkSize?: number;
    debug?: {
        showSkipSummary?: boolean;
        timeBufferCopy?: boolean;
        timeKDTree?: boolean;
        timeRendering?: boolean;
        timeSeriesProcessing?: boolean;
        timeSetup?: boolean;
    };
    enabled?: boolean;
    pixelRatio?: number;
    seriesThreshold?: number;
    useGPUTranslations?: boolean;
    usePreallocated?: boolean;
};
/**
 * Options for the Boost module. The Boost module allows certain series types
 * to be rendered by WebGL instead of the default SVG. This allows hundreds of
 * thousands of data points to be rendered in milliseconds. In addition to the
 * WebGL rendering it saves time by skipping processing and inspection of the
 * data wherever possible. This introduces some limitations to what features
 * are available in boost mode. See [the
 * docs](https://www.highcharts.com/docs/advanced-chart-features/boost-module)
 * for details.
 *
 * Sets `boost` on the parent chart. Importing the component also loads the
 * Highcharts module it needs.
 *
 * @example
 * <Chart>
 *   <Boost seriesThreshold={5} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/boost
 */
export declare function Boost(props: BoostProps): any;
export declare namespace Boost {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
        defaultOptions: any;
        isArrayType: boolean;
    };
}
export default Boost;
