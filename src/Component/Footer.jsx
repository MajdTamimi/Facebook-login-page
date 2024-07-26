const footer = () => {
  const languages = [
    "English (US)", "العربية", "Français (France)", "Deutsch", "Русский",
    "עברית", "Bahasa Indonesia", "Español", "Português (Brasil)", "Italiano", "हिन्दी"
  ]
  const links = [
    "Sign Up", "Log In", "Messenger", "Facebook Lite", "Video", "Places", "Games",
    "Marketplace", "Meta Pay", "Meta Store", "Meta Quest", "Meta AI", "Instagram",
    "Threads", "Fundraisers", "Services", "Voting Information Center", "Privacy Policy",
    "Privacy Center", "Groups", "About", "Create ad", "Create Page", "Developers",
    "Careers", "Cookies", "Ad choices", "Terms", "Help", "Contact Uploading & Non-UsersSettings"
  ]

  return (
    <footer className="text-[#1c1e21] pl-10 lg:text-start pt-8 lg:pt-7">
      <div className="max-w-[980px] mx-auto w-[1513px] h-[157px]">
        <div className="text-[12px] font-inherit w-[684px] lg:w-[980px] h-[28px]">
          {
            languages.map((language, index) => (
              <a key={index} href="#" className="text-[#8A8d91] font-custom text-[12px] font-inherit hover:underline mr-2">
                {language}
              </a>
            ))
          }
          <a role="button" className="inline-block cursor-pointer list-none border border-[#ccd0d5] rounded-[2px] box-border font-bold antialiased justify-center px-[8px] text-center text-[#8a8d91] bg-[#f5f6f7] duration-200 hover:bg-[#ebecec]" rel="dialog" href="#" title="Show more languages">
            <i className="inline-block cursor-pointer antialiased font-bold text-center leading-[18px] text-[#8a8d91] whitespace-nowrap relative bottom-[1px] align-middle icon-1"></i>
          </a>
        </div>
        <hr className="pb-2 lg:mt-1 mt-4" />
        <div className="text-[12px] font-inherit w-[650px] lg:w-[950px] h-[58px] flex flex-wrap">
          {links.map((link, index) => {
            if (index === 26) {
              return (
                <>
                  <a key={index} href="#" className="text-[#8A8d91] font-custom text-[12px] font-inherit hover:underline">
                    {link}
                  </a>
                  <a href="#" className="inline-block text-[12px] leading-[1.6] cursor-pointer whitespace-nowrap text-[#8a8d91] relative top-[1px] align-middle mr-4 icon-2"></a>
                </>
              )
            }
            return (
              <a key={index} href="#" className="text-[#8A8d91] font-custom text-[12px] font-inherit hover:underline mr-4">
                {link}
              </a>
            )
          })}
        </div>
        <br />
        <div className="text-[#8A8d91] font-custom text-[12px] font-inherit">
          <p>Meta &copy; 2024</p>
        </div>
      </div>
    </footer >
  )
}

export default footer