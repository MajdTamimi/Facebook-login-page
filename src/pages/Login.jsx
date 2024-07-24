import Form from "../component/Form"
import Footer from "../component/Footer"

const login = () => {
  return (
    <>
    <div>
      <div className="bg-[#f0f2f5] flex flex-col lg:flex-row min-w-[500px] pb-[112px] pt-8 lg:pt-[72px] lg:w-[1512px] lg:h-[710px] justify-center lg:gap-20 lg:items-start items-center">
        <div className="flex flex-col items-center lg:items-start">
          <div className="text-center text-[12px] pb-[20px] lg:pt-[112px]">
            <img className="w-[380px] text-[12px] h-[106px] my-[-20px] lg:m-[-28px] font-sfPro" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook" />
          </div>
          <h2 className="lg:text-left text-center text-[#1c1e21] text-[25px] lg:text-[28px] lg:w-[500px] w-[400px] lg:h-[84px] lg:pb-[20px] leading-[1] font-sfPro">Connect with friends and the world around you on Facebook.</h2>
        </div>
        <Form />
      </div>
    </div>
    <Footer /> 
    </>
  )
}
export default login