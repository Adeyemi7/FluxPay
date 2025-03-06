import LastOnboardingIcon from "../../Components/Icons/LastOnboardingIcon"
import NotSelectedIcon from "../../Components/Icons/NotSelectedIcon"
import SelectedOnboardingIcon from "../../Components/Icons/SelectedOnboardingIcon"
import Button from "../../Components/UI/Button"

const LastOnboardingPage = () => {
  return (
    <div className="bg-[#F5F5F5] py-14 w-full max-w-[768px]">
        <div className="grid place-items-center ">
            <LastOnboardingIcon />
        </div>

        <div className="w-[90%] mx-auto mt-16">
            <p className=" text-[#8B5E3C] font-bold text-[26px] text-center">
            Instant payments made easily and securely
            </p>

            <p className=" text-[#8B5E3C] font-normal text-[12px] text-center mt-4">
            Quick, card-free, secure and efficient transactions
            </p>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-10 w-[20%] mx-auto">
            <NotSelectedIcon />
            <NotSelectedIcon />
            <SelectedOnboardingIcon />
        </div>

        <div className="mt-6 w-[90%] mx-auto grid grid-cols-1 gap-4 mb-6">

            <Button
             type='submit'
             name='Continue'
             buttonClassName='p-3 mb-4 w-full rounded-md font-bold text-white bg-[#8B5E3C] transition delay-150 hover:bg-[#F4EDE4] hover:text-[#8B5E3C]'
            />

<Button
             type='submit'
             name='Skip'
             buttonClassName='p-3 mb-4 w-full rounded-md font-bold text-[#8B5E3C] bg-[#F4EDE4] transition delay-150 hover:bg-[#8B5E3C] hover:text-white'
            />

        </div>

        <div className="w-[90%] mx-auto mt-6 text-[#8B5E3C] font-normal text-[12px] text-center">
            <p>
                <span> Don’t have an account? </span>
                <span> Sign up </span>
            </p>
        </div>

    </div>
  )
}

export default LastOnboardingPage