import { useEffect, useState } from "react";

function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  return (
    <div>
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
        </div>
      )}
    </div>
  );
}

export default App;