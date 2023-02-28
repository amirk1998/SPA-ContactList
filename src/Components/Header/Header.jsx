import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <>
      <header className='px-8 flex flex-col items-center justify-center mt-6 w-full '>
        <h2 className='font-bold text-2xl text-center mb-2 w-1/2'>
          Contact Manager
          <hr className='border border-gray-300 my-2' />
        </h2>
        <div className='bg-neutral-200 p-4 mb-2 rounded-xl'>
          <Navigation />
        </div>
      </header>
    </>
  );
};

export default Header;
