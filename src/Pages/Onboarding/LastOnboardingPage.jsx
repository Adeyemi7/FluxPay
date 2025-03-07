import LastOnboardingIcon from "../../Components/Icons/LastOnboardingIcon"
import NotSelectedIcon from "../../Components/Icons/NotSelectedIcon"
import SelectedOnboardingIcon from "../../Components/Icons/SelectedOnboardingIcon"
import Button from "../../Components/UI/Button"
import GoogleIcons from "../../Components/Icons/GoogleIcons"
import { useNavigate } from "react-router-dom"

const LastOnboardingPage = () => {

    const navigate = useNavigate();

    
    const handleback = () => {
        navigate('/first')
    }
    
    const handleSkipOne = () => {
        navigate ('/second')
    }
    
    const handleSkipMore = () => {
        navigate ('/third')
    }
    
    const handleLogin = () => {
        navigate('/Login')
    }


  return (
    <div className="bg-[#F5F5F5] py-14 w-full max-w-[768px] min-h-screen">
        <div className="grid place-items-center overflow-x-hidden ">
            <LastOnboardingIcon />
        </div>

        <div className="w-[90%] mx-auto mt-16">
            <p className=" text-[#8B5E3C] font-bold text-[26px] text-center">
            Smart Spending, Effortless Control
            </p>

            <p className=" text-[#8B5E3C] font-normal text-[12px] text-center mt-4">
            Your money, your story. Get personalized spending insights every month, helping you save smarter and spend better.
            </p>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-10 w-[20%] mx-auto">
            <NotSelectedIcon onClick={handleback} />
            <NotSelectedIcon onClick={handleSkipOne} />
            <SelectedOnboardingIcon onClick={handleSkipMore} />
        </div>

        <div className="mt-6 w-[90%] mx-auto grid grid-cols-1 gap-4 mb-6">

            <Button
             type='submit'
             name='Log in with email address'
             buttonClassName='p-3 mb-4 w-full rounded-md font-bold text-white bg-[#8B5E3C] transition delay-150 hover:bg-[#F4EDE4] hover:text-[#8B5E3C]'
             buttonOnClick={handleLogin}
             />

<Button
             type='submit'
             name='Continue with Google'
             icon={<GoogleIcons />}
             buttonClassName='p-3 mb-4 w-full rounded-md font-bold text-[#8B5E3C] bg-[#F4EDE4] transition delay-150 hover:bg-[#8B5E3C] hover:text-white'
             buttonOnClick={handleLogin}
             />

        </div>

        <div className="w-[90%] mx-auto mt-6 text-[#8B5E3C] font-normal text-[12px] text-center">
            <p>
                <span> Don’t have an account? </span>
                <span> {''} Sign up </span>
            </p>
        </div>

    </div>
  )
}

export default LastOnboardingPage