import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {userLogout} from '../../redux/action/authAction';

const Home = props => {
  const {userLogout, authReducer} = props;
  const {token} = authReducer;

  return (
    <View>
      <Text>Home</Text>
      <Button title="Logout" color="#841584" onPress={() => userLogout()} />
    </View>
  );
};
const mapStateToProps = state => ({
  authReducer: state.authReducer,
});

const HomeScreen = connect(mapStateToProps, {
  userLogout,
})(Home);
export default HomeScreen;
