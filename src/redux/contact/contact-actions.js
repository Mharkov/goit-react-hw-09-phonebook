import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest'
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess'
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest'
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess'
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const contactFilter = createAction('contacts/filter');

// export const contactAdd = createAction('contacts/add', (name, number) => ({
//   payload: {
//     id: Date.now(),
//     name,
//     number,
//   },
// }));

// export const contactAdd = (name, number) => {
//   return {
//     type: actionType.ADD,
//     payload: {
//       id: Date.now(),
//       name,
//       number,
//     },
//   };
// };

// export const contactDelete = (id) => {
//   return {
//     type: actionType.DELETE,
//     payload: id,
//   };
// };

// export const conatactFilter = (value) => ({
//   type: actionType.CHANGE_FILTER,
//   payload: value,
// });
