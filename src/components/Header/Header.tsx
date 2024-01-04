import { Link } from "react-router-dom";
import { AppRoute } from "../../constants";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes["header"]}>
      <Link to={AppRoute.Root} className={classes["header__link"]}>
        Main
      </Link>

      <Link to={AppRoute.Contacts} className={classes["header__link"]}>
        Contacts
      </Link>
      <Link to={AppRoute.About} className={classes["header__link"]}>
        About
      </Link>
      <Link to={AppRoute.Shop} className={classes["header__link"]}>
        Shop
      </Link>
      <Link to={AppRoute.Gallery} className={classes["header__link"]}>
        Gallery
      </Link>
    </header>
  );
};

export default Header;
