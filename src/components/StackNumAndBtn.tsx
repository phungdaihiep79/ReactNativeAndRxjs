import * as React from 'react';
//ui
import {View, } from 'react-native';
import Number from '../components/Number';
import ChangeNumberBtn from '../components/ChangeNumberBtn';
//interface
interface IProps {
  item: any;
}
const StackNumAndBtn: React.FC<IProps> = ({item}) => {
  return (
    <View>
      <Number number={item.number} />
      <ChangeNumberBtn />
    </View>
  );
};
export default StackNumAndBtn;
