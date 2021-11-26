const initial_State = {
  isLoading: true,
  token: null,
};

export const appReducer = (state = initial_State, action) => {
  switch (action.type) {
    case 'LOADDATA':
      return {
        ...state,
        usrdata: action.payload,
      };
    case 'ON_ERROR2':
      return {
        appError: action.payload,
      };

    default:
      return state;
  }
};
