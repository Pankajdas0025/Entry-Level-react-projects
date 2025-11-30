import { BrowserRouter, Routes, Route , Link, useParams } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';


function App() {

  function User()
  {
console.log(useParams())
const { id } = useParams()
return <h1> Welcome User : { id } </h1>

  }

    function Notfound()
  {

return <h1>Page not Found!!</h1>

  }

   function Phone()
  {

return (
  <>

  <h1>Phone Iteams </h1>
  <ul>
    <li>Lava</li>
    <li>Microsoft</li>
    <li>Samsung</li>
    <li>OPPO</li>
  </ul>
  </>
)

  }

   function Laptop()
  {

return (
  <>

  <h1>laptops Iteams </h1>
  <ul>
    <li>DELL</li>
    <li>HP</li>
    <li>Aasusu</li>
    <li>Mackbook</li>
  </ul>
  </>
)


  }


  return (
    <BrowserRouter>
    <nav>
  <Link to="/"> Home </Link>
  <Link to="/about"> About </Link>
  <Link to="/products/phones"> Products </Link>
  <Link to="/user/Pankaj"> Users </Link>
  <Link to="/products/laptops"> laptop </Link>
    </nav>

        <p>This content never relaod when page is navigate </p>
        <p>This content never relaod when page is navigate </p>
        <p>This content never relaod when page is navigate </p>
        <p>This content never relaod when page is navigate </p>
        <p>This content never relaod when page is navigate </p>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='*' element={<Notfound />} />
<Route path="/products" element={<Products />}>
        <Route path="phones" element={<Phone />} />
        <Route path="laptops" element={<Laptop />} />
</Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
