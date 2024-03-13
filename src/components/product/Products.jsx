import React, { useState } from "react";
import Title from "../../shared/Title";
import all_product from "../../assets/all_product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { faCubes } from "@fortawesome/free-solid-svg-icons";


const generateRandomLeftover = () => {
  return Math.floor(Math.random() * 11); 
}

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(all_product);

  const handleCategoryChange = (category) => {
    console.log("Selected Category:", category);
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(all_product);
    } else {
      const filtered = all_product.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      console.log("Filtered Products:", filtered);
      setFilteredProducts(filtered);
    }
  };
  const handleLowHigh = () => {
    const sortedProducts = [...filteredProducts].sort(
      (a, b) => a.new_price - b.new_price
    );
    setFilteredProducts(sortedProducts);
  };
  const handleHighLow = () => {
    const sortedProducts = [...filteredProducts].sort(
      (a, b) => b.new_price - a.new_price
    );
    setFilteredProducts(sortedProducts);
  };
  

  return (
    <div>
      <Title title=" - Products" />
      <div className="body1">
        <div className="container1">
          <h4>{selectedCategory}_Products</h4>
          
          <input type="search" placeholder="Search"></input>
          <h4>Category</h4>
          <h6 onClick={() => handleCategoryChange("All")}>All</h6>
          <h6 onClick={() => handleCategoryChange("Men")}>Mens</h6>
          <h6 onClick={() => handleCategoryChange("Women")}>Women</h6>
          <h6 onClick={() => handleCategoryChange("Kid")}>Kids</h6>
          <h4>Filter by Price</h4>

          <h6 onClick={() => handleLowHigh()}>Low to High</h6>
          <h6 onClick={() => handleHighLow()}>High to Low</h6>
        </div>
        <div className="container">
          <div className="productnav">
            <h4>{selectedCategory}</h4>
            <h6>{filteredProducts.length} Products</h6>
          </div>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 list_p">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col mb-4">
                <div className="card">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                  ></img>
                  <div className="card-body">
                    <div className="card1">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">
                        Price: ₹{product.new_price}{" "}
                        <s style={{ color: "#7d8a9b" }}>
                          {" "}
                          ₹{product.old_price}
                        </s>
                      </p>
                     
                    
                    </div>
                    <div className="card2">
                       {product.bestseller && (
                        <span className="badge bg-warning">Bestestseller</span>
                      )}
                      <br />
                      <button
                        type="button"
                        className="btn btn-success"
                        style={{ margin: "1rem" }}
                      >
                        Rating <FontAwesomeIcon icon={faStar} />
                      </button>
                      <button type="button" className="btn btn-dark">
                        Left-{generateRandomLeftover()} <FontAwesomeIcon icon={faCubes} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
