import React from "react";
import { Link } from "react-router-dom";
import { CiBoxList } from "react-icons/ci";
import {
  FaShopify,
  FaIndianRupeeSign,
  FaTruckArrowRight,
  FaFileInvoiceDollar,
} from "react-icons/fa6";

const SidePanel = ({ page }) => {
  return (
    <div className="side_pannel">
      <Link to={"/orders"} className={page === "order_list" ? "active" : ""}>
        <CiBoxList />
        Order List
      </Link>
      <Link to={"/shipment"} className={page === "shipment" ? "active" : ""}>
        <FaTruckArrowRight />
        Shipment
      </Link>
      <Link
        to={"/deliverypartner"}
        className={page === "delivery" ? "active" : ""}
      >
        <FaShopify />
        Delivery Partner
      </Link>
      <Link to={"/refund"} className={page === "refund" ? "active" : ""}>
        <FaIndianRupeeSign />
        Refund
      </Link>
      <Link>
        <FaFileInvoiceDollar />
        Invoice
      </Link>
    </div>
  );
};

export default SidePanel;
