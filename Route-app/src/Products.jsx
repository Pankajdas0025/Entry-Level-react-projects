import { Outlet, Link } from 'react-router-dom';
function Products() {
  return (
    <>
      <h1>Products</h1>
      <ul>
        <li><Link to="phones">Phones</Link></li>
        <li><Link to="laptops">Laptops</Link></li>
      </ul>

      {/* Nested components will load here */}
      <Outlet />
    </>
  );
}
export default Products;
