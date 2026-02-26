import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";
import Username from "../features/user/Username.jsx";

function Header() {
  return (
    <header className="font-pizza flex items-center justify-between border-b border-stone-200 bg-teal-400 px-4 py-3 uppercase sm:px-6">
      <Link to={"/"} className="tracking-widest">
        Quick Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
