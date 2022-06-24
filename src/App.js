import NavBar from './Components/NavBar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cart from './Components/Cart/Cart'
import { CartContext } from './Components/Context/cartContext';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    return (
        <CartContext.Provider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route index path='/' element={<ItemListContainer greeting='Bienvenido a Narutech' />} />
                    <Route path='/categorias/:categoria' element={<ItemListContainer />} />
                    <Route path='/detalle/:id' element={<ItemDetailContainer />} />
                    <Route path='*' element={<Navigate to='/' />} />
                    <Route path='/Cart' element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </CartContext.Provider>
    )
}

export default App