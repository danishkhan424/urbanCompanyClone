import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";



export function SampleNextArrow(props) {
  const { className, style, onClick, currentSlide, slideCount, slidesToShow } =
    props;
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div
          className={className}
          style={{ ...style, color: "black", zIndex: 1 }}
        >
          <ArrowForwardIcon
            className="icon"
            style={{ right: "15px" }}
            onClick={onClick}
          />
        </div>
      )}
    </>
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div
          className={className}
          style={{ ...style, color: "black", zIndex: 1 }}
        >
          <ArrowBackIcon
            className="icon"
            style={{ right: "-35px" }}
            onClick={onClick}
          />
        </div>
      )}
    </>
  );
}
