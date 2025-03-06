import { useEffect } from 'react';
import FlexPay from '../../assets/Images/FlexPayy.gif'
import { useNavigate } from 'react-router-dom'

const DefaultStarterPage = () => {
    const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/first')
    }, 1000)
  }, [navigate])

  return (
    <div className="bg-[#F5F5F5] h-screen grid place-items-center w-full max-w-[768px]">
        <img src={FlexPay } alt="default starter page"/>
    </div>
  )
}

export default DefaultStarterPage