import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { PlanePage } from './pages/PlanePage';
import { paths } from './paths';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<HomePage />} />
        <Route path={`${paths.plane}/:id`} element={<PlanePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
