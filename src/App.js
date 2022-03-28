
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Services from './components/Services';
import SignUp from './components/SignUp';
function App() {
  return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products' element={<Products/>} />
				<Route path='/services' element={<Services/>} />
				<Route path='/sign-up' element={<SignUp/>} />
			</Routes>
			<Footer />
		</BrowserRouter>
  )
}

export default App;
