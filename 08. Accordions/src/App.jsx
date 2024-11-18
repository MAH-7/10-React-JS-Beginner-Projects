import Accordions from "./components/Accordions";
import { accordionData } from "./utils/content";

const App = () => {
  return <div className="container">
    {accordionData.map(({title, content}, index) => (
      <Accordions key={index} title={title} content={content}/>
    ))}
  </div>;
};
export default App;
