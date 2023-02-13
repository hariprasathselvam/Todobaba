import { getActionType } from "../Action";
import * as Action from "../Action/ActionTypes";

const initialState = {
      currentid:"0",
};

const DummyReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.GET_STUDENT_FEES_DETAILS:
        // alert("Haii  "+action.payload)
        return {
          ...state,
          currentid: action.payload
        };
    default:
      return state;
  }
};

export default DummyReducer;