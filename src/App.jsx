import './App.scss'
import {
  Routes,
  Route,
} from "react-router-dom";
import AutomaticBaching from './AutomaticBaching';
import WebWorkers from './WebWorkers';
import IntersectionObserver from './IntersectionObserver';
import HomePage from './HomePage'
import GeneralDocs from './GeneralDocs';
import Currying from './Currying';
import UseTransition from './UseTransition';
import UseSearchParams from './UseSearchParams';

const routes = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/automatic-batching',
    element: <AutomaticBaching />
  },
  {
    path: '/web-workers',
    element: <WebWorkers />
  },
  {
    path: '/intersection-observers',
    element: <IntersectionObserver />
  },
  {
    path: '/general',
    element: <GeneralDocs />
  },
  {
    path: '/currying',
    element: <Currying />
  },
  {
    path: '/usetransition',
    element: <UseTransition />
  },
  {
    path: '/use-search-param',
    element: <UseSearchParams />
  },
]
function App() {
  return <Routes>
    {
      routes.map((r, i) =>
        <Route key={i} path={r.path} element={r.element} />
      )
    }
  </Routes>
}

export default App
