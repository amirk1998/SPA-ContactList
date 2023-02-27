import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import routes from './routes';

function App() {
  return (
    // <div className='App bg-neutral-100 text-slate-900 flex flex-col items-center h-full w-full pt-8 font-[Montserrat] px-8'>
    <Layout className='w-full bg-neutral-100 '>
      <div className='bg-neutral-100 rounded-xl text-slate-900 flex flex-col items-center w-full h-full pt-8 px-8 font-[Montserrat]'>
        <Routes>
          {routes.map((route) => {
            return <Route {...route} key={crypto.randomUUID()} />;
          })}
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
