/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.0.
 * Build stamp: 2026-06-30
 *
 */

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
