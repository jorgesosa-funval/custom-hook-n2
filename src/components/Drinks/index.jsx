import { useEffect, useState } from "react"
import { fetchData } from "../../utilis/fetchData"
import Drink from "./drink"

export default function Drinks({ category }) {
    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        fetchData(`filter.php?c=${category}`)
            .then(data => setDrinks(data.drinks))
    }, [category])

    return (
        <ul className='grid auto-column place-content-center mt-8 p-8 gap-8  overflow-y-scroll '>
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