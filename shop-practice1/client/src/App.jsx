
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { ROUTES } from './routes/routes'
import DataContextProvider from './context/dataContext'
const routes = createBrowserRouter(ROUTES)
function App() {

  return (
    <>
      <DataContextProvider>
        <RouterProvider router={routes} />
      </DataContextProvider>
    </>
  )
}

export default App
