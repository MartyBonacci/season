import React from 'react';
import './SeasonDisplay.css'

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        seasonIcon: "sun"
    },
    winter: {
        text: "Burr it's chilly",
        seasonIcon: "snowflake"
    }
}

const getSeason = (lat, month) => {
    return lat > 0 ? month > 2 && month < 9 ? "summer" : "winter" : month > 2 && month < 0 ? "winter" : "summer"
}

const SeasonDisplay = ({lat}) => {

const season = getSeason(lat, new Date().getMonth());
const {text, seasonIcon} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
    <i className={`${seasonIcon} icon massive icon-left`}></i>
    <h1>{text}</h1>
    <i className={`${seasonIcon} icon massive icon-right`}></i>
    </div>
    )
};

export default SeasonDisplay;