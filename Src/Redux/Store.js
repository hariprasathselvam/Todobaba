import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Imports: Redux Root Reducer
import RootReducer from './Reducer/RootReducer';

// Imports: Redux Root Saga
import RootSaga from './Saga/RootSaga';

const persistConfig = {
  key: 'Todobaba',
  storage: AsyncStorage,
  whitelist: ['Dummy'],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(RootSaga);
const persistor = persistStore(store);

// Exports
export { store, persistor};