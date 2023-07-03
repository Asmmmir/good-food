import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Recipes } from "./components/Recipes/Recipes";
import { TakeAway } from "./components/TakeAway/TakeAway";
import { Testimonial } from "./components/Testimonial/Testimonial";
import './general.scss'

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Recipes />
      <TakeAway />
      <Testimonial />
    </>
  );
};

export default App;
