import EditContact from './Pages/EditContact';
import HomePage from './Pages/HomePage';
import NewContact from './Pages/NewContact/NewContact';
import NotFound from './Pages/NotFound';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/new-contact', element: <NewContact /> },
  { path: '/edit/:id', element: <EditContact /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
