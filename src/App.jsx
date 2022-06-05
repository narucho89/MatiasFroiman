import NavBar from './Components/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount2 from './Components/ItemCount/ItemCount2';


function App() {
     
    return (
        <>
            <NavBar />
            <ItemListContainer greeting='Bienvenido a Narutech' />
            <ItemCount2 stock={10} initial={1} /> 


        </>
    )
}

export default App