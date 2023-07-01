import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'

// export const store = configureStore({
//   reducer: {cart:cartReducer}
// })



import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//const stripe = require('stripe')('sk_test_51NMZDxLJycBvQGCLgw7RDEXOScuYCffgTqzz3CidnSJyL4aTMzHQmYTugG78qoC1IIkZQTlmqAPCXdJcw01SLdLm00igPeypci');

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: {cart:persistedReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)






// //const stripe = require('stripe')('sk_test_51NMZDxLJycBvQGCLgw7RDEXOScuYCffgTqzz3CidnSJyL4aTMzHQmYTugG78qoC1IIkZQTlmqAPCXdJcw01SLdLm00igPeypci');


// const stripe = require('stripe')(process.env.STRIPE_KEY);

// 'use strict';

// /**
//  * order controller
//  */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::order.order',({strapi})=>{
//     async createCoreController(ctx){
//         const {email, products} = ctx.request.body
//     }
//     try{
//         const session = stripe.checkout.create({

//         })

//     }catch(err){
//         ctx.response.status = 500;
//         return err;
//     }
// });
