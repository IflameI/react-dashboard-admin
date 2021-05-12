const initialState = {
  isRefreshedBlock: false,
  isClosedBlock: false,
  isTurned: false,
};

const global = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REFRESH':
      return {
        ...state,
        isRefreshedBlock: action.payload,
      };
    case 'SET_CLOSE':
      return {
        ...state,
        isCloseBlock: action.payload,
      };
    case 'SET_TURNE':
      return {
        ...state,
        isTurned: action.payload,
      };
    default:
      return state;
  }
};

export default global;
