import { useEffect, useState } from "react"
import { fetchData } from "../../utilis/fetchData"
import Drink from "./drink"
import useData from "../../hooks/useData"
import Modal from "../Modal"

export default function Drinks({ category }) {
    const { data, error, loading } = useData(`filter.php?c=${category}`)

    return (

        <>
            {!loading ?

                <ul className='grid auto-column justify-center p-8 gap-8  overflow-y-scroll '>
                    {data &&
                        data.drinks.map(drink =>
                            <Drink
                                key={drink.idDrink}
                                drink={drink}
                            />
                        )}
                </ul> :

                <h2 className="text-3xl text-black">Loading...</h2>

            }

            {
                error &&
                <Modal
                    message={error}
                />
            }
        </>
    )
}