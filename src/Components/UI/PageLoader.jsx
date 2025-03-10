const PageLoader = (props) => {
    return (
        // <div className="flex justify-center items-center ">
        //     <p className="w-6 aspect-square rounded-full border-8 border-[#bababa] border-r-[#d0940e] flex self-center  animate-spin-slow sm:w-8"></p>
        // </div>
        <div
        className={`inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] `}
        role="status"
        {...props}
      >
      </div> 
    );
};

export default PageLoader;
PageLoader;
