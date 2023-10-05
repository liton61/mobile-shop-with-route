import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="flex justify-between shadow-lg p-5">
                <h3 className="text-xl font-bold text-green-300">Mobile Shop</h3>
                <ul className="flex">
                    <li className="ml-5 mr-5 text-xl font-bold">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-300 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="ml-5 mr-5 text-xl font-bold">
                        <NavLink
                            to="/cart"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-300 underline" : ""
                            }
                        >
                            Cart
                        </NavLink>
                    </li>
                    <li className="ml-5 mr-5 text-xl font-bold">
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-300 underline" : ""
                            }
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;