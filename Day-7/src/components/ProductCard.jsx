function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.img} />

      <h3>{product.name}</h3>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p style={styles.price}>₹ {product.price}</p>

      <button style={styles.btn}>Add to Cart</button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    width: "220px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  img: {
    width: "90%",
    height: "190px",
    borderRadius: "10px",
  },
  price: {
    color: "green",
    fontWeight: "bold",
  },
  btn: {
    padding: "10px",
    width: "100%",
    background: "#222",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ProductCard;
