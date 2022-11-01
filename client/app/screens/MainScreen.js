import React, { Fragment } from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import colors from '../styles/colors';
import FunctionalBtn from '../components/buttons/FunctionalBtn'
import MonthlyExpensesBar from "../components/singleComponents/MonthlyExpensesBar";
import DateComponent from "../components/singleComponents/DateComponent";

function MainScreen(props) {
  return (
  <Fragment>
  <SafeAreaView style={{ flex:0, backgroundColor: colors.upperBg }}/>
  <SafeAreaView style={styles.mainView}>
  <View style={styles.upperView}>
    <Text style={styles.helloText}>שלום מקס</Text>
    <MonthlyExpensesBar/>
    <DateComponent/>
    </View>
  <View style={styles.bottomView}>
    <View style={styles.funView}>
    <Text style={styles.funText}>פעולות</Text>
    </View>
      <FunctionalBtn panelContent={'edit'} bgColor={colors.edit} title='הוצאות ועריכה' iconName='credit-card-edit-outline'/>
      <FunctionalBtn panelContent={'add'} bgColor={colors.add} title='הוספת הוצאה בקליק' iconName='credit-card-plus-outline'/>
      <FunctionalBtn panelContent={'settings'} bgColor={colors.settings} title='הגדרות' iconName='credit-card-settings-outline'/>
      <FunctionalBtn panelContent={'stats'} bgColor={colors.stats} title='סטטיסטיקות' iconName='credit-card-search-outline'/>
    </View>
  </SafeAreaView>
  </Fragment>
  );   
}

const styles = StyleSheet.create({
  mainView: { 
    position: 'relative',
    flex:1,
  },
  upperView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.upperBg,
    flex:1
  },
  helloText: {
    position: 'relative',
    fontSize: 40,
    fontWeight: 'bold',
    left: 85,
    bottom: 25
  },
  bottomView: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: colors.buttomBg,
    flex:1.75,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 30
  },
  funView: {
      position: 'absolute',
      right: 8,
      margin: 15
  },
  funText: {
      fontWeight: 'bold',
      fontSize: 30,
  },
  expensesBoxText: {
      fontWeight: '700',
      marginTop: 3,
  }
});

export default MainScreen;