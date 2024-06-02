import React, { useState, useEffect } from 'react';

const EditProductForm = ({ productId, onClose }) => {
  const [product, setProduct] = useState({
    direction: '',
    price: '',
    img: null,
    infoFields: [{ title: '', description: '' }]
  });

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_CATALOG_PRODUCT}/${productId}`);
        if (!response.ok) {
          throw new Error('Ошибка загрузки данных о товаре');
        }
        const productData = await response.json();
        setProduct({
          direction: productData.direction,
          price: productData.price.toString(),
          img: productData.img,
          infoFields: productData.info.map(info => ({ title: info.title, description: info.description }))
        });
      } catch (error) {
        console.error('Ошибка при загрузке данных о товаре:', error);
        alert('Произошла ошибка при загрузке данных о товаре: ' + error.message);
      }
    };

    fetchProductData();
  }, [productId]);

  const handleUpdateDirection = (value) => {
    setProduct(prevState => ({
      ...prevState,
      direction: value
    }));
  };

  const handleUpdatePrice = (value) => {
    setProduct(prevState => ({
      ...prevState,
      price: value
    }));
  };

  const handleUpdateImage = (file) => {
    setProduct(prevState => ({
      ...prevState,
      img: file
    }));
  };

  const handleUpdateInfoField = (index, key, value) => {
    const updatedFields = [...product.infoFields];
    updatedFields[index][key] = value;
    setProduct(prevState => ({
      ...prevState,
      infoFields: updatedFields
    }));
  };

  const handleRemoveInfoField = (index) => {
    const updatedFields = [...product.infoFields];
    updatedFields.splice(index, 1);
    setProduct(prevState => ({
      ...prevState,
      infoFields: updatedFields
    }));
  };

  const handleUpdateProduct = async () => {
    try {
      const formData = new FormData();
      formData.append('direction', product.direction);
      formData.append('price', product.price);
      formData.append('img', product.img); 
      formData.append('info', JSON.stringify(product.infoFields)); 

      const token = localStorage.getItem('token');

      const response = await fetch(`${process.env.REACT_APP_ADMIN_EDIT_PRODUCT}/${productId}`, {
        method: 'PUT',
        body: formData,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Ошибка при обновлении товара');
      }
      onClose();
    } catch (error) {
      console.error('Ошибка при обновлении товара:', error);
      alert('Произошла ошибка при обновлении товара: ' + error.message);
    }
  };

  const handleClose = () => {
    onClose();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    handleUpdateImage(file);
  };

  const handleAddInfoField = () => {
    setProduct(prevState => ({
      ...prevState,
      infoFields: [...prevState.infoFields, { title: '', description: '' }]
    }));
  };

  return (
    <div className="edit-product-form">
      <span className="close-button" onClick={handleClose}>&times;</span>
      <h2>Редактировать товар</h2>
      
      
      <input
        type="text"
        placeholder="Название товара"
        value={product.direction}
        onChange={(e) => handleUpdateDirection(e.target.value)}
      />
      <input
        type="text"
        placeholder="Цена"
        value={product.price}
        onChange={(e) => handleUpdatePrice(e.target.value)}
      />
      <div className="image-container">
        <img src={`http://localhost:3010/${product.img}`} alt="" />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      {product.infoFields.map((info, index) => (
        <div key={index} className="info-field-container">
        <div className="info-field">
          <span className="remove-info-field-button" onClick={() => handleRemoveInfoField(index)}></span>
          <input
            type="text"
            placeholder="Заголовок описания"
            value={info.title}
            onChange={(e) => handleUpdateInfoField(index, 'title', e.target.value)}
          />
          <input
            type="text"
            placeholder="Описание"
            value={info.description}
            onChange={(e) => handleUpdateInfoField(index, 'description', e.target.value)}
          />
        </div>
      </div>
      ))}
      <button onClick={handleAddInfoField}>Добавить еще заголовок и описание</button>
      <button onClick={handleUpdateProduct}>Сохранить изменения</button>
    </div>
  );
};

export default EditProductForm;