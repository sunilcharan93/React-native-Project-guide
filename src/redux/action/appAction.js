import axios from '../../helpers/axios';

export const loadData = () => {
  return async dispatch => {
    try {
      const responce = await axios.get(`getdata.php`).then(responce => {
        dispatch({
          type: 'LOADDATA',
          payload: responce.data,
        });
      });
    } catch (error) {
      dispatch({
        type: 'ON_ERROR2',
        payload: error,
      });
    }
  };
};
