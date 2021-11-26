import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import {retriveToken} from '../redux/action/authAction';
import {ActivityIndicator, View} from 'react-native';

import {checkConnected} from '../function/functions';
import NetInfo from '../screen/NetInfo';
import StackNavigation from './StackNavigation';
import TabNavigation from './TabNavigation';

const Router = props => {
  const {authReducer, retriveToken} = props;
  const {token, isLoading} = authReducer;
  const [connectedStatus, setConnectedStatus] = useState(false);

  checkConnected().then(res => {
    setConnectedStatus(res);
  });

  console.log('Loading :', isLoading);
  console.log('Token     :', token);
  console.log('Internet   :', connectedStatus);

  useEffect(() => {
    retriveToken();
  }, [retriveToken]);

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator color="red" size={'large'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {connectedStatus ? (
        <>{token != null ? <TabNavigation /> : <StackNavigation />}</>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="NetInfo" component={NetInfo} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
const mapStateToProps = state => ({
  authReducer: state.authReducer,
});
const RouterScreen = connect(mapStateToProps, {retriveToken})(Router);
export default RouterScreen;
