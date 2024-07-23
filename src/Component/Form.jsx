
const Form = () => {
  return (
    <div className="h-[456px] w-[396px]">
      <div className="flex items-center bg-white rounded-[8px] shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1)] box-border mt-[40px] pt-[10px] pb-[24px] w-[396px] text-center">
        <form className="text-[12px] text-center">
          <div className="text-[12px] text-center pb-2">
            <div className="text-[17px] text-center inline-block m-auto py-[6px] w-[364px]">
              <input type="text" placeholder="Email or phone number" className="bg-[#FFFFFF] border border-[#dddfe2] leading-[16px] align-middle text-[17px] py-[14px] px-[16px] w-[363px] rounded-[6px] focus:outline-none focus:border focus:border-[#0866ff]" />
            </div>
            <div className="text-center inline-block m-auto py-[6px] text-[17px] w-[364px]">
              <input type="password" placeholder="Password" className="bg-[#FFFFFF] border border-[#dddfe2] leading-[16px] align-middle text-[17px] py-[14px] px-[16px] w-[363px] rounded-[6px] focus:outline-none focus:border focus:border-[#0866ff]" />
            </div>
          </div>
          <div className="text-[12px] text-center pt-[6px]">
            <button type="submit" className="cursor-pointer inline-block whitespace-nowrap box-border antialiased font-bold justify-center relative text-center align-middle transition-colors duration-200 ease-in-out bg-[#0866ff] text-[#fff] rounded-[6px] text-[20px] leading-[48px] px-[16px] w-[364px] hover:bg-[#2276fd]">
              Log In
            </button>
          </div>
          <div className="text-[12px] text-center mt-[16px]">
            <a href="" className="text-center cursor-pointer text-[#0866ff] text-[14px] font-medium hover:underline">Forgot password?</a>
          </div>
          <div className="text-[12px] flex items-center border-b border-[#dadde1] my-[20px] mx-[16px] text-center"></div>
          <div className="text-[12px] text-center pt-[6px]">
            <a href="#" role='"button' className="cursor-pointer inline-block whitespace-nowrap box-border antialiased font-bold justify-center relative text-center align-middle transition-colors duration-200 ease-in-out bg-[#42b72a] text-[#fff] border-none rounded-[6px] text-[17px] leading-[48px] py-0 px-[16px] hover:bg-[#21a606]">
              Create new account
            </a>
          </div>
        </form>
      </div>
      <div className="mt-[28px] text-center text-[#1c1e21] font-sans text-[14px] font-medium">
        <a href="" className="ltr leading-[1.34] text-center cursor-pointer text-inherit font-sans text-[14px] font-bold hover:underline">Create a Page</a>
        {" for a celebrity, brand or business."}
      </div>
    </div>
  )
}

export default Form