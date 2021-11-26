import axios from '../../helpers/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userLogin = ({username, password}) => {
  return async dispatch => {
    try {
      const responce = await axios
        .post(`login.php`, {
          username,
          password,
        })
        .then(responce => {
          if (responce.data.status == 1) {
            AsyncStorage.setItem('user', JSON.stringify(responce.data));
            dispatch({
              type: 'LOGIN',
              payload: responce.data,
              token: responce.data,
            });
          }
        });
    } catch (error) {
      dispatch({
        type: 'ON_ERROR',
        payload: error,
      });
    }
  };
};
export const userLogout = () => {
  return async dispatch => {
    try {
      AsyncStorage.removeItem('user');
      dispatch({
        type: 'LOGOUT',
        token: null,
      });
    } catch (error) {
      dispatch({
        type: 'ON_ERROR',
        payload: error,
      });
    }
  };
};

export const retriveToken = () => {
  return async dispatch => {
    try {
      const responce = await AsyncStorage.getItem('user');
      dispatch({
        type: 'RETRIVE_TOKEN',
        token: responce,
      });
    } catch (error) {
      dispatch({
        type: 'ON_ERROR',
        payload: error,
      });
    }
  };
};
