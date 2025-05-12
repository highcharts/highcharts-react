if (!process.env.HIGHCHARTS_REACT_HIDE_UPGRADE_NOTE ) {
    const underline = (txt)=> `\x1b[4m${txt}\x1b[0m`;
    const blue = txt => `\x1b[34m${txt}\x1b[0m`;

    console.log(`${blue`Note`}: The beta for the next version of Highcharts React 
is now available at ${underline`https://www.npmjs.com/@highcharts/react`}`);
}
