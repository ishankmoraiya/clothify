import React from "react";
import Title from "../../shared/Title";
import { Link } from "react-router-dom";
import addproductimg from "../../images/addproductimg.png";
import allproductsimg from "../../images/allproductsimg.png"; // Import image for all products card
import "./Product_layout.css";
const Product_layout = () => {
  return (
    <div className="column_1">
      <Title title=" - Layout" />
      <div className="add_product">
      
        <Link to="/AddProducts" className="card-link">
          <div className="card">
            <img src={addproductimg} className="card-img-top1" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Add new products</h5>
              <p className="card-text">
                "Effortlessly expand your inventory with our streamlined product
                addition process."
              </p>
            </div>
          </div>
        </Link>

        {/* Second Card: All products list */}
        <Link to="/Products" className="card-link">
          <div className="card">
            <img src={allproductsimg} className="card-img-top1" alt="..." />
            <div className="card-body">
              <h5 className="card-title">View All Products</h5>
              <p className="card-text">
                "Explore our full catalog and uncover a world of possibilities
                ans look at our collections"
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product_layout;
