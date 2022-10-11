import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import Quiz from './components/Quiz/Quiz';
import Topics from './components/Topics/Topics';
import Main from './layout/Main';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Header/>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
      },
      {
        path:'topics',
        element:<Topics></Topics>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz')        
      },
      {
        path:'/topic/:topicId',
        loader: async({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
        element:<Quiz/>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
