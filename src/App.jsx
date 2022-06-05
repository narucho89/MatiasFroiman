import NavBar from './Components/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount'

function App() {
    let greeting = 'Bienvenido a Narutech'
    return (
        <>
            <NavBar />
            <ItemListContainer greeting='Bienvenido a Narutech' />
            <ItemCount/>


        </>
    )
}

export default App