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
/** Props for the `<Credits />` component. */
export type CreditsProps = {
    enabled?: boolean;
    events?: object;
    href?: string;
    mapText?: string;
    mapTextFull?: string;
    position?: Highcharts.AlignObject;
    style?: Highcharts.CSSObject;
    text?: string;
    useHTML?: boolean;
    children?: React.ReactNode;
};
/**
 * Highcharts by default puts a credits label in the lower right corner of the
 * chart. This can be changed using these options.
 *
 * Sets `credits` on the parent chart. The children set `text`.
 *
 * @example
 * import { Chart, Credits } from '@highcharts/react';
 *
 * <Chart>
 *   <Credits enabled={false} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/credits
 */
export declare function Credits(props: CreditsProps): any;
export declare namespace Credits {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
        defaultOptions: any;
        isArrayType: boolean;
    };
}
export default Credits;
