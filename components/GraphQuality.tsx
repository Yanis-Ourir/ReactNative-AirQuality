import React, {useEffect, useState} from 'react';

import { BarChart } from "react-native-gifted-charts";

interface AirQualityData {
    avg: number;
    day: string;
}

type AirQualityArray = AirQualityData[];

function GraphQuality(props: {airQuality: AirQualityArray}) {
    const [airQuality, setAirQuality] =  useState<AirQualityArray>(props.airQuality);
    const [barData, setBarData] = useState<Array<Object>>([]);

    useEffect(() => {
        setAirQuality(props.airQuality);
        const newBarData = airQuality.map((element: AirQualityData) => {
            return {value: element.avg, label: getDayName(new Date(element.day)), labelTextStyle: {color: 'white'}};
        });
        setBarData(newBarData);
    }, [props.airQuality]);

    function getDayName(date = new Date(), locale = 'fr-FR') {
        return date.toLocaleDateString(locale, {weekday: 'long'});
    }

    // @ts-ignore
    return <BarChart data={barData}  frontColor={'#177AD5'}  />;
}

export default GraphQuality;