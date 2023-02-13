// Imports: Dependencies
import { combineReducers } from "redux";
import DummyReducer from "./DummyReducer";

// Redux: Root Reducer
const RootReducer = combineReducers({
    Dummy: DummyReducer,
  });
  
// Exports
  export default RootReducer;
  