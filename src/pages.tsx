import { Link, useLocation, Outlet } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <div>
      <h1>Company WebSite</h1>
      <nav>
        <Link to="about">About</Link>
        <Link to="events">Events</Link>
        <Link to="products">Products</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  );
};
export const About: React.FC = () => {
  return (
    <div>
      <h1>About</h1>
      <Outlet />
    </div>
  );
};
export const Services: React.FC = () => {
  return (
    <div>
      <h1>Services</h1>
    </div>
  );
};
export const History: React.FC = () => {
  return (
    <div>
      <h1>History</h1>
    </div>
  );
};
export const Location: React.FC = () => {
  return (
    <div>
      <h1>Location</h1>
    </div>
  );
};
export const Events: React.FC = () => {
  return (
    <div>
      <h1>Events</h1>
    </div>
  );
};
export const Products: React.FC = () => {
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};
export const Contact: React.FC = () => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};
export const Whoops404: React.FC = () => {
  let location = useLocation();
  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
};
