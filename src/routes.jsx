import EditContact from './Pages/EditContact';
import HomePage from './Pages/HomePage';
import NewContact from './Pages/NewContact/NewContact';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/new-contact', element: <NewContact /> },
  { path: '/contacts/:id', element: <EditContact /> },
];

export default routes;
