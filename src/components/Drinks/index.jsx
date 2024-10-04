import { useEffect, useState } from "react"
import Drink from "./drink"
import useData from "../../hooks/useData"
import Modal from "../Modal"
import { useQueryClient } from '@tanstack/react-query'

export default function Drinks({ category }) {
    const { data, error, loading } = useData(`filter.php?c=${category}`, 'drinks')
    const qc = useQueryClient()

    useEffect(() => {
        qc.refetchQueries(['category'])
    }, [category])
    return (

        <>

            {!loading ?
                <ul className='grid auto-column justify-center p-8 gap-8  overflow-y-scroll '>
                    {data &&
                        data.data.drinks.map(drink =>
                            <Drink
                                key={drink.idDrink}
                                drink={drink}
                            />)
                    }

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