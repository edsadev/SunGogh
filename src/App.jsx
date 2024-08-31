import "./App.css";
import { Hero, Art } from "./components";
import { MainLayout } from "./layouts";

function App() {
  return (
    <MainLayout>
      <Hero />
      <Art />
    </MainLayout>
  );
}

export default App;
