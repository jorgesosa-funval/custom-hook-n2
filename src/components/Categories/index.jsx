import Category from "./Category"
import useData from "../../hooks/useData"
export default function Categories({ pickCategory }) {

    const {data} = useData('list.php?c=list')

  
    return (
      <ul className='w-full p-8'>
  
        {data &&
          data?.drinks.map((drink, index) =>
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

  