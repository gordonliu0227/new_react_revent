import {
  AsyncActionError,
  AsyncActionFinish,
  AsyncActionStart,
} from "../../app/async/asyncReducer";
import { delay } from "../../app/common/util/util";

export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export function Increment(amount) {
  return async function (dispatch) {
    dispatch(AsyncActionStart());

    try {
      await delay(1000);
      dispatch({ type: INCREMENT_COUNTER, payload: amount });
      dispatch(AsyncActionFinish());
    } catch (error) {
      dispatch(AsyncActionError);
    }
  };

}
export function Decrement(amount) {
  return async function (dispatch) {
    dispatch(AsyncActionStart());

    try {
      await delay(1000);
      dispatch({ type: DECREMENT_COUNTER, payload: amount });
      dispatch(AsyncActionFinish());
    } catch (error) {
      dispatch(AsyncActionError);
    }
  };

}

const initialState = {
  data: 42,
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        data: state.data + action.payload,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        data: state.data - action.payload,
      };
    default:
      return state;
  }
}
