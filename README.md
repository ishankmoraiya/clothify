# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### start with Project Layout

 --frontend >
      - node_modules >
      - public >
             -index.html // landing page
      - src >
             - assets >
                     - all_product.js // here is the all mock data of all products listed in website
                     - images....(all_products images).....images
             - components >
                      - layout >
                              - Header.jsx
                     - dashboard >
                              - ChartComponent.jsx // for bar chart
                              - DashBoard.jsx // front page
                              - DashBoard.css //styling
                     
                     - orders >   { ORDER MANAGEMENT }
                              - Sidepanel.jsx
                              - Order.jsx
                              - ViewOrder.jsx
                              - Shipment.jsx // not implemented
                              - Refund.jsx // not implemented
                              - Delivery partner //not implemented

                              - OrderList.js //It contanins all orders (mock data)
                              - Order.css //for all components
                     - products > { PRODUCT MANAGEMENT }
                              - Product_layout.jsx
                              - Product_layout.css
                              - AddProducts.jsx
                              - AddProducts.css
                              - Product.jsx
                              - Product.css
                     - delivery >  { CALENDER (Optional) }
                              - OrderCalenderview.jsx 
                              - Calender.jsx
                              - OrderDetails.jsx
                     

             - images > //for product layout
                    - addproduct.png
                    - allproduts.png
             - shared >
                    - Title.jsx // on every nw rendering it reflects on title
             - App.js 
             - index.js 
   
   
