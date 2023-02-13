import { DummySagas } from "./DummySaga";
import { call, all, fork } from "redux-saga/effects";


export default function* RootSaga() {
    yield all([
      fork(DummySagas),
    ]);
  }