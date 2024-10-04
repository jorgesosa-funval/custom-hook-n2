import { SearchIcon } from "./Icons";

export default function Searchbar() {
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
  