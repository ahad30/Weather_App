import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './routes/routes';
import { Toaster } from 'react-hot-toast';

const App = () => {
  

  return (
    <>
      <RouterProvider router={routes} />
      <Toaster/>
    </>
  )
}

export default App
