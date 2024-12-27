import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StartPage from '../Pages/StartGamePage'
import GameIntroPage from '../Pages/GameIntroPage'
import QuestionPage from '../Pages/QuestionsPage'
import GameOverPage from '../Pages/GameOver'

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
