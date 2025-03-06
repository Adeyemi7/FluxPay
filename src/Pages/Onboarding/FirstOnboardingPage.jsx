import FirstOnboardingIcon from "../../Components/Icons/FirstOnboardingIcon"
import NotSelectedIcon from "../../Components/Icons/NotSelectedIcon"
import SelectedOnboardingIcon from "../../Components/Icons/SelectedOnboardingIcon"
import Button from "../../Components/UI/Button"
import { useNavigate } from "react-router-dom"

const FirstOnboardingPage = () => {
    const navigate = useNavigate();

    const handleContinue = () => {  
        navigate('/second')
    }

    const handleSkip = () => {
        navigate('/second')
    }

  return (
    <div className=" bg-[#F5F5F5] py-14 max-w-[768px]">
        <div className="grid place-items-center overflow-hidden w-[90%] mx-auto">
        <FirstOnboardingIcon />
        </div>

        <div className="w-[90%] mx-auto mt-16">
            <p className=" text-[#8B5E3C] font-bold text-[26px] text-center">
            Experience seamless financial Payment
            </p>

            <p className=" text-[#8B5E3C] font-normal text-[12px] text-center mt-4">
            QR cod payment method in one secure platform.
            </p>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-10 w-[20%] mx-auto">
            <SelectedOnboardingIcon />
            <NotSelectedIcon />
            <NotSelectedIcon />
        </div>

        <div className="mt-6 w-[90%] mx-auto grid grid-cols-2 gap-4 mb-6">

            <Button
             type='submit'
             name='Continue'
             buttonClassName='p-3 mb-4 w-full rounded-md font-bold text-white bg-[#8B5E3C] transition delay-150 hover:bg-[#F4EDE4] hover:text-[#8B5E3C]'
             buttonOnClick={handleContinue}
            />

<Button
             type='submit'
             name='Skip'
             buttonClassName='p-3 mb-4 w-full rounded-md font-bold text-[#8B5E3C] bg-[#F4EDE4] transition delay-150 hover:bg-[#8B5E3C] hover:text-white'
             buttonOnClick={handleSkip}
            />

        </div>

    </div>
  )
}

export default FirstOnboardingPage