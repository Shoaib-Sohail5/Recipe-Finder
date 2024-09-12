import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import HomePage from "./pages/HomePage"
import FavouritesPage from "./pages/FavouritesPage"

function App() {

  return (
    <>
      <div className="flex">
        <Sidebar/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/favourites' element={<FavouritesPage />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
