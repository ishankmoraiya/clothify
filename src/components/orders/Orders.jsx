import React from "react";
import Title from "../../shared/Title";

// import {} from "react-router-dom";
// import Shipment from "./Shipment";
// import DeliveryPartner from "./DeliveryPartner";
// import Refund from "./Refund";
// import SidePanel from "./SidePanel";
// import OrderList from "./OrderList";
import "./Order.css";
import SidePanel from "./SidePanel";
import all_order from "./OrderList";
import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { LuHeading1 } from "react-icons/lu";
import { IoIosCheckboxOutline } from "react-icons/io";

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
          <h3>All Orders</h3> - <span>{all_order.length} Orders Found</span>
        </span>

        <table class="table">
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
            </tr>
          </thead>
          <tbody className="tdody_a">
            {all_order.map((list, key) => (
              <Link to={`/vieworder/${list.p_id}`}>
                <tr key={key} style={{   borderColor:"#bfafaf87" , borderBottomWidth:"1px"}}>
                  <td scope="row">{list.s_no}</td>
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
                </tr>
              </Link>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
