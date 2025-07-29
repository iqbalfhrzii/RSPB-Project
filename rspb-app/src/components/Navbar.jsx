import React from "react";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Daftar", href: "#daftar" },
  { label: "History", href: "#history" },
  { label: "Cek Status", href: "#cek-status" },
];

const Navbar = () => (
  <nav className="w-[1440px] h-[123px] relative bg-white">
    <header className="flex w-[1440px] h-[123px] items-center justify-center gap-[43.85px] px-[100.23px] py-[11.14px] absolute top-0 left-0 bg-white shadow-[0px_2.78px_5.57px_#abbed166]">
      <div className="flex h-[83px] items-center justify-end gap-[22.27px] relative flex-1 grow">
        <nav
          className="flex w-[580px] h-[72px] items-center justify-center gap-[16.71px] relative"
          role="navigation"
          aria-label="Main navigation"
        >
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center justify-center w-[110px] h-[40px] font-medium text-[#4d4d4d] text-[15px] text-center tracking-[0] leading-[16.7px] whitespace-nowrap hover:text-[#8fc643] transition-colors duration-200 rounded"
              style={{ fontFamily: "'Inter', Helvetica" }}
              aria-label={`Navigate to ${item.label}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="flex items-center justify-center w-[161px] h-[40px] font-medium text-white text-[15px] text-center tracking-[0] leading-[16.7px] bg-[#8fc643] rounded hover:bg-[#7db538] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#8fc643] focus:ring-offset-2"
          type="button"
          aria-label="Login to your account"
          style={{ fontFamily: "'Inter', Helvetica" }}
        >
          Login
        </button>
      </div>
    </header>
    <img
      className="absolute w-[154px] h-[59px] top-8 left-[61px] object-cover"
      alt="Company logo"
      src="/IHC.svg"
    />
  </nav>
);

export default Navbar;