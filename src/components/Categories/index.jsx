import { useEffect, useState } from "react"
import Category from "./Category"
import { fetchData } from "../../utilis/fetchData"

export default function Categories({ pickCategory }) {
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

  