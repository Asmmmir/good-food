import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Recipes } from "./components/Recipes/Recipes";
import { TakeAway } from "./components/TakeAway/TakeAway";
import { Testimonial } from "./components/Testimonial/Testimonial";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Recipes />
      <TakeAway />
      <Testimonial />
      <Footer />
    </>
  );
};

export default App;
