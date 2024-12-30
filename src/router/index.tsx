import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StartPage from '../pages/StartGamePage'
import GameIntroPage from '../pages/GameIntroPage'
import QuestionPage from '../pages/QuestionsPage'
import GameOverPage from '../pages/GameOver'

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
    element: <QuestionPage />,
  },
  {
    path: '/gameover',
    element: <GameOverPage />,
  },
])

const Router: React.FC = () => {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  )
}

export default Router
