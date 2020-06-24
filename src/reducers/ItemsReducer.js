import {CURSOR, GET_ADS, GET_ADS_VIP, LOADER, ERROR} from "../actions/types";

const INITIAL_STATE = {
      vips: [],
      ads: [],
      cursor: '',
      loader: true,
      error: '',
};


export default (state = INITIAL_STATE, action) => {
      switch (action.type) {
            case LOADER:
                  return {
                        ...state,
                        loader: action.payload
                  };
            case GET_ADS:
                  return {
                        ...state,
                        ads: [...state.ads, ...action.payload]
                  };
            case GET_ADS_VIP:
                  return {
                        ...state,
                        vips: action.payload
                  };
            case CURSOR:
                  return {
                        ...state,
                        cursor: action.payload
                  };
            case ERROR:
                  return {
                        ...state,
                        error: action.payload
                  };
            default:
                  return state;
      }
};
