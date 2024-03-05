/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AirQuality from './components/AirQuality';
import GraphQuality from "./components/GraphQuality.tsx";


function App(): React.JSX.Element {
    const [city, setCity] = useState('paris');
    const [aqi, setAqi] = useState(0);
    const [dailyObject, setDailyObject] = useState([]);

    function changeCity(newCity: string) {
        setCity(newCity);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.waqi.info/feed/${city}/?token=344b7838d127cdeaee1f42f9cac8208921adfb24`);
                const json = await response.json();
                setCity(json.data.city.name);
                setAqi(json.data.aqi);
                setDailyObject(json.data.forecast.daily.o3);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [city]);


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
               <AirQuality city={city} aqi={aqi}/>
                <View style={{marginTop: 20}}>
                <GraphQuality airQuality={dailyObject}/>
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
