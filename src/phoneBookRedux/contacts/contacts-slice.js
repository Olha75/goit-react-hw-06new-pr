// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {
//     addContact: {
//       reducer: (state, { payload }) => {
//         console.log('Adding contact:', payload);
//         state.push(payload);
//       },
//       prepare: data => {
//         return {
//           payload: {
//             id: nanoid(),
//             ...data,
//           },
//         };
//       },
//     },
//     deleteContact: (state, { payload }) =>
//       state.filter(item => item.id !== payload),
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;

// export default contactsSlice.reducer;

// це третя перевірка 
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteContact: (state, { payload }) =>
      state.filter(item => item.id !== payload),
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;



// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {
//     addContact: {
//       reducer: (state, { payload }) => {
//         console.log('Adding contact:', payload);
//         state.push(payload);
//       },
//       prepare: data => {
//         return {
//           payload: {
//             id: nanoid(),
//             ...data,
//           },
//         };
//       },
//     },
//     deleteContact: (state, { payload }) =>
//       state.filter(item => item.id !== payload),
//   },
// });

// // Експортуємо дії та редуктор
// export const { addContact, deleteContact } = contactsSlice.actions;
// export default contactsSlice.reducer;


// це перша перевірка 
// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {
//     addContact: {
//       reducer: (state, { payload }) => {
//         console.log('Adding contact:', payload);
//         state.push(payload);
//       },
//       prepare: data => {
//         return {
//           payload: {
//             id: nanoid(),
//             ...data,
//           },
//         };
//       },
//     },
//     deleteContact: (state, { payload }) =>
//       state.filter(item => item.id !== payload),
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;

// export default contactsSlice.reducer;





// це було до перевірки

// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {
//     addContact: {
//       reducer: (state, { payload }) => {
//         console.log('Adding contact:', payload); // Перевірка в консолі
//         state.push(payload);
//       },
//       prepare: data => {
//         return {
//           payload: {
//             id: nanoid(),
//             ...data,
//           },
//         };
//       },
//     },
//     deleteContact: (state, { payload }) =>
//       state.filter(item => item.id !== payload),
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;

// export default contactsSlice.reducer;













// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {
//     addContact: {
//       reducer: (state, { payload }) => {
//         state.push(payload);
//       },
//       prepare: data => {
//         return {
//           payload: {
//             id: nanoid(),
//             ...data,
//           },
//         };
//       },
//     },
//     // інші дії редуктора
//   },
// });

// export const { addContact } = contactsSlice.actions;

// export default contactsSlice.reducer;


