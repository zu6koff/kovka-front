import React, { useEffect, useState, useCallback} from 'react';
import { useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import OrderForm from './OrderForm';


const materials = [
  { name: 'Сталь', multiplier: 1, pricePerSqM: 0 },
  { name: 'Чугун', multiplier: 1.2, pricePerSqM: 200 },
  { name: 'Алюминий', multiplier: 1.5, pricePerSqM: 500 },
];

const colors = [
  { name: 'Черный', multiplier: 1, pricePerSqM: 0 },
  { name: 'Серебряный', multiplier: 1.1, pricePerSqM: 200 },
  { name: 'Золотой', multiplier: 1.2, pricePerSqM: 300 },
];

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [volume, setVolume] = useState(1);
  const [price, setPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const calculatePrice = useCallback(() => {
    if (!product) return 0;
    const basePrice = product.price;
    const material = materials.find(m => m.name === selectedMaterial);
    const color = colors.find(c => c.name === selectedColor);
    const materialMultiplier = material?.multiplier || 1;
    const colorMultiplier = color?.multiplier || 1;
    const materialPricePerSqM = material?.pricePerSqM || 0;
    const colorPricePerSqM = color?.pricePerSqM || 0;
    const additionalPrice = (materialPricePerSqM + colorPricePerSqM) * (volume * 0.2);

    return (basePrice * materialMultiplier * colorMultiplier * (volume * 0.2)) + additionalPrice;
  }, [product, selectedMaterial, selectedColor, volume]);

  useEffect(() => {
    const apiGetOneProduct = `${process.env.REACT_APP_CATALOG_PRODUCT}/${id}`;

    fetch(apiGetOneProduct)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setPrice(data.price);
      })
      .catch(error => {
        console.error('Ошибка при загрузке товара:', error);
      });
  }, [id]);

  useEffect(() => {
    setPrice(calculatePrice());
  }, [calculatePrice]);

  if (!product) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="product-page">
      <div className="navigation">
        <button className="back"><Link to="/shop">×</Link></button>
      </div>
      <div className="container">
        <div className="product">
          <div className="product-left">
            <img src={`http://localhost:3010/${product.img}`} alt="" />
            <div className="product-info">
              {product.info && product.info.length > 0 && (
                <>
                  <div className="opisanie"><h3>Описание</h3></div>
                  {product.info.map(infoItem => (
                    <div key={infoItem.id} className="info-item">
                      <span className="info-marker">•</span> <p>{infoItem.title}: {infoItem.description}</p>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
          <div className="product-right">
            <h1>{product.direction}</h1>
              <div className="calculator">
                <div className="calculator-row">
                  <label htmlFor="material">Материал:</label>
                  <select id="material" value={selectedMaterial} onChange={(e) => setSelectedMaterial(e.target.value)}>
                    <option value="">Выберите материал</option>
                    {materials.map(material => (
                      <option key={material.name} value={material.name}>{material.name}</option>
                    ))}
                  </select>
                </div>
                <div className="calculator-row">
                  <label htmlFor="color">Цвет краски:</label>
                  <select id="color" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                    <option value="">Выберите цвет</option>
                    {colors.map(color => (
                      <option key={color.name} value={color.name}>{color.name}</option>
                    ))}
                  </select>
                </div>
                <div className="calculator-row">
                  <label htmlFor="volume">Объем (кв.м):</label>
                  <input type="number" id="volume" value={volume} min="1" onChange={(e) => setVolume(Number(e.target.value))}/>
                </div> <p className="calculated-price">Итоговая цена: {price.toFixed(2)} руб.</p></div>
              <button className="sail" onClick={() => setShowModal(true)}>Заказать</button>
          </div>
        </div>
      </div>
      {showModal && (
        <OrderForm
          product={product}
          price={price}
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ProductPage;