interface CarouselItemProps {
  slide: string;
}

const CarouselItem = ({ slide }: CarouselItemProps) => {
  return (
    <div className="carousel__item">
      <img src={slide} alt="" />
    </div>
  );
};
export default CarouselItem;
