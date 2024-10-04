
export default function Drink({ drink: { idDrink, strDrink, strDrinkThumb } }) {
  return (
    <li className=''>
      <figure className='group w-60 h-72 relative overflow-hidden rounded-md cursor-pointer hover:ring-2' id={idDrink}>
        <img src={strDrinkThumb} alt={strDrink} className='w-full h-full' />
        <figcaption className="absolute top-0 left-0 bg-gray-900/30  h-full w-full place-content-center grid opacity-0  group-hover:opacity-100  text-white font-semibold text-lg transition-opacity duration-1000">
          {strDrink}
        </figcaption>
      </figure>
    </li>
  )
}