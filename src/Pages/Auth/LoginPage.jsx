import BackwardArrowIcon from "../../Components/Icons/BackwardArrowIcon"
import InputField from "../../Components/UI/InputField"
import { useNavigate } from "react-router-dom"
import { useForm, Controller } from 'react-hook-form';
// import { useState } from 'react';

const LoginPage = () => {

    const navigate = useNavigate();

    const handlePreviousPage = () => {
        navigate('/third')
    }

    const {
        control,
        handleSubmit,
        watch,
        reset,
        // formState: { errors, isValid },
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            username: '',
            email: '',
        },
    });

    // const [isLoading, setIsLoading] = useState(false);

    const watchEmail = watch('email');

    // const isFormComplete = watchEmail;

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log('Form submitted:', JSON.stringify(data));
        reset();
    };


    const handleNavigationDashboard = () => {
        // if (isFormComplete) setIsLoading(true);
        setTimeout(() => {
            // setIsLoading(false);
            navigate('/');
        }, 2000);
    };
  return (
    <div className="bg-[#F5F5F5] py-14 w-full max-w-[768px] min-h-screen">
        <div className=" bg-[#8B5E3C] p-2 rounded-md w-[10%] flex float-start  ml-2 text-center" onClick={handlePreviousPage}>
            <BackwardArrowIcon  />
        </div>

        <div className="grid place-items-start w-[90%] mx-auto  text-left overflow-x-hidden mt-14">
            <h1 className="text-[#8B5E3C] font-bold text-[26px] text-center mt-4">Welcome Back!</h1>
            <p className=" text-[#6F6F6F] font-normal text-base text-center ">Log in to your account to continue</p>
        </div>

        <form
                    id='login'
                    className=" w-[90%] mx-auto mt-16 "
                    onSubmit={handleSubmit(onSubmit, handleNavigationDashboard)}
                >
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: 'Admin email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Invalid email address',
                            },
                        }}
                        render={({ field }) => (
                            <InputField
                                label={'Email Address'}
                                type="text"
                                placeholder=" vic_ayo-fluxpay@gmail.com"
                                className={`block outline-none mt-2 bg-[#ffff] text-[#6F6F6F]  box-border  w-full p-2 border-b-2   ${
                                    watchEmail
                                        ? 'border-b-2 border-[#8B5E3C]'
                                        : 'border-red-500'
                                }`}
                                error={
                                    errors.email ? errors.email.message : null
                                }
                                {...field}
                            />
                        )}
                    />
         </form>           

    </div>
  )
}

export default LoginPage