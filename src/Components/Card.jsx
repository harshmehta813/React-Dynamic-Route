const Card = ({ name, price }) => {
  return (
    <div>
      <div
        style={{ textAlign: "left", paddingLeft: "10px", paddingTop: "50px" }}
        className="Card"
      >
        <p>Name : {name}</p>
        <p>Price : ₹{price} Only</p>
      </div>
    </div>
  );
};

export default Card;
