import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    new_price: "",
    quantity: "",
    id: "",
    category: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.image || !formData.new_price || !formData.quantity || !formData.id || !formData.category) {
      setError("Please fill in all fields");
      return;
    }

    
    console.log(formData);
    alert("Data added successfully!");
    
    // Reset form data
    setFormData({
      name: "",
      image: "",
      new_price: "",
      quantity: "",
      id: "",
      category: "",
    });
    
    
    setError("");
  };

  return (
    <div className="addproduct">
      <div className="product-form-container" style={{background:" linear-gradient(rgb(34 255 213 / 26%), rgb(249, 255, 255))"}}>
        <h2>Add New Product</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Product Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="new_price"
              name="new_price"
              value={formData.new_price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="id">Product ID</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kid">Kid</option>
            </select>
          </div>
          <button className="addbtn type1" type="submit">
            <span className="addbtn-text">
              Add Product
              </span>
            </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
