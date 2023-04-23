import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// import layouts and pages
import RootLayout from "./layouts/RootLayout";
import Dashboard, { tasksLoader } from "./components/Dashboard";
import Create, { createAction } from "./pages/Create";
import Profile from "./pages/Profile";

// router and layouts
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} loader={tasksLoader} />
      <Route path="create" element={<Create />} action={createAction}/>
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

function App(){
  return (
    <RouterProvider router={router} />
  )
}

export default App;
