import { useState } from 'react'
import Categories from './components/Categories'
import Drinks from './components/Drinks'
import Searchbar from './components/Searchbar'


 
//www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
//www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita




export default function App() {
  const [sCategory, setScategory] = useState('Ordinary_Drink')
  function pickCategory(category) {
    setScategory(category)
  }

  return ( 
    <div className='flex h-screen'>
      <aside className='w-80 h-full bg-cyan-800 shrink-0'>
        <Searchbar />
        <Categories
          pickCategory={pickCategory}
        />

      </aside>
      <main className= 'flex flex-col flex-grow  overflow-hidden'>
        <nav className='w-full h-16 bg-cyan-950 shrink-0'>

        </nav>
        <Drinks
          category={sCategory}
        />
      </main>
    </div>
  )
}
 