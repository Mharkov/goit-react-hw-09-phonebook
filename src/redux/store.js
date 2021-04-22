import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import counterReducer from './contact/contacts-reducer';
import authReducer from './auth/auth-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whiteList: ['token'],
};

const store = configureStore({
  reducer: {
    contacts: counterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };

//
// const rootReducer = combineReducers({
//   contacts: persisterReducer(PersistConfig, counterReducer),
// });

// const persisterReducer = persistReducer(PersistConfig, rootReducer);

// import { applyMiddleware, combineReducers } from 'redux';
// const rootReducer = combineReducers({
//   contacts: counterReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// const initialState = {
//   contacts: {
//     items: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filters: '',
//   },
// };

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'contacts/add':
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: [payload, ...state.contacts.items],
//         },
//       };

//     case 'contacts/delete':
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: state.contacts.items.filter(({ id }) => id !== payload),
//         },
//       };

//     case 'contacts/filter':
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: state.contacts.items.filter((name) =>
//             name.toLowerCase().includes(state.contacts.filters.toLowerCase())
//           ),
//         },
//       };
//     default:
//       return state;
//   }
// };
