import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import { BarChart } from "react-native-gifted-charts";

interface AirQualityData {
    avg: number;
    day: string;
    max: number;
}

type AirQualityArray = AirQualityData[];

function GraphQuality() {
    const dataAirQuality = useSelector((state: any) => state.todo);
    const [barData, setBarData] = useState<Array<Object>>([]);
    const date = new Date();


    useEffect(() => {
        if(dataAirQuality === undefined) {
            return;
        }
        const newBarData = dataAirQuality.dailyObject.map((element: AirQualityData) => {
            return {value: element.avg, label: getDayName(new Date(element.day)), labelTextStyle: {color: 'white'}, frontColor: getDayName(new Date(element.day)) === getDayName(date) ? '#177AD5' : ''};
        });
        setBarData(newBarData);
    }, [dataAirQuality]);

    function getDayName(date = new Date(), locale = 'fr-FR') {
        return date.toLocaleDateString(locale, {weekday: 'long'});
    }

    // @ts-ignore
    return <BarChart data={barData} frontColor={'lightgray'} yAxisTextStyle={{color: 'white'}}/>;
}

export default GraphQuality;