import React, { useState } from 'react';

const OrderForm = ({ product, price, closeModal }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы
    console.log({ product, price, name, phone, email });
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Форма заказа</h2>
        <form className='formorder' onSubmit={handleSubmit}>
            <div className='formr'>
            <div className='product-details'>
                <div className="form-group">
                    <span className='dir'>{product.direction}</span>
                </div>
                <div className="form-group">
                    <img src={`http://localhost:3010/${product.img}`} alt={product.direction} className="product-image" />
                </div>
                <div className="form-group">
                    <span className='pri'>Цена {price.toFixed(2)} руб.</span>
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