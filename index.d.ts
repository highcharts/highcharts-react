import * as React from 'react';

export interface HighchartsReactProps {
    highcharts: Highcharts.Static;
    options: Highcharts.Options;
    constructorType?: string;
    oneToOne: boolean;
}

export class HighchartsReact extends React.Component<HighchartsReactProps> {

}

export default HighchartsReact;
