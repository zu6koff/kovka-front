/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 9;

  useEffect(() => {
    const apiCatalogProduct = process.env.REACT_APP_CATALOG_PRODUCT;
    const apiCatalogTypes = process.env.REACT_APP_CATALOG_TYPE;

    fetch(apiCatalogProduct)
      .then(response => response.json())
      .then((data) => {
        setProducts(data.rows);
        setTotalPages(Math.ceil(data.rows.length / limit));
      })
      .catch((error) => console.error('Ошибка при загрузке продуктов:', error));

    fetch(apiCatalogTypes)
      .then(response => response.json())
      .then((data) => setTypes(data))
      .catch((error) => console.error('Ошибка при загрузке типов товаров:', error));
  }, []);

  const handleTypeClick = (typeId) => {
    setCurrentPage(1);
    setSelectedCategory(typeId);

    if (typeId === 'all') {
      const apiCatalogProduct = process.env.REACT_APP_CATALOG_PRODUCT;
      fetch(apiCatalogProduct)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setProducts(data.rows);
          setTotalPages(Math.ceil(data.rows.length / limit));
        })
        .catch((error) => console.error('Ошибка при загрузке продуктов:', error));
    } else {

      const apiCatalogProduct = `${process.env.REACT_APP_CATALOG_PRODUCT}?typeId=${typeId}`;
      fetch(apiCatalogProduct)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setProducts(data.rows);
          setTotalPages(Math.ceil(data.rows.length / limit));
        })
        .catch((error) => console.error('Ошибка при загрузке продуктов:', error));
    }
  };
  const handleSearch = (searchValue) => {
  const filteredProducts = products.filter((product) =>
    product.direction.toLowerCase().includes(searchValue.toLowerCase())
  );
  setProducts(filteredProducts);
};

  return (
    <div className="catalog">
      <div className="conteiner-slider">
        <div className='block1'>
          <div className='imgmast'><img src={'https://0fx825678.urest.org/__scale/uploads/s/x/i/p/xip56oooiblq/img/autocrop/ad665770e254a4105453bf101b4baa53.jpg?quality=60&width=1366&webp=1'} alt=''/></div>
          <div className='texth'><h1>Кованые изделия</h1></div>
          <div className='textp'>
            <p>Наши кованые изделия отличаются изысканным дизайном, высоким качеством и неповторимым стилем. Каждое изделие создано с любовью и вниманием к деталям, что делает его по-настоящему уникальным. Погрузитесь в мир красоты и изыска с нашими коваными изделиями и добавьте неповторимый штрих в ваш дом.</p>
          </div>
        </div>
      </div>
      <div className="category-list">
        <select value={selectedCategory} onChange={(e) => handleTypeClick(e.target.value)}>
          <option value="all">Все изделия</option>
          {types.map((type) => (
            <option key={type.id} value={type.id}>{type.name}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Поиск по названию..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="shop-container">
        <div className="product-list-main">
          <div className="product-list">
            {products
              .slice((currentPage - 1) * limit, currentPage * limit)
              .map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                  <img src={`http://localhost:3010/${product.img}`} alt="" />
                  <p>{product.direction}</p>
                </Link>
              ))}
          </div>
          <div className="pagination">
            <button onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))} disabled={currentPage === 1}>{"<"}</button>
            <span>{currentPage} / {totalPages}</span>
            <button onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))} disabled={currentPage === totalPages}>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
