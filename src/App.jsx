import { useEffect, useState } from 'react'
import { MenuIcon, SearchIcon } from './components/Icons'
//www.thecocktaildb.com/api/json/v1/1/list.php?c=list
//www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
//www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
//www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita


async function fetchData(url) {
  const base = `https://www.thecocktaildb.com/api/json/v1/1/${url}`
  const rs = await fetch(base)
  const json = await rs.json()
  return json
}

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
      <main className='flex-grow h-full'>
        <Drinks
          category={sCategory}
        />
      </main>
    </div>
  )
}


function Drinks({ category }) {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    fetchData(`filter.php?c=${category}`)
      .then(data => setDrinks(data.drinks))
  }, [category])

  return (
    <ul className='grid'>
      {drinks &&
        drinks.map(drink =>
          <Drink
            key={drink.idDrink}
            drink={drink}
          />
        )}
    </ul>
  )
}


function Drink({ drink: { idDrink, strDrink, strDrinkThumb } }) {
  return (
    <li>
      <figure className='' id={idDrink}>
        <img src={strDrinkThumb} alt={strDrink} />
        <figcaption>{strDrink}</figcaption>
      </figure>
    </li>
  )
}


function Searchbar({ }) {
  return (
    <div className='flex w-4/5 mt-8 mx-auto h-9 rounded-md overflow-hidden'>
      <figure className='w-8 bg-slate-900 grid place-content-center'>
        <SearchIcon className="size-6 stroke-white" />
      </figure>
      <input
        type="text"
        placeholder='Search'
        className='flex-grow outline-none px-2'
      />
    </div>
  )
}

function Categories({ pickCategory }) {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetchData('list.php?c=list')
      .then((data) => setCategories(data.drinks))
  }, [])

  return (
    <ul className='w-full p-8'>

      {
        categories.map((drink, index) =>
          <Category
            key={index}
            category={drink.strCategory}
            pickCategory={pickCategory}
          />
        )
      }

    </ul>
  )
}

function Category({ category, pickCategory }) {
  return (
    <li className='hover:bg-cyan-700 rounded-md px-2 py-1 cursor-pointer'
      onClick={()=>pickCategory(category)}>
      <h4 className='text-lg font-medium text-white'>{category}</h4>
    </li>
  )
}