const port = 'http://localhost:8000/api';

export const environment = {
  production: true,
  api_category: `${port}/category`,
  api_product: `${port}/product`,
  api_user: `${port}/auth`,
  api_size: `${port}/size`,
  api_topping: `${port}/topping`,
  api_slide: `${port}/slide`,
  api_order: `${port}/orders`,
  api_carts: `${port}/carts`,
  api_comment: `${port}/comments`,
  api_divison: `https://provinces.open-api.vn/api`,
  GOOGLE_CLIENT_ID: "442140625921-2f3r7qj6i050m8khhp8u53a3ncc4hpj7.apps.googleusercontent.com",
  firebaseConfig : {
    apiKey: "AIzaSyD8Ftq85G42EQMmuCA4QAWEfCRXz-TUc_Q",
    authDomain: "empirical-oven-330915.firebaseapp.com",
    databaseURL: "https://empirical-oven-330915-default-rtdb.firebaseio.com/",
    projectId: "empirical-oven-330915",
    storageBucket: "empirical-oven-330915.appspot.com",
    messagingSenderId: "588763504041",
    appId: "1:588763504041:web:83a6da37f260f563c9b8b8",
    measurementId: "G-0X2WTHTBYM"
  }
};
