function Header() {
  return (
    <div className="heading">
      <img
        className="images"
        src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png"
        height="100px"
        width="100px"
      />
      <div className="navbar">
        <button className="but">Men</button>
        <button className="but">Women</button>
        <button className="but">Kids</button>
        <button className="but">Home and Living</button>
        <button className="but">Beauty</button>
        <button className="but">Studio</button>
      </div>
      <input
        className="searchbar"
        placeholder="Search for products brands and more"
      ></input>
      <div className="profile">
        <button className="but">Profiles</button>
        <button className="but">Wishlists</button>
        <button className="but">Bag</button>
      </div>
    </div>
  );
}

export default Header;