import { Component } from "react";
import "./Styles.css";
import Slider from "react-slick"

const images = [
  {
    id: "1",
    name: "Background 1",
    alt: "",
    url:"https://image.shutterstock.com/image-photo/old-brick-black-color-wall-260nw-1605128917.jpg"
  },
  {
    id: "2",
    name: "Background 2",
    alt: "",
    url:"https://images.pexels.com/photos/1022692/pexels-photo-1022692.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    id: "3",
    name: "Background 3",
    alt: "",
    url:"https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000"
  },
  {
    id: "4",
    name: "Background 4",
    alt: "",
    url:"https://media.istockphoto.com/videos/colored-smoke-on-a-dark-background-blue-and-red-light-with-smoke-video-id1341408852?b=1&k=20&m=1341408852&s=640x640&h=C6ymXpr_Jn6-WqQmHHuS8z6TGBtkWDQ9x6tFs_hsBjs="
  }
];

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides"
    };

    return (
      <Slider {...settings}>
        {images.map((image) => {
          return (
            <div className="wrapper" key={image.id}>
              <img className="sliderImg" src={image.url} alt={image.alt} />
              <p className="imgTitle">{image.name}</p>
            </div>
          );
        })}
      </Slider>
    );
  }
}
