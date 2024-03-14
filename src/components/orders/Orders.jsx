import React from "react";
import Title from "../../shared/Title";

// import {} from "react-router-dom";
// import Shipment from "./Shipment";
// import DeliveryPartner from "./DeliveryPartner";
// import Refund from "./Refund";
// import SidePanel from "./SidePanel";
// import OrderList from "./OrderList";
import "./Order.css";
import all_order from "./OrderList";
import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { LuHeading1 } from "react-icons/lu";
import { IoIosEye } from "react-icons/io";

import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const Orders = () => {
  return (
    <div className="order_grid">
      <Title title=" - Order"></Title>
      {/* <SidePanel page="order_list" /> */}
      <div className="order_row1">
        <span
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: "0.3rem",
          }}
        >
          <h5>All Orders</h5>
        </span>
      </div>
      <div className="table-responsive table-wrapper">
        <table className="table" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Customer ID</th>
              <th scope="col">Order ID</th>
              <th scope="col">User Name</th>
              <th scope="col">Status</th>
              <th scope="col">Amount</th>
              <th scope="col">Order Date</th>
              <th scope="col">Deliver Date</th>
              <th scope="col">Action</th>
              <th scope="col">View Order</th>
            </tr>
          </thead>
          <tbody>
            {all_order.map((list, key) => (
              <tr
                key={key}
                style={{
                  borderColor: "#bfafaf87",
                  borderBottomWidth: "1px",
                  border:"1px solid #bfafaf87"
                }}
              >
                <th> {list.s_no}</th>
                <td>{list.c_id}</td>
                <td>{list.o_id}</td>
                <td>{list.username}</td>
                <td>
                  {list.status === "Delivered" ? (
                    <button
                      type="button"
                      class="btn btn-success"
                      style={{
                        background:
                          " linear-gradient(rgb(26 147 31), rgb(150 248 154))",
                        borderRadius: "2rem",
                      }}
                    >
                      {list.status}
                    </button>
                  ) : (
                    <button
                      type="button"
                      class="btn btn-warning"
                      style={{
                        background:
                          " linear-gradient(rgb(255 198 34), rgb(249, 255, 255))",
                        borderRadius: "1rem",
                      }}
                    >
                      {" "}
                      {list.status}{" "}
                    </button>
                  )}
                </td>
                <td>&#8377;{list.amount}</td>
                <td>{list.date}</td>
                <td>{list.delivery_date}</td>
                <td
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    border: "none",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "25px",
                      borderRadius: "2px",
                      color: "white",
                      background: "#5f5fe8",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  >
                    {" "}
                    <MdEdit />
                  </div>
                  <div
                    style={{
                      width: "20px",
                      height: "25px",
                      borderRadius: "2px",
                      color: "white",
                      background: "#e34848",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  >
                    {" "}
                    <MdDelete />
                  </div>
                </td>
                <td  
                  >
                  <div
                    style={{
                      background: "#efec5c",
                      width: "20px",
                      height: "25px",
                      borderRadius: "2px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Link to={`/vieworder/${list.p_id}`}>
                      <IoIosEye style={{ color: "white" }} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
