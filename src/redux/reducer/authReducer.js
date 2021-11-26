const initial_State = {
  isLoading: true,
  token: null,
};

export const authReducer = (state = initial_State, action) => {
  switch (action.type) {
    case 'RETRIVE_TOKEN':
      return {
        ...state,
        token: action.token,
        isLoading: false,
      };
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        token: action.token,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        token: action.token,
      };
    case 'ON_ERROR':
      return {
        appError: action.payload,
      };

    default:
      return state;
  }
};
