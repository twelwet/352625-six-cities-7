import {ActionType} from '../action.js';
import {DEFAULT_CITY} from '../../settings.js';

const initialState = {
  city: DEFAULT_CITY,
};

export const city = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};
