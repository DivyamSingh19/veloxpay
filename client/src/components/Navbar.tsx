import { ChevronLeft, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();
  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Profile", slug: "/profile", active: true },
    { name: "Pay", slug: "/pay", active: true },
    { name: "About us", slug: "/about", active: true },
    { name: "Login", slug: "/login", active: true },
    { name: "Signup", slug: "/signup", active: true },
  ];
  useEffect(() => {
    document.body.style.overflowX = "hidden";

    return () => (document.body.style.overflowX = "auto");
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between font-medium w-full pt-4 absolute top-0 left-0 px-4">
        <Link to={"/"} className="text-3xl text-gray-800 font-medium">
          VeloxPay
        </Link>

        <div className="hidden md:block">
          <div className="hidden md:flex gap-5 text-white bg-blur shadow-lg border pt-3 px-5 py-5 pb-3 rounded-2xl items-center cursor-pointer">
            <ul className="flex gap-5">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="inline-block text-black px-6 py-2 duration-200 hover:bg-white hover:text-black rounded-full cursor-pointer"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
            </ul>
            {/* Logout functionality */}
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <Menu
            onClick={() => setVisible(true)}
            className="w-6 h-6 cursor-pointer text-black hover:text-gray-400 md:hidden"
          />
        </div>
        <div
          className={`fixed top-0 h-screen w-full bg-white transition-transform transform ${
            visible ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex flex-col text-black h-full">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-4 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 text-gray-500" />
              <p>Back</p>
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="overflow-y-auto">
                {navItems.map(
                  (item) =>
                    item.active && (
                      <NavLink
                        key={item.name}
                        onClick={() => setVisible(false)}
                        className={`py-4 pl-6 flex items-center justify-center`}
                        to={item.slug}
                      >
                        {item.name}
                      </NavLink>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
