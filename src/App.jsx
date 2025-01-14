/* eslint-disable no-unused-vars */
import "./App.css";
import ActiveProjects from "./components/ActiveProjects";
import Header from "./components/Header";
import PageSwitch from "./components/PageSwitch";
import ProfilePannel from "./components/ProfilePannel";
import Homepage from "./pages/Homepage";
import Intro from "./pages/Intro";

function App() {
  return (
    <div className="background">
      <Header/>
      <div className="pt-16 flex justify-center gap-4">
        <ProfilePannel />
        <Homepage />
        <ActiveProjects />
      </div>
      <PageSwitch/>
    </div>
  );
}

export default App;
