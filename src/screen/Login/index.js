import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import colors from '../../assets/theme/colors/colors';
import {userLogin} from '../../redux/action/authAction';
import styles from './styles';

const Login = props => {
  const {userLogin, authReducer} = props;
  const {user, token} = authReducer;

  const [state, setState] = useState({
    username: '',
    password: '',
  });
  const {username, password} = state;

  const onChangeUsername = e => {
    setState({...state, username: e});
  };
  const onChangePassword = e => {
    setState({...state, password: e});
  };
  const onLogin = ({username, password}) => {
    userLogin({username: username, password: password});
  };

  console.log('Object', Object.values(state).length);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={require('../../assets/images/logo.jpg')}
          height={70}
          width={70}
          style={styles.logoImage}
        />
        <Text style={[styles.text, {color: colors.secondary}]}>
          Please Login User
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={e => onChangeUsername(e)}
          value={username}
        />
        <TextInput
          style={styles.input}
          onChangeText={e => onChangePassword(e)}
          value={password}
        />

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => onLogin({username, password})}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  authReducer: state.authReducer,
});

const LoginScreen = connect(mapStateToProps, {userLogin})(Login);

export default LoginScreen;
