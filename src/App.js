import { Route, Routes } from "react-router-dom";

import SignInPage from "./pages/SignInPage";
import { PATH_AUTH } from "./routes/path";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<HomePage></HomePage>}></Route> */}
        {/* <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route> */}
        <Route path={PATH_AUTH.login} element={<SignInPage></SignInPage>}></Route>

        {/* <Route path="*" element={<PageNotFound></PageNotFound>}></Route> */}
        {/* <Route
          path="/category/:slug"
          element={<CategoryPage></CategoryPage>}
        ></Route>
        <Route
          path="/:slug"
          element={<PostDetailsPage></PostDetailsPage>}
        ></Route>
        <Route element={<DashboardLayout></DashboardLayout>}>
          <Route
            path="/dashboard"
            element={<DashboardPage></DashboardPage>}
          ></Route>
          <Route
            path="/manage/products"
            element={<PostManage></PostManage>}
          ></Route>
          <Route
            path="/manage/user"
            element={<PostAddNew></PostAddNew>}
          ></Route>
          <Route
            path="/manage/orders"
            element={<PostUpdate></PostUpdate>}
          ></Route>
          
          <Route path="/profile" element={<UserProfile></UserProfile>}></Route>
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
