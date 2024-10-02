import { useEffect, useState } from 'react';
import './Product.css';
import { useCart } from 'react-use-cart';

const Products = () => {
  const [fetchData, setFetchData] = useState([]);  //  [] initally fetch data is undefined (or) null (or) empty.so that we mention array
  const { addItem } =useCart()


  useEffect(() => {
    fetchingData();
  }, []);      // []--> it is dependency array.which it is used maintain the useEffect hook.

  const fetchingData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setFetchData(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1 className='text-align'>Products</h1>
      {fetchData.length === 0 ? (
        <p>Fetching data...</p>
      ) : (
        <div className="products-grid">
          {fetchData.map(product => (        //map is used for fetch the data INDIVIDUALLY 
            <div key={product.id} className="product-card d-flex justify-content-between flex-column">
              <div>
              <img src={product.image} alt={product.title} className="product-image" />
              </div>
              <div>
              <h2 className="product-title">{product.title}</h2>
              <p  className="product-price">${product.price}</p>
              </div>
              <div className='' >
              <button className='btn btn-success justify-content-end' onClick={()=>addItem(product)}>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
