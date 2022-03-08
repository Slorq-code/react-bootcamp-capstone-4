import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Header from "./Components/Header/Header.js"
import Content from "./Components/Content/Content.js"
import Footer from "./Components/Footer/Footer.js"

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
       <Header/>
       <Content/>
       <Footer/>
    </div>
  );
}

export default App;
