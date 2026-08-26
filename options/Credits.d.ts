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
