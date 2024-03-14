import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";

import im from "./male.png";
import ChartComponent from "./ChartComponent";
import all_product from "../../assets/all_product";
import all_order from "../../components/orders/OrderList";
import new_collections from "../../assets/new_collections";

import Title from "../../shared/Title";
import "./Dashboard.css";

const Dashboard = () => {
  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);
  const [kidProducts, setKidProducts] = useState([]);

  const [deliveredOrders, setDeliveredOrders] = useState(0);
  const [pendingOrders, setPendingOrders] = useState(0);
  let returnorder=10;
  useEffect(() => {
    let deliveredCount = 0;
    let pendingCount = 0;

    all_order.forEach((order) => {
      if (order.status.toLowerCase() === "delivered") {
        deliveredCount++;
      } else {
        pendingCount++;
      }
    });

    setDeliveredOrders(deliveredCount);
    setPendingOrders(pendingCount);
  }, [all_order]);

  const dataoforders = [all_order.length, deliveredOrders, pendingOrders,returnorder];
  const sales=["₹ 45,000","₹ 30,000","₹ 44,400" ,"₹ 24,400","₹ 64,400","₹ 4,500"] ;
  const parsedSales = sales.map(sale => parseFloat(sale.replace("₹", "").replace(",", "")));

  useEffect(() => {
    const menProducts = all_product.filter(
      (product) => product.category.toLowerCase() === "men"
    );
    setMenProducts(menProducts);
  }, [all_product]);

  useEffect(() => {
    const womenProducts = all_product.filter(
      (product) => product.category.toLowerCase() === "men"
    );
    setWomenProducts(womenProducts);
  }, [all_product]);

  useEffect(() => {
    const kidProducts = all_product.filter(
      (product) => product.category.toLowerCase() === "men"
    );
    setKidProducts(kidProducts);
  }, [all_product]);
  const data = [
    all_product.length,
    menProducts.length,
    womenProducts.length,
    kidProducts.length,
    new_collections.length,
    all_order.length,
  ];

  const scrollToTotalOrderChart = () => {
    scroll.scrollToBottom();
  };

  return (
    <div>
      <Title title={" - Dashboard"} />
      <div className="container-dash  ">
        <div className="col1-dash">
          <h5>
            <img src={im} alt="Profile" className="profile-image" />
            <div className="profile">
              <div>HR@entnt</div>
              <span style={{ fontSize: "1rem", color: "#68696d" }}>Manager</span>
            </div>
          </h5>
          <Link to="/">
            <FaHome />
            <span className="icon-text-gap">Dashboard</span>
          </Link>
          <Link to="/orders">
            <CiCircleList />
            <span className="icon-text-gap">OrderList</span>
          </Link>
          <Link to="/products">
            <FaShoppingCart />
            <span className="icon-text-gap">All Products</span>
          </Link>
          <Link to="/OrderCalenderview">
            <FaBalanceScaleLeft />
            <span className="icon-text-gap">Calender</span>
          </Link>
          <Link>
            <FaDatabase />
            <span className="icon-text-gap">Tables</span>
          </Link>
        </div>
        <div className="col2-dash">
          <h3
            style={{
              fontSize: "24px",
              color: "#333",
              display: "flex",
            }}
          >
            <FaTachometerAlt style={{ marginRight: "10px" }} /> Dashboard
          </h3>
          <div className="top row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
            <a
               href="#sales-chart"
              className="card1-dash "
              style={{
                background: " linear-gradient(#c935dc, rgb(249, 255, 255))",
              }}
            >
              <h5>
                Mothly Sales <AiOutlineStock />
              </h5>
              <h4>
                <strong>₹ 4,500</strong>
                {/* //we can add here actual sales */}
              </h4>
              <br />
              <p>Increased by 30%</p>
            </a>
            <a
              href="#total-order-chart"
              className="card1-dash card2-dash"
              style={{
                background: " linear-gradient(#60a5fa, rgb(249, 255, 255))",
              }}
            >
              <h5>
                Total Orders <CiBookmark />
                {/* // here also we can add orders for
                now i am using random orders */}
              </h5>
              <h4>
                <strong>^ {all_order.length}</strong>
              </h4>
              <br />
              <p>Increased by 10%</p>
            </a>
            <a
             href="#inventory"
              className="card1-dash card3-dash"
              style={{
                background:
                  " linear-gradient(rgb(250 96 132), rgb(249, 255, 255))",
              }}
            >
              <h5>
                Inventory <GiClothes />
              </h5>
              <h4>
                <strong>^ {all_product.length}</strong>
              </h4>
              <br />
              <p>Increased by 40%</p>
            </a>
          </div>
          <div id="sales-chart">
            <h3>Sales Analysis</h3>
            <ChartComponent
              data={parsedSales}
              labels={[
                "Oct",
                "Nov",
                "Dec",
                "Jan",
                "Feb",
                "March",
              ]}
            />
          </div>
          
          <div id="total-order-chart">
            <h3>Order Analysis</h3>
            <ChartComponent
              data={dataoforders}
              labels={[
                "Total Orders",
                "Delivered",
                "Pending",
                "Return"
              ]}
            />
          </div>

          <div id="inventory" className="chart">
            <h3>Stocks Analysis</h3>
            <ChartComponent
              data={data}
              labels={[
                "All",
                "Men",
                "Women",
                "Kid",
                "New ",
                "Orders",
              ]}
            />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
