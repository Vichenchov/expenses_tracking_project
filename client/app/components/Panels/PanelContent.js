import React from 'react';
import { Text } from 'react-native';
import Add from "./Add";
import Stats from "./Stats";
import Settings from "./Settings";
import Edit from "./Edit";

export default function PanelContent(props) {
  switch(props.content) {
    case 'add':
      return <Add/>
    case 'edit':
      return <Edit/>
    case 'status':
      return <Stats/>
    case 'settings':
      return <Settings/>
    default:
      return <Text>error</Text>
  }  
}