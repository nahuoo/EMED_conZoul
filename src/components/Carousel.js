import React from "react";

// reactstrap componentes
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

// componentes

const items = [
  {
    src: require("assets/img/slider-numak.jpg"),
    altText: "Diestro, analizador",
    caption: ""
  },
  {
    src: require("assets/img/slider-numak.jpg"),
    altText: "Diestro, analizador",
    caption: ""
  },
  {
    src: require("assets/img/slider-numak.jpg"),
    altText: "Diestro, analizador",
    caption: ""
  }
];

// función

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <Carousel
        className="justify-content-center"
        lg="90%"
        md="12"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {items.map(item => {
          return (
            <CarouselItem
              onExiting={onExiting}
              onExited={onExited}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} />
            </CarouselItem>
          );
        })}
        <a
          className="carousel-control-prev"
          data-slide="prev"
          onClick={e => {
            e.preventDefault();
            previous();
          }}
          role="button"
        >
          <i className="now-ui-icons arrows-1_minimal-left"></i>
        </a>
        <a
          className="carousel-control-next"
          data-slide="next"
          onClick={e => {
            e.preventDefault();
            next();
          }}
          role="button"
        >
          <i className="now-ui-icons arrows-1_minimal-right"></i>
        </a>
      </Carousel>
    </>
  );
}

export default CarouselSection;
