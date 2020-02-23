import * as React from 'react';
//ui
import {View, Text, FlatList, StyleSheet} from 'react-native';
import StackNumAndBtn from '../components/StackNumAndBtn';
//data
import {data} from '../data';
export type IProps = {};
const MainScreen: React.FC<IProps> = props => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <FlatList
          contentContainerStyle={{
            borderWidth: 1,
            borderColor: 'black',
          }}
          data={data}
          renderItem={StackNumAndBtn}
          keyExtractor={index => index.toString()}
          horizontal={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  box: {
    flex: 0.3,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
export default MainScreen;
