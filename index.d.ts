import * as React from 'react';
import * as Highcharts from 'highcharts';

export interface HighchartsReactProps {
    highcharts: Highcharts.Static;
    options: Highcharts.Options;
    constructorType?: string;
}

export class HighchartsReact extends React.Component<HighchartsReactProps> {

}

export default HighchartsReact;