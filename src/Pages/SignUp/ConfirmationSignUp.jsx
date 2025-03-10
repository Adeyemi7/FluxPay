import { useState, useEffect } from "react";
import PinDots from "../../Components/UI/PinDots";
import NumericKeypad from "../../Components/UI/NumericKeypad";
import Button from "../../Components/UI/Button";
import { LiaUserSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import PageLoader from "../../Components/UI/PageLoader";

const ConfirmationSignUp = () => {

    const navigate = useNavigate();

    const [pin, setPin] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const maxLength = 6;

    const handleNumberClick = (num) => {
        if (pin.length < maxLength) {
          if (navigator.vibrate) navigator.vibrate(15);
          setPin((prev) => prev + num);
        }
      };
    
      const handleDelete = () => {
        if (navigator.vibrate) navigator.vibrate(20);
        setPin((prev) => prev.slice(0, -1));
      };
    
      const handleClear = () => {
        if (navigator.vibrate) navigator.vibrate([20, 50, 20]);
        setPin("");
      };
    
    
      const handleSubmit = () => {
        if (pin.length === maxLength) {
          if (navigator.vibrate) navigator.vibrate([30, 50, 30, 50, 30]);
        }
        setIsLoading(true);
        setTimeout(() => {
            navigate('/home');
        }
        , 2000);
      };

    useEffect(() => {
      const handleKeyDown = (e) => {
        if (/^[0-9]$/.test(e.key)) handleNumberClick(Number.parseInt(e.key, 10));
        else if (e.key === "Backspace" || e.key === "Delete") handleDelete();
        if (/^[0-9]$/.test(e.key) || e.key === "Backspace" || e.key === "Delete") e.preventDefault();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [pin]);


        return (
          <div className=" bg-[#F5F5F5] py-6 w-full max-w-[768px] min-h-screen">
            <div className=" w-[90%] mx-auto overflow-x-hidden ">
            <LiaUserSolid  size={60} className=" grid place-self-center mb-10 border-[#8B5E3C] border-[1px] rounded-full p-3 "/>
            <h1 className="text-2xl font-semibold mb-4 text-center text-[#8B5E3C]"> Confirm Password</h1>
            <PinDots pinLength={pin.length} maxLength={maxLength} />
            <NumericKeypad handleNumberClick={handleNumberClick} handleDelete={handleDelete} handleClear={handleClear}  />
            <Button
              name= { isLoading ? <PageLoader /> : "Submit"}
              buttonClassName={`w-full py-3 rounded-full mx-auto  font-medium transition-all mt-4 ${
                pin.length === maxLength ? "bg-[#8B5E3C] hover:bg-[#7B4E2C] active:bg-[#6B3E1C] text-white" : "bg-[#D0B8A8] opacity-50 cursor-not-allowed text-[#3A2E27]"
              }`}
              buttonOnClick={handleSubmit}
              disabled={pin.length !== maxLength} 
            />
            </div>
          </div>
      
  )
}

export default ConfirmationSignUp