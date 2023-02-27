import { HiUserCircle, HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi2';
import { CiEdit } from 'react-icons/ci';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getOneContact } from '../../../services/getOneContactService';
const Contact = ({ name, email, id }) => {
  let navigate = useNavigate();
  let params = useParams();
  // console.log(params);
  // const contactID = params.id;

  // useEffect(() => {
  //   if (commentID) {
  //     getOneComment(commentID)
  //       .then((res) => {
  //         setComment(res.data);
  //         // console.log(res.data);
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // }, [commentID]);

  // useEffect(() => {
  //   if (contactID) {
  //     getOneContact(contactID)
  //       .then((res) => setContacts(res.data))
  //       .catch((error) => console.log(error));
  //   }
  // }, [contactID]);

  return (
    <>
      <div className='flex flex-row items-center justify-start w-1/2 px-8 mb-2 '>
        <HiUserCircle className='w-8 h-8 mr-4 mt-1' />
        <div className='flex flex-col w-full '>
          <p className='font-medium text-lg text-gray-800 mt-1'>{name}</p>
          <p className='font-normal text-base text-gray-800 '>{email}</p>
        </div>
        <Link key={id} to={`/contacts/${id}`}>
          <div className='flex flex-row items-center justify-start gap-x-4 mt-1'>
            <button>
              <CiEdit className='text-slate-600 hover:text-slate-900 w-6 h-6' />
            </button>
            <button>
              <HiOutlineTrash className='text-red-500 hover:text-red-700 w-6 h-6' />
            </button>
          </div>
        </Link>
      </div>
      <hr className='border border-gray-200 mt-2 w-1/2' />
    </>
  );
};

export default Contact;
// TODO => Chnage handlers for routerDOM
