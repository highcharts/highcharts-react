# Highcharts React

_Official Highcharts React Integration_

Note: For users migrating from v3 of Highcharts React, see the [migration guide](https://www.highcharts.com/docs/react/v4-migration-guide) for details.

# Installing

*NPM*

```
npm i @highcharts/react
```

*Yarn*

```
yarn add @highcharts/react
```

# Basic Usage

In order to run the below sample, you also need to add react and react-dom to your dependencies - `npm install react react-dom` in addition to the Highcharts Integration.

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

import {
  Chart,
  Title
} from '@highcharts/react';

import {
  Area,
  Line
} from '@highcharts/react/series';

export function Application () {
    return (
        <Chart>
            <Title>Chart with multiple series types</Title>
            <Area.Series data={[0, 1, 2, 3]} />
            <Line.Series data={[2, 1, 3, 1]} />
        </Chart>
    );
}

const root = createRoot(document.getElementById('root'));

root.render(<Application />);
```



