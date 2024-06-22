import { Route, Routes } from "react-router-dom";
import { useDentistContext } from "./Context/Context";
import { routes } from "./utils/routes";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import NotFound from "./Routes/NotFound";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path={routes.home} element={<Layout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.detail} element={<Detail />} />
          <Route path={routes.favs} element={<Favs />} />
          <Route path={routes.notFound} element={<NotFound />} />
          <Route />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
