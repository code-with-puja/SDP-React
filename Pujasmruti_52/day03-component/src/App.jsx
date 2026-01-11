import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Header />

      <Card
        title="React Components"
        description="Components let you split the UI into reusable pieces."
      />

      <Card
        title="Component Composition"
        description="Using components inside other components."
      />

      <Footer />
    </div>
  );
}

export default App;
