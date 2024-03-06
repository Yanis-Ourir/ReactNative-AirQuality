import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';
import { useState, useEffect } from 'react';
import {useSelector} from "react-redux";

function AirQuality() {
    const airQualityStore = useSelector((state: any) => state.todo);
    const date = new Date();




  return (

    <View style={styles.sectionContainer}>
      <View>
        <Text style={[styles.fontScore]}>Score : {airQualityStore.aqi}</Text>
        <Text style={[styles.fontScore]}>{airQualityStore.city} </Text>
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


