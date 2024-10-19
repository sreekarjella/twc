import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";
import Header from './header/Header';
import Home from './home/Home';

function App() {
  return (
    <div>
      <Helmet>
          <title>TWC</title>
      </Helmet>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
