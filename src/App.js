import NavBar from './Components/NavBar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cart from './Components/Cart/Cart'


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
     
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route index  path='/' element={<ItemListContainer greeting='Bienvenido a Narutech' />}/>
                <Route path='/categorias/:categoriaId' element={<ItemListContainer/>}/>
                <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
                <Route path='*' element={<Navigate to='/'/>}/>
                <Route path='/Cart' element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App