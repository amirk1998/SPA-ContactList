import { useState, useEffect } from 'react';
import { getAllContacts } from '../../services/getAllContactService';
import NewContact from '../../Pages/NewContact/NewContact';
import Contact from './Contact/Contact';
import { Link } from 'react-router-dom';

const ContactList = () => {
  const [contacts, setContacts] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const { data } = await getAllContacts();
        setContacts(data);
      } catch (error) {
        // console.log(err);
        setError(true);
      }
    };
    getContacts();
  }, []);

  const renderContacts = () => {
    let renderValue = (
      <p className='text-center font-semibold text-xl text-slate-800'>
        Loading ...
      </p>
    );
    if (error) {
      renderValue = (
        <p className='text-center font-semibold text-xl text-slate-800'>
          fetching data failed !!!
        </p>
      );
      toast.error('fetching data failed!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        toastId: 'custom-id-yes',
        progress: undefined,
        theme: 'light',
      });
    }

    if (contacts && !error) {
      return (renderValue = contacts.map((c) => (
        <Contact key={c.id} id={c.id} name={c.name} email={c.email} />
      )));
    }

    return renderValue;
  };

  return (
    <div className=' rounded-xl w-full flex flex-col items-center justify-center h-auto'>
      {/* <NewContact /> */}
      <h2 className='text-center text-3xl font-semibold'>Contact List</h2>
      <hr className='border border-gray-200 w-1/2 mb-2 mt-4 px-16' />
      {renderContacts()}
    </div>
  );
};

export default ContactList;
