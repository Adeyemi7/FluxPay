import NotSelectedIcon from "../../Components/Icons/NotSelectedIcon"
import SecondOnboardingIcon from "../../Components/Icons/SecondOnboardingIcon"
import SelectedOnboardingIcon from "../../Components/Icons/SelectedOnboardingIcon"
import Button from "../../Components/UI/Button"
import { useNavigate } from "react-router-dom"


const SecondOnboardingPage = () => {
    const navigate = useNavigate();

    const handleContinue = () => {  
        navigate('/third')
    }

    const handleSkip = () => {
        navigate('/third')
    }


    const handleback = () => {
        navigate('/first')
    }

    const handleSkipOne = () => {
        navigate ('/second')
    }

    const handleSkipMore = () => {
        navigate ('/third')
    }

  return (
    <div className="bg-[#F5F5F5] py-14 w-full max-w-[768px] min-h-screen">
        <div className=" grid place-content-center">
            <SecondOnboardingIcon />
        </div>

        <div className="w-[90%] mx-auto mt-16">
            <p className=" text-[#8B5E3C] font-bold text-[26px] text-center">
            Social Finance, Redefined
            </p>

            <p className=" text-[#8B5E3C] font-normal text-[12px] text-center mt-4">
            Money moves better with friends. Split bills, track soending, and even request a friend's help when you're short,because finances should be as connected as your life.
            </p>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-10 w-[20%] mx-auto">
            <NotSelectedIcon onClick={handleback} />
            <SelectedOnboardingIcon onClick={handleSkipOne} />
            <NotSelectedIcon onClick={handleSkipMore} />
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

export default SecondOnboardingPage