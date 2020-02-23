import * as React from 'react';
import {View, Text} from 'react-native';

export type IProps = {};
const MainScreen: React.FC<IProps> = props => {
  return (
    <View>
      <Text>OtherScreen</Text>
    </View>
  );
};
export default MainScreen;
