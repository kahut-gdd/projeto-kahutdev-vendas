import ImgDsDark from 'assets/img/ImgDsDark.svg';

const NavBar = () => {
  return (
    <div className="morpheus-den-gradient color-block d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom shadow-sm">
      <div className="container">
        <nav className="my-2 my-md-0 mr-md-3">
          <img src={ImgDsDark} alt="kahut-dev" width="220" />
        </nav>
      </div>
    </div>
  );
}

export default NavBar;