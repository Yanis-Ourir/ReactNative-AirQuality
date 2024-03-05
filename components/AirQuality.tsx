import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import React from 'react';
import { useState, useEffect } from 'react';

function AirQuality(props: { city: string, aqi: number}) {
  const [city, setCity] = useState('paris');
  const [aqi, setAqi] = useState(0);
  const date = new Date();

    useEffect(() => {
        setCity(props.city);
        setAqi(props.aqi);
    }, [props.city, props.aqi]);


  return (
    <View style={styles.sectionContainer}>
      <View>
        <Text style={[styles.fontScore]}>Score : {aqi}</Text>
        <Text style={[styles.fontScore]}>{city} </Text>
          <Text style={[styles.fontScore]}>Date : {date.toLocaleDateString('FR')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      padding: 20,
      backgroundColor: 'green',
      width: 300,
    },
    fontScore: {
      fontSize: 20,
      color: 'white'
     }
  });

export default AirQuality;


