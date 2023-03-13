import { createStore , compose ,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import Rootreducer from "./Services/Reducers/Rootreducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig  = {
    key : "Userform",
    storage
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistR = persistReducer(persistConfig,Rootreducer)

const store = createStore(persistR, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store)
export default store;