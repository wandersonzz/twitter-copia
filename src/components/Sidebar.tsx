import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  FileText,
  Hash,
  House,
  MessengerLogo,
  Pencil,
  User,
} from "phosphor-react";
import logo from "../assets/logo-twitter.svg";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={logo} alt="Logo" />

      <nav className="main-navigation">
        <NavLink to="/">
          <House weight="fill" />
          <span>Home</span> 
        </NavLink>
        <NavLink to="/explore">
          <Hash />
          <span>Explore</span>
        </NavLink>
        <NavLink to="/notifications">
          <Bell />
          <span>Notifications</span>
        </NavLink>
        <NavLink to="/messages">
          <MessengerLogo />
          <span>Messages</span>
        </NavLink>
        <NavLink to="/bookmarks">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </NavLink>
        <NavLink to="/lists">
          <FileText />
          <span>Lists</span>
        </NavLink>
        <NavLink to="/profile">
          <User />
          <span>Profile</span>
        </NavLink>
        <NavLink to="/more">
          <DotsThreeCircle />
          <span>More</span>
        </NavLink>
      </nav>

      <button className="new-twitter">
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  );
}
