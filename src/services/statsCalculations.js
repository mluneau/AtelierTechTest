
countryWinrateCalc = (country) => {
    return 1;
}

BMICalc = (height, weight) => {
    if (height == 0 || weight == 0) {
        throw new Error("Input cannot be zero");
    }
    const heightConversion = height / 100; // Height in meters
    const weightConversion = weight / 1000; // Weight in kgs
    const bmi = weightConversion / Math.pow(heightConversion, 2);
    return parseFloat(bmi).toFixed(2);
}


medianHeightCalc = (heights) => {

    if (heights.length == 0) {
        throw new Error("No inputs");
    }

    heights.sort((a, b) => a - b);
    const middleIndex = Math.floor(heights.length / 2);

    return (heights.length % 2) ? heights[middleIndex] : ((heights[middleIndex -1] + heights[middleIndex]) / 2);
}

module.exports = {
    countryWinrateCalc,
    BMICalc,
    medianHeightCalc
}