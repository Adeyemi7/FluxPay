import PropTypes from "prop-types";

const PinDots = ({ pinLength, maxLength }) => {
  return (
    <div className="flex gap-3 mb-8 justify-center items-center">
      {Array.from({ length: maxLength }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-200 ${
            index < pinLength ? "bg-[#8B5E3C] scale-110" : "bg-[#D0B8A8]"
          }`}
          aria-hidden="true"
        ></div>
      ))}
    </div>
  );
};

PinDots.propTypes = {
  pinLength: PropTypes.number.isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default PinDots;