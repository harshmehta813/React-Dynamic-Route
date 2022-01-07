import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import error from "../Components/404.png";
const getProductById = (id) => {
  const config = {
    method: "get",
    url: `https://my-json-server.typicode.com/harshmehta813/React-Dynamic-Route/products/${id}`
  };
  return axios(config);
};
const ProductDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(0);
  const handleProduct = async () => {
    try {
      setIsLoading(true);
      const { data } = await getProductById(id);
      setData(data);
      setIsLoading(false);
      setStatus(200);
      console.log(`State ${status} Product ${data.name}`);
    } catch (err) {
      console.log(err.response.status);
      if (err.response.status === 404) {
        setStatus(404);
      }
      console.log(`Error ${status}`);
    }
  };

  useEffect(() => {
    handleProduct();
  }, [id, status]);

  if (status === 404) {
    return <img src={error} alt="Error" />;
  }
  if (isLoading) {
    return <div>...loading</div>;
  }

  return (
    <>
      <div>
        <h2>{data.name}</h2>
        <div className="card">
          <div>Name : {data.name}</div>
          <div>Price : ₹{data.price} Only</div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
