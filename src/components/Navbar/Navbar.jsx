import React from "react";
import "../../assets/css/navbar.css";
import bg1 from "../../assets/image/BACK-NAV.jpg";
import bg2 from "../../assets/image/BACK-NAV-2.jpg";
import bg3 from "../../assets/image/BACK-NAV-3.jpg";
import bg4 from "../../assets/image/BACK-NAV-4.jpg";
import Logo from "../../assets/logo/LOGO DISKOM.png";

// styleCarousel

const Navbar = () => {
  return (
    <>
      <div>
        <div className="fixed-top">
          <div className=" bg-navbar">
            <div className="container border  d-flex justify-content-between align-items-center ">
              <a class="navbar-brand" href="/">
                <img
                  src={Logo}
                  alt="Logo"
                  width="100%"
                  height="65px"
                  class="d-inline-block align-text-top"
                />
              </a>

              <div className=" d-flex align-items-center gap-4">
                <div className="icon-dark"></div>
                <div className="text-light language">ID | EN</div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg second-navbar">
            <div className="border container content-navbar">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to={3}
              aria-label="Slide 4"
            />
          </div>
          <div
            className="carousel-inner carousel-img-size"
            data-bs-interval={1000}
          >
            <div className="carousel-item active">
              <img src={bg1} className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item  ">
              <img src={bg2} className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item  ">
              <img src={bg3} className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item  ">
              <img src={bg4} className="d-block w-100 " alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
