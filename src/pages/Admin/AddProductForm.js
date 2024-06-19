import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct, categories = [], onClose }) => {
  const [direction, setDirection] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState(null); 
  const [typeId, setTypeId] = useState('');
  const [infoFields, setInfoFields] = useState([{ title: '', description: '' }]);
  const [errors, setErrors] = useState({});

  const handleAddInfoField = () => {
    setInfoFields([...infoFields, { title: '', description: '' }]);
  };

  const handleInfoChange = (index, key, value) => {
    const updatedFields = [...infoFields];
    updatedFields[index][key] = value;
    setInfoFields(updatedFields);
  };

  const handleAddProduct = () => {
    const formErrors = {};
    if (!direction.trim()) {
      formErrors.direction = 'Пожалуйста, введите название товара.';
    }
    if (!price.trim()) {
      formErrors.price = 'Пожалуйста, введите цену.';
    }
    if (!img) {
      formErrors.img = 'Пожалуйста, загрузите изображение.';
    }
    if (!typeId) {
      formErrors.typeId = 'Пожалуйста, выберите категорию.';
    }
    const infoErrors = infoFields.map((field, index) => {
      if (!field.title.trim() || !field.description.trim()) {
        return `Пожалуйста, заполните заголовок и описание для поля ${index + 1}.`;
      }
      return null;
    });
    if (infoErrors.some(error => error !== null)) {
      formErrors.info = infoErrors;
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const productData = {
      direction,
      price,
      img, 
      typeId,
      info: JSON.stringify(infoFields) 
    };
    onAddProduct(productData);
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImg(file);
  };

  const handleRemoveInfoField = (index) => {
    const updatedFields = [...infoFields];
    updatedFields.splice(index, 1);
    setInfoFields(updatedFields);
  };

  return (
    <div className="add-product-form edit-product-form">
      <span className="close-button" onClick={handleClose}>&times;</span>
      <h2>Добавить товар</h2>
      
      <input
        type="text"
        placeholder="Название товара"
        value={direction}
        onChange={(e) => setDirection(e.target.value)}
        style={{ borderColor: errors.direction ? 'red' : '' }}
      />
      {errors.direction && <div style={{ color: 'red' }}>{errors.direction}</div>}

      <input
        type="text"
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ borderColor: errors.price ? 'red' : '' }}
      />
      {errors.price && <div style={{ color: 'red' }}>{errors.price}</div>}

      <div className="image-container">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ borderColor: errors.img ? 'red' : '' }}
        />
      </div>
      {errors.img && <div style={{ color: 'red' }}>{errors.img}</div>}

      <select
        value={typeId}
        onChange={(e) => setTypeId(e.target.value)}
        style={{ borderColor: errors.typeId ? 'red' : '' }}
      >
        <option value="">Выберите категорию</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>
      {errors.typeId && <div style={{ color: 'red' }}>{errors.typeId}</div>}

      {infoFields.map((info, index) => (
        <div key={index} className="info-field-container">
          <div className="info-field">
            <span className="remove-info-field-button" onClick={() => handleRemoveInfoField(index)}></span>
            <input
              type="text"
              placeholder="Заголовок описания"
              value={info.title}
              onChange={(e) => handleInfoChange(index, 'title', e.target.value)}
              style={{ borderColor: errors.info && errors.info[index] ? 'red' : '' }}
            />
            <input
              type="text"
              placeholder="Описание"
              value={info.description}
              onChange={(e) => handleInfoChange(index, 'description', e.target.value)}
              style={{ borderColor: errors.info && errors.info[index] ? 'red' : '' }}
            />
            {errors.info && errors.info[index] && <div style={{ color: 'red' }}>{errors.info[index]}</div>}
          </div>
        </div>
      ))}
      <button onClick={handleAddInfoField}>Добавить еще заголовок и описание</button>
      <button onClick={handleAddProduct}>Добавить товар</button>
    </div>
  );
}

export default AddProductForm;