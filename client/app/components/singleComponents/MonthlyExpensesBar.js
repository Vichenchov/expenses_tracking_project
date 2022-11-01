import React from 'react';
import { View , Text, StyleSheet } from 'react-native';
import colors from "../../styles/colors";
import { Divider } from 'react-native-elements';

export default function MonthlyExpensesBar(props) {
 return(
    <View style={styles.mainExpensesData}>
    <View style={styles.expenesesData}>
      <Text>סכום חודשי מוגדר</Text>
      <Text style={[styles.expensesBoxText, styles.blueText]}>2300</Text>
    </View>
    <Divider orientation="vertical" style={styles.divider}/>
    <View style={styles.expenesesData}>
      <Text>עד כה הוצאת החודש</Text>
      <Text style={[ styles.expensesBoxText, styles.greenText ]}>1400</Text>
      {/* <li className={text === 'foo' ? styles.class1 : styles.class2 } .../> */}
    </View>
  </View>
 );   
}

const styles = StyleSheet.create({
    mainExpensesData: {
        backgroundColor:colors.buttomBg,
        flexDirection: 'row',
        justifyContent: 'center',
        width: 360,
        height: 100,
        borderRadius: 15,
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 1, height : 1
        },
        shadowRadius: 3
    },
    expenesesData: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        fontWeight: 'bold',
    },
    expensesBoxText: {
            fontWeight: '700',
            marginTop: 3,
    },
    redText:{
        color: colors.red,
    },
    greenText:{
        color: colors.green,
    },
    blueText:{
        color: colors.blue
    },
    divider:{
        marginVertical: 12.5
    },
});