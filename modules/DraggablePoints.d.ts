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

/** Props for the `<DraggablePoints />` component. */
export type DraggablePointsProps = {};
/**
 * Makes points draggable, so the user can change the underlying data by
 * dragging them along the X and/or Y axis. Configured through
 * `plotOptions.series.dragDrop`.
 *
 * Importing the component also loads the Highcharts module it needs.
 *
 * @example
 * <Chart>
 *   <DraggablePoints />
 *   <PlotOptions series={{ dragDrop: { draggableY: true } }} />
 * </Chart>
 */
export declare function DraggablePoints(props: DraggablePointsProps): any;
export declare namespace DraggablePoints {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
        defaultOptions: any;
        isArrayType: boolean;
    };
}
export default DraggablePoints;
