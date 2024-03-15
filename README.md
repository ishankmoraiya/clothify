## Introduction

My Awesome Front-End Application is a web-based tool for managing tasks and deadlines efficiently.

## Start
Website is deployed on vercel this is the url;
[https://clothify-erp.vercel.app/]

this is git repository
[https://github.com/ishankmoraiya/clothify]

To run the in the development mode, execute:
npm start
Open [http://localhost:3000] to view it in your browser.

## Description
This project is a frontend application developed using React.js for managing orders and products. It includes components for order management, product management, and data visualization. The project also includes optional components for calendar-based order scheduling.

## Features

- Task management
- Orders Mangement
- Products Mangement
- Deadline tracking
- Different view style
- Responsive for all devices
- Order Inovice
- User authentication
- Stock Analysis
- Sales Analysis


## Prerequisites

- Compatible web browser (Chrome, Firefox, Safari)
- Internet connection

## Getting Started with Create React App
This project was bootstrapped with Create React App.

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

## Navigate
To start, utilize the dashboard for analysis. Click on the dashboard or navbar to access orders, products, and calendars. Then, explore all products from different viewpoints and access the order list. In the order list, view order invoices. Lastly, in the calendar, observe all delivered and pending products.
-Begin with the dashboard for analysis.
-Click on the dashboard or navbar to access orders, products, and calendars.
-Explore all products from different viewpoints.
-Access the order list.
-In the order list, view order invoices.
-Lastly, in the calendar, observe all delivered and pending products.

## Project Layout

frontend/
  - node_modules/
  - public/
    - index.html // landing page
  - src/
    - assets/
      - all_product.js // mock data of all products listed in website
      - images/... // all product images
    - components/
      - layout/
        - Header.jsx
      - dashboard/
        - ChartComponent.jsx // bar chart
        - DashBoard.jsx // front page
        - DashBoard.css // styling
      - orders/   // ORDER MANAGEMENT
        - Order.jsx
        - ViewOrder.jsx
        - Order.css // for all components
      - products/ // PRODUCT MANAGEMENT
        - Product_layout.jsx
        - Product_layout.css
        - AddProducts.jsx
        - AddProducts.css
        - Product.jsx
        - Product.css
      - delivery/  // CALENDAR (Optional)
        - OrderCalenderview.jsx 
        - Calender.jsx
        - OrderDetails.jsx
    - images/ // for product layout
      - addproduct.png
      - allproduts.png
    - shared/
      - Title.jsx // reflects on title on every new rendering
    - screenshot  //both responisve or desktop screenshot available
      - dashboard
      - products
      - orders
      - calender  
    - App.js 
    - index.js 
      


## Installation

1. Clone the repository:

  -git clone <repository-url>

2.Install dependencies:

  -npm install


## Usage
Once the development server is running, you can access the application at http://localhost:3000 in your web browser.


## Dashboard
The dashboard provides functionality to analyze stocks, orders, and sales. It includes charts for easy understanding. You can navigate through project management and order management. It displays a summary of key metrics or features (e.g., total number of products, orders, sales) and includes links or buttons for quick navigation to the Products and Orders management pages.

## Product Management
In this component, all the products are listed. You can edit, delete products, and also view them in grid options. This helps understand all product requirements.

## Order Management
In order management, you can view, edit, and delete orders with customer ID, customer name, order ID, etc., details. It shows a list of orders, including details like order ID, customer name, order date, and status, using mock data. It allows viewing of order details, updating the order status, and deletion of orders.

## Calendar
In the calendar, you can view pending or delivered orders and navigate through all orders. It implements a calendar view that displays orders on their expected delivery dates. It provides the ability to click on a date to view all orders due for delivery that day.


# My Awesome Front-End Application

[![Copleted][https://clothify-erp.vercel.app/]

## Screenshots

*all responsive screenshots are in saperate folder*

![Dashboard](src/screenshots/Dashboard/)

![Product Mangement](src/screenshots/Products%20management/)

![Order Mangement](src/screenshots/Order%20mangement/)

![Calender view](src/screenshots/Calender%20view/)

## Development

To contribute to this project, follow these steps:

1. Fork the repository.
2. Clone the forked repository to your local machine.
3. Set up a development environment.
4. Make changes and test them locally.
5. Submit a pull request with your changes.


## Contact/Support

For questions or support, please contact (ishankmoraiya196@gmail.com)















### start with Project Layout

--frontend > { Front end project }
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
                              - Order.jsx
                              - ViewOrder.jsx
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
   
   

