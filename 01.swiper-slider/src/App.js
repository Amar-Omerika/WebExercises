/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import './App.css';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';

/**
 * @descriptionDisplays Displaying ImageSlider component and pass the Slider Data as a prop
 */
function App() {
  return <ImageSlider slides={SliderData} />;
}

export default App;
