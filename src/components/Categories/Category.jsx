
export default function Category({ category, pickCategory }) {
    return (
      <li className='hover:bg-cyan-700 rounded-md px-2 py-1 cursor-pointer'
        onClick={() => pickCategory(category)}>
        <h4 className='text-lg font-medium text-white'>{category}</h4>
      </li>
    )
  }