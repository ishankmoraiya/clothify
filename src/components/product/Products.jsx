import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignJustify,
  faTh,
  faList,
  faStar,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Title from "../../shared/Title";
import all_product from "../../assets/all_product";
import "./Product.css";

const generateRandomLeftover = () => {
  return Math.floor(Math.random() * 1000);
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(all_product);
  const [searchQuery, setSearchQuery] = useState(""); // New state to hold search query
  const [isGrid, setIsGrid] = useState("true");

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
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filtered = all_product.filter((product) =>
      product.id.toString().includes(e.target.value)
    );
    setFilteredProducts(filtered);
  };
  const toggleView = () => {
    setIsGrid(!isGrid);
  };

  return (
    <div>
      <Title title=" - Products" />
      <div className="body1">
        <div className="container1">
          <h4>{selectedCategory}_Products</h4>

          <input
            className="search"
            type="search"
            placeholder="Search By ID"
            onChange={handleSearch}
            value={searchQuery} // Bind value to searchQuery state
          />
          <h4>Category</h4>
          <h6 onClick={() => handleCategoryChange("All")}>All</h6>
          <h6 onClick={() => handleCategoryChange("Men")}>Mens</h6>
          <h6 onClick={() => handleCategoryChange("Women")}>Women</h6>
          <h6 onClick={() => handleCategoryChange("Kid")}>Kids</h6>
          <h4>Filter by Price</h4>

          <h6 onClick={() => handleLowHigh()}>Low to High</h6>
          <h6 onClick={() => handleHighLow()}>High to Low</h6>
        </div>
        <div className="container list_p">
          <div className="productnav">
            <h5>{selectedCategory} Products</h5>
            
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
              <button
                type="button"
                className="btn "
                onClick={toggleView}
                style={{ background: "lightgrey", margin: "0.5rem" }}
              >
                {isGrid ? (
                  <FontAwesomeIcon icon={faList} />
                ) : (
                  <FontAwesomeIcon icon={faTh} />
                )}
              </button>
            </div>
          {isGrid ? (
            <div className="table-container">
              <table class="table ">
                <thead className="sticky-header">
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Product Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Category</th>
                    <th scope="col">Bestseller</th>
                    <th scope="col">Image</th>
                    <th className="hide-action" scope="col">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="tdody-a ">
                  {filteredProducts.map((product, key) => (
                    <tr
                      key={key}
                      style={{
                        borderColor: "#bfafaf87",
                        borderBottomWidth: "1px",
                        border: "1px solid #bfafaf87",
                      }}
                    >
                      <td scope="row">{product.id}</td>
                      <td>{product.id}</td>

                      <td>{product.name}</td>
                      <td>₹ {product.new_price}</td>
                      <td>
                        {product.category
                          .split(" ")
                          .map(capitalizeFirstLetter)
                          .join(" ")}
                      </td>
                      <td>
                        {product.bestseller && (
                          <span
                            className="badge bg-warning"
                            style={{ margin: "none" }}
                          >
                            Bestseller
                          </span>
                        )}
                      </td>
                      <td>
                        <img
                          src={product.image}
                          alt="Product Image"
                          style={{
                            maxWidth: "45px",
                            maxHeight: "35px",
                            margin: "-0.5rem",
                          }}
                        />
                      </td>
                      <td
                        className="hide-action"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          className="hide-action"
                          style={{
                            width: "22px",
                            height: "25px",
                            borderRadius: "2px",
                            color: "white",
                            background: "rgb(0 165 247)",
                            cursor: "pointer",
                            marginRight: "10px",
                          }}
                        >
                          {" "}
                          <MdEdit />
                        </div>
                        <div
                          className="hide-action"
                          style={{
                            width: "22px",
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
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="container">
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
                            <span className="badge bg-warning">Bestseller</span>
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
                            Left-{generateRandomLeftover()}{" "}
                            <FontAwesomeIcon icon={faCubes} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
