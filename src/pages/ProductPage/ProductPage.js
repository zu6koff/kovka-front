import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import OrderForm from './OrderForm';

const materials = [
  { name: 'Сталь', multiplier: 1, pricePerSqM: 0, description: 'Прочный и долговечный материал' },
  { name: 'Чугун', multiplier: 1.2, pricePerSqM: 200, description: 'Хорошо сохраняет тепло, устойчив к коррозии' },
  { name: 'Алюминий', multiplier: 1.5, pricePerSqM: 500, description: 'Легкий и устойчивый к коррозии материал' },
  { name: 'Титан', multiplier: 2.0, pricePerSqM: 600, description: 'Очень легкий и прочный металл, идеально подходит для высокотехнологичных приложений' },
];

const colors = [
  { name: 'Черный', multiplier: 1, pricePerSqM: 100, description: 'Классический и универсальный цвет' },
  { name: 'Серебряный', multiplier: 1.1, pricePerSqM: 200, description: 'Элегантный и современный цвет' },
  { name: 'Золотой', multiplier: 1.2, pricePerSqM: 300, description: 'Роскошный и яркий цвет' },
  { name: 'Коричневый', multiplier: 1.0, pricePerSqM: 270, description: 'Натуральный и теплый оттенок' },
  { name: 'Бежевый', multiplier: 1.0, pricePerSqM: 250, description: 'Нейтральный и универсальный цвет' },
  { name: 'Серый', multiplier: 1.0, pricePerSqM: 210, description: 'Сдержанный и элегантный цвет' },
  { name: 'Белый', multiplier: 1.0, pricePerSqM: 150, description: 'Чистый и светлый оттенок' }
];

const treatments = [
  { name: 'Покрытие от коррозии', multiplier: 1.1, pricePerSqM: 150, description: 'Защита от коррозии, увеличивает срок службы' },
  { name: 'Отцинковывание', multiplier: 1.3, pricePerSqM: 180, description: 'Прочное и надежное покрытие, защищает от коррозии' },
];

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [volume, setVolume] = useState(1);
  const [price, setPrice] = useState(0);
  const [includeCorrosionProtection, setIncludeCorrosionProtection] = useState(false);
  const [includeGalvanization, setIncludeGalvanization] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const BASE_URL = process.env.REACT_APP_BASE;

  const calculatePrice = useCallback(() => {
    if (!product) return 0;
    const basePrice = product.price;
    const material = materials.find(m => m.name === selectedMaterial);
    const color = colors.find(c => c.name === selectedColor);
    const materialMultiplier = material?.multiplier || 1;
    const colorMultiplier = color?.multiplier || 1;
    let totalMultiplier = materialMultiplier * colorMultiplier;

    if (includeCorrosionProtection) {
      const corrosionTreatment = treatments.find(t => t.name === 'Покрытие от коррозии');
      totalMultiplier *= corrosionTreatment?.multiplier || 1;
    }

    if (includeGalvanization) {
      const galvanizationTreatment = treatments.find(t => t.name === 'Отцинковывание');
      totalMultiplier *= galvanizationTreatment?.multiplier || 1;
    }

    const materialPricePerSqM = material?.pricePerSqM || 0;
    const colorPricePerSqM = color?.pricePerSqM || 0;
    const additionalPrice = (materialPricePerSqM + colorPricePerSqM) * (volume * 0.2);

    return (basePrice * totalMultiplier * (volume * 0.2)) + additionalPrice;
  }, [product, selectedMaterial, selectedColor, includeCorrosionProtection, includeGalvanization, volume]);

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
            <img src={`${BASE_URL}${product.img}`} alt="" />
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
                <select
                  id="material"
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  title={selectedMaterial ? materials.find(m => m.name === selectedMaterial)?.description : 'Выберите материал'}
                >
                  <option value="">Выберите материал</option>
                  {materials.map(material => (
                    <option key={material.name} value={material.name}>{material.name}</option>
                  ))}
                </select>
              </div>
              <div className="calculator-row">
                <label htmlFor="color">Цвет краски:</label>
                <select
                  id="color"
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  title={selectedColor ? colors.find(c => c.name === selectedColor)?.description : 'Выберите цвет'}
                >
                  <option value="">Выберите цвет</option>
                  {colors.map(color => (
                    <option key={color.name} value={color.name}>{color.name}</option>
                  ))}
                </select>
              </div>
              <div className="calculator-row">
                <label className='check'>
                  <input
                    type="checkbox"
                    checked={includeCorrosionProtection}
                    onChange={(e) => setIncludeCorrosionProtection(e.target.checked)}
                  />
                  Включить покрытие от коррозии
                </label>
                <p className="description">
                  {includeCorrosionProtection && (
                    treatments.find(t => t.name === 'Покрытие от коррозии')?.description
                  )}
                </p>
              </div>
              <div className="calculator-row">
                <label className='check2'>
                  <input
                    type="checkbox"
                    checked={includeGalvanization}
                    onChange={(e) => setIncludeGalvanization(e.target.checked)}
                  />
                  Включить отцинковывание
                </label>
                <p className="description">
                  {includeGalvanization && (
                    treatments.find(t => t.name === 'Отцинковывание')?.description
                  )}
                </p>
              </div>
              <div className="calculator-row">
                <label htmlFor="volume">Размер (кв.м):</label>
                <input
                  type="number"
                  id="volume"
                  value={volume}
                  min="1"
                  onChange={(e) => setVolume(Number(e.target.value))}
                />
              </div>
              <p className="calculated-price">Итоговая цена: {price.toFixed(2)} руб.</p>
              <button className="sail" onClick={() => setShowModal(true)}>Заказать</button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <OrderForm
          product={product}
          price={price}
          selectedMaterial={selectedMaterial}
          selectedColor={selectedColor}
          includeCorrosionProtection={includeCorrosionProtection}
          includeGalvanization={includeGalvanization}
          volume={volume}
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ProductPage;
