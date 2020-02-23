import * as React from 'react';
//ui
import {View, Text} from 'react-native';

export interface IProps {
  number: number;
  numberStyles?: any;
}

const Number: React.FC<IProps> = ({number, numberStyles}) => {
  return (
    <View style={numberStyles}>
      <Text>{number}</Text>
    </View>
  );
};

export default Number;
