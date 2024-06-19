import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const limit = 9;
  const BASE_URL = process.env.REACT_APP_BASE;
  
  useEffect(() => {
    AOS.init({
        duration: 1000, 
        once: true, 
    });
}, []);

  useEffect(() => {
    const apiCatalogTypes = process.env.REACT_APP_CATALOG_TYPE;
    fetch(apiCatalogTypes)
      .then(response => response.json())
      .then((data) => setTypes(data))
      .catch((error) => console.error('Ошибка при загрузке типов товаров:', error));
  }, []);

  const fetchProducts = useCallback(() => {
    let apiCatalogProduct = `${process.env.REACT_APP_CATALOG_PRODUCT}?limit=${limit}&page=${currentPage}`;

    if (selectedCategory !== 'all') {
      apiCatalogProduct += `&typeId=${selectedCategory}`;
    }

    fetch(apiCatalogProduct)
      .then(response => response.json())
      .then((data) => {
        setProducts(data.rows);
        setOriginalProducts(data.rows); 
        setTotalPages(Math.ceil(data.count / limit)); 
      })
      .catch((error) => console.error('Ошибка при загрузке продуктов:', error));
  }, [selectedCategory, currentPage]);

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, currentPage, fetchProducts]);

  const handleTypeClick = (typeId) => {
    setCurrentPage(1);
    setSelectedCategory(typeId);
  };

  const handleSearch = (searchValue) => {
    setSearchQuery(searchValue); 
    const filteredProducts = originalProducts.filter((product) =>
      product.direction.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProducts(filteredProducts);
    setTotalPages(Math.ceil(filteredProducts.length / limit)); 
    setCurrentPage(1); 
  };

  return (
    <div className="catalog">
      <div className="conteiner-slider">
        <div className='block1'>
          <div className='imgmast'>
            <img src={'https://0fx825678.urest.org/__scale/uploads/s/x/i/p/xip56oooiblq/img/autocrop/ad665770e254a4105453bf101b4baa53.jpg?quality=60&width=1366&webp=1'} alt='' data-aos="fade-up" data-aos-delay='100'/>
          </div>
          <div className='texth'data-aos="fade-up" data-aos-delay='200'><h1>Кованые изделия</h1></div>
          <div className='textp'data-aos="fade-up" data-aos-delay='300'>
            <p>Наши кованые изделия отличаются изысканным дизайном, высоким качеством и неповторимым стилем. Каждое изделие создано с любовью и вниманием к деталям, что делает его по-настоящему уникальным. Погрузитесь в мир красоты и изыска с нашими коваными изделиями и добавьте неповторимый штрих в ваш дом.</p>
          </div>
        </div>
      </div>
      <div className="category-list" data-aos="fade-up" data-aos-delay='100'>
        <select value={selectedCategory} onChange={(e) => handleTypeClick(e.target.value)}>
          <option value="all">Все изделия</option>
          {types.map((type) => (
            <option key={type.id} value={type.id}>{type.name}</option>
          ))}
        </select>
        <input data-aos="fade-up" data-aos-delay='100'
          type="text"
          placeholder="Поиск по названию..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="shop-container">
        <div className="product-list-main">
          <div className="product-list">
            {products.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="product-card" data-aos="fade-up" data-aos-delay='100'>
                <img src={`${BASE_URL}${product.img}`} alt="" />
                <p>{product.direction}</p>
              </Link>
            ))}
          </div>
          <div className="pagination">
            <button
              onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
              disabled={currentPage === 1}
            >
              {"<"}
            </button>
            <span>{currentPage} / {totalPages}</span>
            <button
              onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
