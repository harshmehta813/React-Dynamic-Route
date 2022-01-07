import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const fetchProducts = () => {
  return axios.get(
    "https://my-json-server.typicode.com/harshmehta813/React-Dynamic-Route/products"
  );
};

const AllProducts = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleFetchProduct = async () => {
    try {
      setIsLoading(true);
      const { data } = await fetchProducts();
      setData(data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleFetchProduct();
  }, []);

  if (isLoading) {
    return <div>...loading</div>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>More Details</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => {
          return (
            <>
              <tr>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td>
                  <Link to={`/products/${item.id}`} className="link">
                    Show Product Info
                  </Link>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};
export default AllProducts;
