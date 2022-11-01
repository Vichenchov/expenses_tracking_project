import React from 'react';
import { Text, StyleSheet } from 'react-native';

let DD = new Date().getDate();
let MM = new Date().getMonth() + 1;
let YY = new Date().getFullYear();

export default function DateComponent() {
 return(
    <Text style={styles.date}>{ DD + '/' + MM + '/' + YY }</Text>
 );   
}

const styles = StyleSheet.create({
    date: {
        position:'relative',
        fontWeight: 'bold',
        fontSize: 10,
        top:25
      }
});