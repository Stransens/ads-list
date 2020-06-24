import {
      GET_ADS, GET_ADS_VIP, ERROR, CURSOR, LOADER
} from "./types";
import { REACT_API_KEY } from 'react-native-dotenv';
import axios from "axios";

export const getAds = (cursor) => dispatch => {
      let api = REACT_API_KEY;
      if (cursor) {
            api += `?cursor=${cursor}`
      }
      axios.get(api, {
            headers: {
                  Accept: 'application/json'
            }
      })
          .then(data => {
                dispatch({type: GET_ADS, payload: data.data.ads})
                dispatch({type: GET_ADS_VIP, payload: data.data.vips})
                dispatch({type: CURSOR, payload: data.data.ads[data.data.ads.length - 1].cursor})
                dispatch({type: LOADER, payload: false})
                dispatch({type: ERROR, payload: ''})
          })
          .catch(
              error => {
                    dispatch({type: LOADER, payload: false})
                    dispatch({type: ERROR, payload: error.message || 'Unexpected Error!!!'})
              }
          )
};
