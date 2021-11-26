import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {loadData} from '../../redux';

const Profile = props => {
  const {loadData, appReducer} = props;
  const {usrdata} = appReducer;

  console.log('check', usrdata);
  return (
    <View>
      <Text>Profile</Text>
      <Button title="check" onPress={() => loadData()} />
    </View>
  );
};
const mapStateToProps = state => ({
  appReducer: state.appReducer,
});

const ProfileScreen = connect(mapStateToProps, {
  loadData,
})(Profile);
export default ProfileScreen;
