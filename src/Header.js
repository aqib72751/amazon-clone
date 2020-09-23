import { Search, ShoppingBasket } from "@material-ui/icons";
import { auth } from "./firebase";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "./StateProvider";


function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut().then(function () {
        console.log('Signed Out');
      }, function (error) {
        console.error('Sign Out Error', error);
      });
    }
  }
  return (
    <div className="header">
      <Link to="/" >
        <img
          className="header_logo"
          alt="logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        ></img>
      </Link>
      <div className="header_search">
        <input className="header_searchInput"></input>
        <Search className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">hello {user?.email}</span>
            <span className="header_optionLineTwo">{user ? 'sign out' : 'sign in'}</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">returns</span>
          <span className="header_optionLineTwo">orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">you</span>
          <span className="header_optionLineTwo">prime</span>
        </div>
        <Link to='/checkout'>
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optionLineTwo header_basketCount" >{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
