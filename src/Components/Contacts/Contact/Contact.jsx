import { Link } from 'react-router-dom';
import { HiUserCircle, HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi2';
import { CiEdit } from 'react-icons/ci';
// import { BiMessageAltDetail } from 'react-icons/bi';

const Contact = ({ name, email, id, deleteHandler }) => {
  return (
    <>
      <div className='flex flex-row items-center justify-start w-1/2 px-8 mb-2 '>
        <HiUserCircle className='w-8 h-8 mr-4 mt-1' />
        <div className='flex flex-col w-full '>
          <p className='font-medium text-lg text-gray-800 mt-1'>{name}</p>
          <p className='font-normal text-base text-gray-800 '>{email}</p>
        </div>
        <div className='flex flex-row items-center justify-start gap-x-4 mt-1'>
          {/* <Link
            // key={id}
            to={`/contacts/${id}`}
            className='flex items-center justify-center'
          >
            <button>
              <BiMessageAltDetail className='text-slate-600 hover:text-slate-900 w-6 h-6 ' />
            </button>
          </Link> */}
          <Link
            key={id}
            to={`/edit/${id}`}
            className='flex items-center justify-center'
          >
            <button>
              <CiEdit className='text-slate-600 hover:text-slate-900 w-6 h-6' />
            </button>
          </Link>
          <button onClick={() => deleteHandler(id)}>
            <HiOutlineTrash className='text-red-500 hover:text-red-700 w-6 h-6' />
          </button>
        </div>
      </div>
      <hr className='border border-gray-200 mt-2 w-1/2' />
    </>
  );
};

export default Contact;
