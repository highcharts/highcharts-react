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
import "highcharts/es-modules/masters/modules/draggable-points.src.js";
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
export function DraggablePoints(props) {
    return null;
}
DraggablePoints._HCReact = {
    type: "HC_Option",
    HCOption: "draggablePoints",
    childOption: "",
    defaultOptions: undefined,
    isArrayType: false,
};
export default DraggablePoints;
