import PropTypes from "prop-types";
import Button from "./Button";

const NumericKeypad = ({ handleNumberClick, handleDelete, handleClear }) => {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, "clear", 0, "delete"];

  return (
    <div className="grid place-content-center mx-auto grid-cols-3 gap-3 mb-6 w-full max-w-sm">
      {keys.map((num, index) => (
        <Button
          key={index}
          name={num === "clear" ? "Clear" : num === "delete" ? "Delete" : num} // Ensure "Delete" is shown as text
          buttonClassName="aspect-square w-full text-2xl font-medium rounded-full flex items-center justify-center bg-[#C0A896] hover:bg-[#B09886] active:bg-[#A08876] text-[#3A2E27] transition touch-manipulation"
          buttonOnClick={() =>
            num === "clear" ? handleClear() : num === "delete" ? handleDelete() : handleNumberClick(num)
          }
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
