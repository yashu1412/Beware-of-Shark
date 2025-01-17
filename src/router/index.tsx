import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StartPage from '../pages/StartGamePage'
import GameIntroPage from '../pages/GameIntroPage'
import GamePage from '../pages/GamePage'

const route = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />,
  },
  {
    path: '/gameintro',
    element: <GameIntroPage />,
  },
  {
    path: '/game',
    element: <GamePage />,
  }
])

const Router: React.FC = () => {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  )
}

export default Router
