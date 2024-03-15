import React, { useState } from "react";
import "./AddProduct.css";
import all_products from "../../assets/all_product";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category: "",
    image: "",
    new_price: "",
    old_price: "",
    bestseller: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: formData.id,
      name: formData.name,
      category: formData.category,
      image: formData.image,
      new_price: formData.new_price,
      old_price: formData.old_price,
      bestseller: formData.bestseller,
    };

    all_products.push(newProduct);

    setFormData({
      id: "",
      name: "",
      category: "",
      image: "",
      new_price: "",
      old_price: "",
      bestseller: "",
    });

    setError("");
    alert("Data added successfully!");
  };

  return (
    <div className="addproduct">
      <div
        className="product-form-container"
        style={{
          background:
            "linear-gradient(rgb(207 225 222 / 26%), rgb(249, 255, 255))",
        }}
      >
        <h4>Add New Product</h4>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="contain1">
            <div className="div1">
              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Eg.Shirt, tshirt"
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">Product Image</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                  required
                 
                />
              </div>
              <div className="form-group">
                <label htmlFor="new_price">Price</label>
                <input
                  type="number"
                  id="new_price"
                  name="new_price"
                  value={formData.new_price}
                  onChange={handleChange}
                  required
                  placeholder="₹"
                />
              </div>
            </div>
            <div className="div2">
              <div className="form-group2 form-group">
                <label htmlFor="id">Product ID</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  required
                  placeholder="1, 2.."
                />
              </div>
              <div className="form-group2 form-group">
                <label htmlFor="id">BestSeller</label>
                <input
                  type="text"
                  id="bestseller"
                  name="bestseller"
                  value={formData.bestseller}
                  onChange={handleChange}
                  required
                  placeholder="True/False"
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
            </div>
          </div>
          <button className="addbtn type1" type="submit">
            <span className="addbtn-text">Add Product</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
