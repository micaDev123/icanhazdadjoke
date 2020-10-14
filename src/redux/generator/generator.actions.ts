import {FETCH_RANDOM_JOKES} from './generator.action-types';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';

export const fetchRandomJokes = () => {
    return function(dispatch: any) {
         axios
          .get(`${url}`, {headers:{'Accept': 'application/json'}})
          .then(response => {
              console.log('response',response)
            dispatch({
              type: FETCH_RANDOM_JOKES,
              payload: response.data
            });
          })
          .catch(error => {
            dispatch(
            );
          });
      };
}