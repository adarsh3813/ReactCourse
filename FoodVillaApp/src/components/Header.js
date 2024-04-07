const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
    />
  </a>
);

const Header = () => (
  <div className="header">
    <Title></Title>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
