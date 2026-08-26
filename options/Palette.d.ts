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
/** Props for the `<Palette />` component. */
export type PaletteProps = Highcharts.PaletteOptions;
/**
 * The palette object specifies colors for the charts and how to apply them.
 *
 * Sets `palette` on the parent chart.
 *
 * @example
 * <Chart>
 *   <Palette colors={["#2caffe", "#544fc5"]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/palette
 */
export declare function Palette(props: PaletteProps): any;
export declare namespace Palette {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
        defaultOptions: any;
        isArrayType: boolean;
    };
}
export default Palette;
