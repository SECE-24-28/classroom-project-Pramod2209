import products from "../data";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <div style={styles.container}>
      <h2>Products</h2>

      <div style={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
};

export default Products;
