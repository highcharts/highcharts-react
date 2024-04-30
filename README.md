# Highcharts React

_Official Highcharts React Integration_

# Installing

*NPM*

```
npm i highcharts-react-official
```

*Yarn*

```
yarn add highcharts-react-official
```

# Basic Usage

In order to run the below sample, you also need to add react and react-dom to your dependencies - `yarn add react react-dom` in addition to the Highcharts Integration.

```
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import Chart from 'highcharts-react-official/Highcharts';
import Area from 'highcharts-react-official/Area';
import Line from 'highcharts-react-official/Line';

const Application = () => (
  <Chart title="Chart with multiple series types">
    <Area.Series data={[0, 1, 2, 3]} />
    <Line.Series data={[4, 5, 4, 2]} />
  </Chart>
);

root.render(<Application />);
```



