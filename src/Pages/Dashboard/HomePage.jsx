import { MdAccountBalanceWallet } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FiCopy } from "react-icons/fi";

const userData =  
  {
    id: 1,
    name: "MightyVic",
    accountNo: "9038614523",
    accountBalance: "$50,000",
  }


const HomePage = () => {
  const user = userData;

  return (
    <div className="bg-[#F5F5F5] w-full max-w-[768px] min-h-screen text-[#261000]">
      <div className="w-[100%] mx-auto block pb-[1000px]">
        <div className=" flex items-center justify-between gap-3 bg-[] p-2 border-[1px] w-full border-[#8B5E3C] fixed z-50 top-0">
              <div className=" bg-[#F4EDE4] text-[#8B5E3C]  w-16 h-16 grid place-items-center text-centre border-[#6F6F6F] rounded-full border-[2px] text-lg font-bold">
                {user.name.charAt(0)}
              </div>

              <div className=" ">
                <p>
                {'Hello,'}{user.name}
                </p>
                <p className=" flex justify-center items-center gap-2">
                  <p>
                  {user.accountNo} {''}
                  </p>
                  <FiCopy size={20} />
                </p>
              </div>

              <div className=" grid place-items-center grid-rows-2 gap-2">
                <p className=" grid place-self-end">
                <IoNotifications  size={20} className="fill-[#8B5E3C] "/>
                </p>
                <p className=" flex justify-center items-center">
                  <MdAccountBalanceWallet size={25} className="fill-[#8B5E3C]" />
                  {user.accountBalance} 
                </p>
              </div>
        </div>

        

        <div className="  items-center justify-evenly gap-3 bg-[] p-4 border-[1px] w-full border-[#8B5E3C] mt-28 hidden">
        </div>
      </div>
    </div>  
  )
}

export default HomePage