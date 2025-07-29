import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const ManageProducts = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!name || !price) {
      alert('Please enter name and price');
      return;
    }
    try {
      await addDoc(collection(db, 'products'), {
        name,
        price: parseFloat(price), // store price as a number
        description,
        imageUrl,
      });
      // Clear form
      setName('');
      setPrice('');
      setDescription('');
      setImageUrl('');
      alert('Product added successfully!');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('Failed to add product.');
    }
  };

  return (
    <div>
      <h3>Add New Product</h3>
      <form onSubmit={handleAddProduct}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" required />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
        <button type="submit">Add Product</button>
      </form>
      {/* You would also add UI here to list, edit, and delete existing products */}
    </div>
  );
};

export default ManageProducts;