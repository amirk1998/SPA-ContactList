import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { getAllContacts } from '../../services/getAllContactService';

const SearchComponent = ({ setContacts }) => {
  const [searchValue, setSearchValue] = useState('');

  const searchHandler = async (e) => {
    try {
      setSearchValue(e.target.value);
      const search = e.target.value.trim();

      const { data } = await getAllContacts();
      const filteredValue = data.filter((item) =>
        item.name.toLowerCase().includes(search.toString().toLowerCase())
      );
      setContacts(filteredValue);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='flex items-center mt-2 mb-4'>
      <label htmlFor='simple-search' className='sr-only'>
        Search
      </label>
      <div className='relative w-full'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <AiOutlineSearch />
        </div>
        <input
          type='text'
          id='simple-search'
          onChange={searchHandler}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  '
          placeholder='Search'
          required
        />
      </div>
      <button
        type='submit'
        className='p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 '
      >
        <AiOutlineSearch className='w-5 h-5 ' />
        <span className='sr-only'>Search</span>
      </button>
    </form>
  );
};

export default SearchComponent;
