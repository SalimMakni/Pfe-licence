import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Listarticles from "./components/articles/Listarticles"
import Listcategories from "./components/categories/Listcategories"
import Listscategories from "./components/scategories/Listscategories"
import Menu from "./components/Menu"
import Insertarticle from "./components/articles/Insertarticle"
import Editarticle from "./components/articles/Editarticle"
import Listarticlecard from "./components/client/Listarticlecard"
import { CartProvider } from "use-shopping-cart"
import Cart from "./components/client/Cart"
import Listarticlestable from "./components/articles/Listarticlestable"
//Gestion de la navigation
const App = () => {//Composant fonctionnel
  return (
    <div>
<CartProvider>
    <Router>
      <Menu/>
      <Routes>
        <Route path="BookReader/ListeBooks" element={<ListBookCard />}/>
        <Route path="BookReader/Cart" element={<Cart/>}/>
        <Route path="/BookReader/Ajout" element={<BookCard/>}/>
        <Route path="BookReader/PaginationBook" element={<Pagination/>}/>
        <Route path="BookReader/categories" element={<Listscategories/>}/>
        <Route path="/CatBook" element={<ListBookCategories/>}/>
        
        <Route path="/Commande/AjoutCommande" element={<AjoutCommande/>}/>
        <Route path="/Commande/EditCommande" element={<EditCommande/>}/>
        <Route path="/Commande/SupprimerCommande" element={<SuppressionCommande/>}/>
        
      </Routes>
    </Router>
    </CartProvider>
    </div>
  )
}

export default App
