import * as React from 'react';
//ui
import {Text, TouchableOpacity} from 'react-native';
//interface
export interface IProps {
  onPress?: any;
  btnStyles?: any;
}

const ChangeNumberBtn: React.FC<IProps> = ({onPress, btnStyles}) => {
  return (
    <TouchableOpacity style={btnStyles} onPress={onPress}>
      <Text>+</Text>
    </TouchableOpacity>
  );
};
export default ChangeNumberBtn;
