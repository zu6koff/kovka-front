import React, { useState } from 'react';

const OrderForm = ({ product, price, selectedMaterial, selectedColor, volume, closeModal }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const BASE_URL = process.env.REACT_APP_BASE;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('Название товара', product.direction);
    formData.append('Цена', price.toFixed(2));
    formData.append('Выбранный материал', selectedMaterial);
    formData.append('Выбранный цвет', selectedColor);
    formData.append('Объем (кв.м)', volume);
    formData.append('ФИО', name);
    formData.append('Телефон', phone);
    formData.append('Email', email);
    formData.append('Изображение товара', product.img); 

    try {
      const response = await fetch('https://formspree.io/f/mayrrkdk', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        closeModal(); 
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Форма заявки</h2>
        <form className='formorder' onSubmit={handleSubmit}>
          <div className='formr'>
            <div className='product-details'>
              <div className="form-group">
                <span className='dir'>{product.direction}</span>
              </div>
              <div className="form-group">
              <img src={`${BASE_URL}${product.img}`} alt={product.direction} className="product-image"/>
              </div>
              <div className="form-group">
                <span className='pri'>Цена {price.toFixed(2)} руб.</span>
              </div>
              <div className="form-group">
                <span>Выбранный материал: {selectedMaterial}</span> 
              </div>
              <div className="form-group">
                <span>Выбранный цвет: {selectedColor}</span>
              </div>
              <div className="form-group">
                <span>Размер (кв.м): {volume}</span>
              </div>
            </div>
            <div className="user-group">
              <div className="form-group">
                <label>ФИО:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Телефон:</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>
          </div>
          <button className='btnzakaz' type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;