import Form from "../component/Form"

const login = () => {
  return (
    <div>
      <div className="bg-[#f0f2f5] flex min-w-[500px] pb-[112px] pt-[72px] w-[1512px] h-[710px] justify-center gap-20 items-start">
        <div className="">
          <div className="text-center text-[12px] pb-[20px] pt-[112px]">
            <img className="text-center w-[321px] text-[12px] h-[106px] m-[-28px] font-sfPro" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook" />
          </div>
          <h2 className="text-left text-[#1c1e21] font-normal text-[28px] w-[500px] h-[84px] pb-[20px] leading-[1] font-sfPro">Connect with friends and the world around you on Facebook.</h2>
        </div>
        <Form />
      </div>
    </div>
  )
}
export default login