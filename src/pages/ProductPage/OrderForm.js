import React, { useState } from 'react';

const OrderForm = ({
  product,
  price,
  selectedMaterial,
  selectedColor,
  volume,
  includeCorrosionProtection,
  includeGalvanization,
  closeModal
}) => {
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
    if (includeCorrosionProtection) {
      formData.append('Выбранное покрытие', 'Покрытие от коррозии');
    }
    if (includeGalvanization) {
      formData.append('Выбранное покрытие', 'Отцинковывание');
    }
    formData.append('Объем (кв.м)', volume);
    formData.append('ФИО', name);
    formData.append('Телефон', phone);
    formData.append('Email', email);
    formData.append('Изображение товара', product.img);
    
    try {
      const response = await fetch('https://formspree.io/f/mgvwwolb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        console.log('Форма успешно отправлена');
        closeModal();
      } else {
        console.error('Не удалось отправить форму');
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
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
                <ul className="parameters-list">
                  <li>Выбранный материал: {selectedMaterial}</li>
                  <li>Выбранный цвет: {selectedColor}</li>
                  <li>Размер (кв.м): {volume}</li>
                  {includeCorrosionProtection && (
                    <li>Выбранное покрытие: Покрытие от коррозии</li>
                  )}
                  {includeGalvanization && (
                    <li>Выбранное покрытие: Отцинковывание</li>
                  )}
                </ul>
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