import { HiUserCircle, HiOutlineTrash } from 'react-icons/hi2';

const Contact = ({ name, email }) => {
  return (
    <>
      <div className='flex flex-row items-center justify-start w-1/2 px-16 mb-2 '>
        <HiUserCircle className='w-8 h-8 mr-4 mt-1' />
        <div className='flex flex-col w-full '>
          <p className='font-medium text-lg text-gray-800 mt-1'>{name}</p>
          <p className='font-normal text-base text-gray-800 '>{email}</p>
        </div>
        <button>
          <HiOutlineTrash className='text-red-500 hover:text-red-700 w-6 h-6' />
        </button>
      </div>
      <hr className='border border-gray-200 mt-2 w-1/2' />
    </>
  );
};

export default Contact;
