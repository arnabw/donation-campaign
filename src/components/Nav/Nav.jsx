import {
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="lead"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="lead"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Donation
        </a>
      </Typography>
      <Typography
        as="li"
        variant="lead"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Statistics
        </a>
      </Typography>
    </ul>
  );
}

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="shadow-none border border-gray-300">
      <div className="flex items-center justify-between">
        <img
          className="object-cover max-w-40"
          src="https://i.postimg.cc/Xqs9LNQ4/Logo.png"
          alt="Donation Campaign"
        />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Nav;
