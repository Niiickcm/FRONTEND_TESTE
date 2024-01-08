import Todo from "./components/Todo";
import ImageDesktop from "./images/bg-desktop.jpg";
import ImageMobile from "./images/bg-mobile.jpg";

function App() {
  return (
    <div className="relative w-full min-h-screen bg-top bg-no-repeat bg-contain bg-bg-dark">
      {/* desktop */}
      <img
        src={ImageDesktop}
        alt="image light"
        className="absolute z-0 hidden object-cover w-full opacity-100 sm:block"
        style={{ height: "300px" }}
      />
      {/* mobile */}
      <img
        src={ImageMobile}
        alt="image light"
        className="absolute z-0 object-cover w-full opacity-100 sm:hidden"
        style={{ height: "200px" }}
      />

      <Todo />
    </div>
  );
}

export default App;
