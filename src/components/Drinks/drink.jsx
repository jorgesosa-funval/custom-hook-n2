
export default function Drink({ drink: { idDrink, strDrink, strDrinkThumb } }) {
    return (
      <li className=''>
        <figure className=' w-60 h-72' id={idDrink}>
          <img src={strDrinkThumb} alt={strDrink} className='w-full h-full' />
          <figcaption>{strDrink}</figcaption>
        </figure>
      </li>
    )
  }