declare module 'react-slick' {
  import { ComponentType } from 'react';

  interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    arrows?: boolean;
    customPaging?: (index: number) => JSX.Element;
    appendDots?: (dots: JSX.Element) => JSX.Element;
    [key: string]: any;
  } 

  

  const Slider: ComponentType<Settings>;

  export default Slider;
}