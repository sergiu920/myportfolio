import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
    </>
  );
}