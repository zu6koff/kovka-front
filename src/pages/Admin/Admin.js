import React, { useState, useEffect, useRef, useCallback } from 'react';
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductForm';

const Admin = () => {
  const [view, setView] = useState('Товары');
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productListRef = useRef(null);
  const [editProductId, setEditProductId] = useState(null);
  const limit = 9;
  const BASE_URL = process.env.REACT_APP_BASE;

  const fetchData = useCallback(async () => {
    try {
      const categoriesResponse = await fetch(process.env.REACT_APP_CATALOG_TYPE);
      if (!categoriesResponse.ok) {
        throw new Error('Ошибка загрузки категорий');
      }
      const categoriesData = await categoriesResponse.json();
      setCategories(categoriesData);

      const response = await fetch(`${process.env.REACT_APP_CATALOG_PRODUCT}?limit=${limit}&page=${currentPage}`);
      if (!response.ok) {
        throw new Error('Ошибка загрузки товаров');
      }
      const data = await response.json();
      setProducts(data.rows.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)));
      setTotalPages(Math.ceil(data.count / limit));
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
      alert('Произошла ошибка при загрузке данных: ' + error.message);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleMenuClick = (menuItem) => {
    setView(menuItem);
  };

  // Удаление категории
  const handleDeleteCategory = async (categoryId) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_ADMIN_DELETE_TYPE}/${categoryId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Ошибка удаления категории');
      }
      setCategories(categories.filter((category) => category.id !== categoryId));
    } catch (error) {
      console.error('Ошибка при удалении категории:', error);
      alert('Произошла ошибка при удалении категории: ' + error.message);
    }
  };

  // Добавление категории
  const handleAddCategory = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_ADMIN_ADD_TYPE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: newCategoryName })
      });
      if (!response.ok) {
        throw new Error('Ошибка добавления категории');
      }
      const newCategory = await response.json();
      setCategories([...categories, newCategory]);
      setNewCategoryName('');
      setShowAddCategoryForm(false);
    } catch (error) {
      console.error('Ошибка при добавлении категории:', error);
      alert('Произошла ошибка при добавлении категории: ' + error.message);
    }
  };

  // Добавление продукта
  const handleAddProduct = async (productData) => {
    try {
      const formData = new FormData();
      formData.append('direction', productData.direction);
      formData.append('price', productData.price);
      formData.append('img', productData.img);
      formData.append('info', productData.info);
      formData.append('typeId', productData.typeId); 
    
      const token = localStorage.getItem('token'); 
      const response = await fetch(process.env.REACT_APP_ADMIN_ADD_PRODUCT, {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      });
      await response.json();
      setShowAddProductForm(false);
      fetchData();
    } catch (error) {
      console.error('Ошибка при добавлении товара:', error);
      alert('Произошла ошибка при добавлении товара: ' + error.message);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_ADMIN_DELETE_PRODUCT}/${productId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Ошибка удаления товара');
      }
      setProducts(products.filter(product => product.id !== productId));
    } catch (error) {
      console.error('Ошибка при удалении товара:', error);
      alert('Произошла ошибка при удалении товара: ' + error.message);
    }
  };
  
  const handleEditProduct = (productId) => {
    setEditProductId(productId);
  };

  const handleProductUpdate = async (updatedProduct) => {
    try {
      setProducts((prevProducts) => 
        prevProducts.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        ).sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      );
      setEditProductId(null);
      fetchData();
    } catch (error) {
      console.error('Ошибка при обновлении товара:', error);
      alert('Произошла ошибка при обновлении товара: ' + error.message);
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <ul>
          <li onClick={() => handleMenuClick('Товары')}>Товары</li>
          <li onClick={() => handleMenuClick('Категории')}>Категории</li>
        </ul>
      </div>

      <div className="admin-content">
        {view === 'Товары' && (
          <div className="admin-list">
            <h2 ref={productListRef}>Список товаров</h2>
            <button className="add-button-circle" onClick={() => setShowAddProductForm(true)}>+</button>
            <ul className="products-list">
              {products && products.map((product) => (
                <li key={product.id}>
                  <img src={`${BASE_URL}${product.img}`} alt={product.direction} />
                  <p>{product.direction}</p>
                  <p>{product.price} руб.</p>
                  <div className="product-actions">
                    <button className="edit-button" onClick={() => handleEditProduct(product.id)}>&#9998;</button>
                    <button className="delete-button" onClick={() => handleDeleteProduct(product.id)}>&#128465;</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="pagination-admin">
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
        )}
        {view === 'Категории' && (
          <div className="admin-list">
            <h2>Список категорий</h2>
            <button className="add-button-circle" onClick={() => setShowAddCategoryForm(true)}>+</button>
            <ul>
              {categories.map((category) => (
                <li key={category.id}>
                  {category.name}
                  <button className="delete-button" onClick={() => handleDeleteCategory(category.id)}>&#128465;</button>
                </li>
              ))}
            </ul>
            {showAddCategoryForm && (
              <div className="modal-overlay">
                <div className="modal-category">
                  <h2>Добавить категорию</h2>
                  <input
                    type="text"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    placeholder="Новая категория"
                  />
                  <div className="modal-actions">
                    <button className="add-button" onClick={handleAddCategory}>Сохранить</button>
                    <button className="cancel-button" onClick={() => setShowAddCategoryForm(false)}>Отмена</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {showAddProductForm && (
        <div className="modal-overlay">
          <div className="modal-product">
            <AddProductForm onAddProduct={handleAddProduct} onClose={() => { setShowAddProductForm(false); fetchData(); }} />
          </div>
        </div>
      )}
      {editProductId && (
        <div className="modal-overlay">
          <div className="modal-product">
            <EditProductForm productId={editProductId} onClose={() => { setEditProductId(null); fetchData(); }} onUpdateProduct={handleProductUpdate} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;