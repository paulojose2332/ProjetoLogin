import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  backlist: []
};
const persistedReducer = persistReducer(persistConfig, reducers);


const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;


const enhancer = composeEnhancers(applyMiddleware(thunk));

export default () => {
    let store = createStore(persistedReducer, enhancer);
    let persistor = persistStore(store);
    return {store,persistor};
};