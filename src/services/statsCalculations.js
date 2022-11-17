playerRatio = (last) => {
    ratio = {
        win: 0,
        loss: 0
    };
    for (i=0; i<last.length; i++) {
        last[i] == 1 ? ratio.win += 1 : ratio.loss += 1;
    }
    
    return ratio.loss == 0 ? ratio.win : parseFloat(ratio.win / ratio.loss).toFixed(2); 
};

countryRatioCalc = (country) => {
    // Need to implement addition of country ratios.
    return 0;
};

BMICalc = (height, weight) => {
    if (height == 0 || weight == 0) {
        throw new Error("Input cannot be zero");
    }

    const heightConversion = height / 100; // Height in meters
    const weightConversion = weight / 1000; // Weight in kgs
    const bmi = weightConversion / Math.pow(heightConversion, 2);
    //console.log(bmi);
    return parseFloat(bmi.toFixed(2));
};


medianHeightCalc = (heights) => {
    if (heights.length == 0) {
        throw new Error("No inputs");
    }

    heights.sort((a, b) => a - b);
    const middleIndex = Math.floor(heights.length / 2);

    return (heights.length % 2) ? heights[middleIndex] : ((heights[middleIndex -1] + heights[middleIndex]) / 2);
};

module.exports = {
    playerRatio,
    countryRatioCalc,
    BMICalc,
    medianHeightCalc
};
