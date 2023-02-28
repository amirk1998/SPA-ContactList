import { useState, useEffect, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Contact from '../Components/Contacts/Contact/Contact';
import { addNewPost } from '../services/addNewContactService';
import { getAllContacts } from '../services/getAllContactService';
import { getOneContact } from '../services/getOneContactService';
import { updateContact } from '../services/updateContact';

const EditContact = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
  });

  let navigate = useNavigate();
  let params = useParams();
  const contactID = params.id;
  // console.log(contactID);

  // useEffect(() => {
  //   if (contactID) {
  //     getOneContact(contactID)
  //       .then((res) => {
  //         setContact(res.data);
  //         console.log(res.data);
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // }, [contactID]);

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getOneContact(contactID);
        setContact({ name: data.name, email: data.email });
      } catch (error) {
        console.log(error);
      }
    };

    localFetch();
  }, []);

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const editChangeHandler = async (event) => {
    event.preventDefault();
    try {
      if (contact) {
        await updateContact(contactID, contact);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='rounded-xl w-full flex flex-col items-center justify-center mt-2'>
      <h2 className='text-gray-900 font-semibold text-xl my-4'>Edit Contact</h2>
      <form className='w-full px-16 flex flex-col items-center justify-center'>
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block mb-2 text-sm font-medium text-gray-900 w-full'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={contact && contact.name}
            onChange={changeHandler}
            placeholder='name'
            className='bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5'
          />
        </div>
        <div className='mb-8'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 w-full'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={contact && contact.email}
            onChange={changeHandler}
            placeholder='email'
            className='bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5'
          />
        </div>
        <button
          type='submit'
          onClick={editChangeHandler}
          className=' text-white bg-violet-600 hover:bg-violet-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4'
        >
          Edit Contact
        </button>
      </form>
    </div>
  );
};

export default EditContact;
