function Card(props) {
  return (
    <div className="card" style={{ border: "1px solid black" }}>
      <img
        src="https://www.jeffa.in/cdn/shop/files/PeakPerformanceTshirtBlue3.webp?v=1712666355"
        height="200px"
        width="200px"
      />
      <div style={{ textAlign: "center" }}>
        <h2>{props.cloth}</h2>
        <h1>{props.offer}</h1>
        <h2>Shop Now</h2>
      </div>
    </div>
  );
}


export default Card;