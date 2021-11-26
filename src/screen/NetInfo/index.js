import React from 'react';
import {View, Text} from 'react-native';

const NetInfo = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20, color: 'red', fontWeight: 'bold'}}>
        Oops Sorry!
      </Text>
      <Text style={{color: 'gray'}}> No Internet Connection</Text>
    </View>
  );
};

export default NetInfo;
