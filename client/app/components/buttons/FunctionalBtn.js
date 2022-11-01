import React , { useState } from 'react';
import { Fragment } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SwipeablePanel } from 'rn-swipeable-panel';
import PanelContent from '../Panels/PanelContent';

const FunctionalBtn = (props) => {
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

  return (
    <Fragment>
      <Pressable style={({pressed}) => [{backgroundColor: props.bgColor, shadowOpacity : pressed ? 0 : 0.5}, 
        styles.buttons]} onPress={openPanel}>
          <Text style={styles.inBtnText}>{props.title}</Text>
          <Icon style={styles.icon} name={props.iconName} size={30} color='black'/>
        </Pressable>
          <SwipeablePanel {...panelProps} isActive={isPanelActive}>
            <PanelContent content={props.panelContent}/>
          </SwipeablePanel>
    </Fragment> 
  )
}

const styles = StyleSheet.create({
      buttons:{
        position : 'relative',
        width: 170,
        height: 210,
        margin: 10,
        borderRadius: 15,
        shadowOffset: {
          width: 0, height : 1
        },
        shadowRadius: 3
      },
      inBtnText: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'right',
      },
      icon : {
        position: 'absolute',
        bottom: 10,
        left: 10
      }
});
  
export default FunctionalBtn;