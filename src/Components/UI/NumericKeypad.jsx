import PropTypes from "prop-types";
import Button from "./Button";
import { FaDeleteLeft } from "react-icons/fa6";

const NumericKeypad = ({ handleNumberClick, handleDelete, handleClear }) => {
  const keys = [
    1, 2, 3, 
    4, 5, 6, 
    7, 8, 9, 
    "clear", 0, "delete"
  ];

  return (
    <div className="grid place-content-center mx-auto grid-cols-3 gap-3 mb-6 w-[80%] max-w-sm">
      {keys.map((key, index) => (
        <Button
          key={index}
          name={key === "clear" ? 'C'  : key === "delete" ? <FaDeleteLeft size={24} /> : key}
          buttonClassName="aspect-square w-full text-2xl font-medium rounded-full flex items-center justify-center bg-[#C0A896] hover:bg-[#B09886] active:bg-[#A08876] text-[#3A2E27] transition touch-manipulation"
          buttonOnClick={() => {
            if (key === "clear") handleClear();
            else if (key === "delete") handleDelete();
            else handleNumberClick(key);
          }}
        />
      ))}
    </div>
  );
};

NumericKeypad.propTypes = {
  handleNumberClick: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
};

export default NumericKeypad;
