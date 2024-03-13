import React, { useState, useEffect } from "react";
import all_order from "../../components/orders/OrderList"; // Imported JSON data file here
import { LuTruck } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
import { useParams, Link } from "react-router-dom";
import all_product from "../../assets/all_product";
import "./Calender.css";
const OrderDetails = ({ date }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Selected date:", date);
    const ordersForDate = all_order.filter((order) => order.o_date === date);
    console.log("Filtered orders:", ordersForDate);
    setOrders(ordersForDate);
    setLoading(false);
  }, [date]);

  if (orders.length === 0) {
    return (
      <div class="no-orders-found">
        <h4>Sorry! No orders found for this date</h4>
      </div>
    );
  }

  return (
    <div className="cal-details">
      <h4 style={{textAlign:'center'}}>All Orders for Date {date}</h4>

      {orders.map((order, index) => (
        <div className="order_row" key={index}>
          <div className="body">
            <div className="col1">
              {order.status === "Delivered" ? (
                <div className="delivered">
                  <div>
                    <LuTruck /> {order.status}
                  </div>
                  <span style={{ fontSize: "13px", color: "#7d8a9b" }}>
                    Order on {order.date}
                  </span>
                  <span style={{ fontSize: "13px", color: "#7d8a9b" }}>
                    Delivered on {order.delivery_date}
                  </span>
                </div>
              ) : (
                <div className="pending">
                  <div>
                    <FaRegClock /> {order.status}
                  </div>
                  <span style={{ fontSize: "13px", color: "#7d8a9b" }}>
                    Expected delivery 12/12/2022
                  </span>
                </div>
              )}
            </div>
            <div className="col2">
              <span>Shipping to</span>
              <h4>{order.username}</h4>
              <span>
                Delivery partner <strong>Ecom</strong>
              </span>
              <span>
                Order ID <strong>{order.o_id}</strong>
              </span>
              <span>
                Customer ID <strong>{order.c_id}</strong>
              </span>
              {/* Find the product with matching p_id */}
              {all_product.map((product) => {
                if (product.id === order.p_id) {
                  return (
                    <div className="col2-1" key={product.id}>
                      <img className="col2-1-img" src={product.image} alt="" />
                      <div>
                        <h5>{product.name}</h5>
                        <p className="card-text">
                          Price: ₹{product.new_price}{" "}
                          <s style={{ color: "#7d8a9b" }}>
                            {" "}
                            ₹{product.old_price}
                          </s>
                        </p>
                        <p>
                          SIZE <strong>L</strong>
                        </p>
                        <span>
                          Return/Exchange is available till 7 days after
                          purchasing
                        </span>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderDetails;
