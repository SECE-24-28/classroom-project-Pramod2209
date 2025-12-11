import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to E-Shop</h1>
      <p>Your one-stop shop for electronics, fashion & more.</p>

      <Link to="/products">
        <button style={styles.btn}>View Products</button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  btn: {
    padding: "12px 20px",
    background: "#222",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Home;
