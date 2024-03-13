import React from "react";
import SidePanel from "./SidePanel";
import { useParams, Link } from "react-router-dom";
import all_product from "../../assets/all_product";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import "./Vieworder.css";
import all_order from "./OrderList";
import { LuTruck } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
import { Line ,Chart} from "react-chartjs-2";

export const ViewOrder = () => {
  const { p_id } = useParams();
  const order = all_order.find((order) => order.p_id === parseInt(p_id));
  const product = all_product.find((product) => product.id === parseInt(p_id));

 

  return (
    <div className="order_grid">
      <SidePanel page="order_list" />
      <div className="order_row">
        <div>
          <div className="back">
            
            <Link
              to="/orders"
              style={{ textDecoration: "none", color: "#3b3d69" }}
            ><IoMdArrowBack />
              Back to Orders
            </Link>
          </div>
          {product ? (
            <>
              <div className="body">
                <div className="col1">
                  {/* Check if order exists and has a status */}
                  {order && order.status ? (
                    order.status === "Delivered" ? (
                      <div className="delivered">
                        <div>
                          {" "}
                          <LuTruck /> {order.status}
                        </div>

                        <span style={{ fontSize: "13px", color: "#7d8a9b" }}>
                          Order on {order.date}
                        </span>

                        <span style={{ fontSize: "13px", color: "#7d8a9b" }}>
                          Deliverd on {order.delivery_date}
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
                    )
                  ) : (
                    <div>Status not available</div>
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
                  <div className="col2-1">
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
                </div>
              </div>
            </>
          ) : (
            <p>Product not found</p>
          )}
        </div>
      </div>
    </div>
  );
};

// <div class="card" style={{width: "18rem"}}>
// <img src={product.image} class="card-img-top" alt={product.name}></img>
// <div class="card-body">
//   <h5 class="card-title">{product.name}</h5>
//   <p class="card-text">&#8377;{product.new_price}</p>
// </div>
// </div>
