import BackwardArrowIcon from "../../Components/Icons/BackwardArrowIcon"
import { useNavigate } from "react-router-dom"
import { useForm, Controller } from 'react-hook-form';
import PasswordInputField from "../../Components/UI/PasswordInputField";
import Button from '../../Components/UI/Button'
import PageLoader from "../../Components/UI/PageLoader";
import { useState } from 'react';

const PasswordSignUp = () => {
    const navigate = useNavigate();
    
    const handlePreviousPage = () => {
        navigate('/SignUp')
    }
    
    const {
        control,
        handleSubmit,
        watch,
        reset,
        // formState: { errors, isValid },
        formState: { errors, isValid },
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            password: '',
        },
    });
    
    const [isLoading, setIsLoading] = useState(false);
    
    const watchPassword = watch ('password')
    
    const isFormComplete = watchPassword;
    
    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log('Form submitted:', JSON.stringify(data));
        reset();
    };
    
    
    const handleNavigationDashboard = () => {
        if (isFormComplete) setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate('/home');
        }, 2000);
    };
  return (
    <div className="bg-[#F5F5F5] py-14 w-full max-w-[768px] min-h-screen">
        <div className=" bg-[#8B5E3C] p-2 rounded-md w-[10%] flex float-start  ml-2 text-center" onClick={handlePreviousPage}>
            <BackwardArrowIcon  />
        </div>

        <div className="grid place-items-start w-[90%] mx-auto  text-left overflow-x-hidden mt-14">
            <h1 className="text-[#8B5E3C] font-bold text-[26px] text-center mt-4">Welcome to FluxPay!</h1>
            <p className=" text-[#6F6F6F] font-normal text-base text-center ">Sign Up for seamless payment process </p>
        </div>

        <form
                    id='login'
                    className=" w-[90%] mx-auto mt-16 "
                    onSubmit={handleSubmit(onSubmit, handleNavigationDashboard)}
                >

<Controller
                        name="password"
                        control={control}
                        rules={{
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Create a secured Password, Minimum 8 characters',
                            },
                            pattern: {
                                value: /^(?=.*[!@#$%^&*])/,
                                message: 'Password must contain at least one special character',
                            },
                        }}
                        render={({ field }) => (
                            <PasswordInputField
                                label={'Password'}
                                type="password"
                                placeholder="Enter your password"
                                className={`block outline-none mt-2 bg-[#ffff] text-[#6F6F6F]   box-border  w-full p-2 border-b-2 ${
                                    watchPassword ? 'border-b-2 border-[#8B5E3C]' : 'border-red-500'
                                }`}
                                error={errors.password?.message}
                                {...field}
                            />
                        )}
                    />

                    <p className="font-bold text-[#8B5E3C] text-right  text-base block mb-2 ">
                        Forget Password
                    </p>


                    

<Button
                        type="submit"
                        name={
                            isLoading ? (
                                <PageLoader />
                            ) : isFormComplete && isValid ? (
                                'Proceed'
                            ) : (
                                'Fill the inputs'
                            )
                        }
                        buttonClassName={`p-3 w-full mt-28 rounded-full font-bold text-white ${
                            isFormComplete && isValid
                                ? 'bg-[#8B5E3C] hover:bg-[#8B5E3C]'
                                : 'bg-[#6F6F6F] cursor-not-allowed'
                        }`}
                        disabled={!isFormComplete || !isValid}
                        buttonOnClick={handleNavigationDashboard}
                    />
         </form>           

    </div>
  )
}

export default PasswordSignUp