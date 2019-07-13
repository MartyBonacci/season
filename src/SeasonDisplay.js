import React from 'react';

const getSeason = (lat, month) => {
    return lat > 0 ? month > 2 && month < 9 ? "summer" : "winter" : month > 2 && month < 0 ? "winter" : "summer"
}

const SeasonDisplay = ({lat}) => {
    const season = getSeason(lat, new Date().getMonth());
    return <div>{season}</div>
};

export default SeasonDisplay;