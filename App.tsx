import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
import AirQuality from './components/AirQuality';
import GraphQuality from "./components/GraphQuality.tsx";
import {useDispatch, useSelector} from "react-redux";
import {changeAqiState, changeCityState, changeDailyObjectState, store} from "./reducer/redux.tsx";


function App(): React.JSX.Element {
    const cityStore = useSelector((state: any) => state.todo.city);
    const dispatch = useDispatch();

    function changeCity(newCity: string) {
        dispatch(changeCityState(newCity));
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.waqi.info/feed/${cityStore}/?token=344b7838d127cdeaee1f42f9cac8208921adfb24`);
                const json = await response.json();
                dispatch(changeCityState(json.data.city.name));
                dispatch(changeAqiState(json.data.aqi));
                dispatch(changeDailyObjectState(json.data.forecast.daily.o3));
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [cityStore]);




    return (
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#212240',
                    height: '100%',
                }}>
                <Text style={[styles.highlight, styles.fontSize ]}>Air Quality</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <Button onPress={() => changeCity("lyon")} title="lyon" />
                    <Button onPress={() => changeCity("paris")} title="paris" />
                    <Button onPress={() => changeCity("roanne")} title="roanne" />
                </View>
                <AirQuality/>
                <View style={{marginTop: 20}}>
                    <GraphQuality/>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
        color: 'white',
    },
    fontSize: {
        fontSize: 40,
    },
});

export default App;