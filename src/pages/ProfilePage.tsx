import React from "react";
import ThemeSwitch from "../components/ThemeSwitch";

const ProfilePage = () => {
  return (
    <>
      <div className="offcanvas-header position-relative">
        <div className="vstack">
          <div className="hstack gap-3">
            <img
              className="rounded"
              src={myprofile}
              alt="Logo"
              width={"100px"}
              height={"100px"}
              // onClick={() => navigate("/myprofile")}
              // onClick={onProfileClick}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
            />
            <div className="vstack">
              <span className="fw-bold fs-4 text-uppercase">Thang Truong</span>
              <span className="fw-bold fs-6">FrontEnd Developer</span>
              <span className="fw-bold fs-6">thangtruong1808@gmail.com</span>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <span className="mx-3 fw-bold fs-5">Education</span>
      <ul>
        <li>Swinburne University of Technology</li>
      </ul>
      <span className="mx-3 fw-bold fs-5">Skills</span>
      <ul className="">
        <li>Responsive Websites</li>
        <li>JavaScript (ReactJS and VueJS)</li>
        <li>PHP and NodeJS</li>
        <li>SoftWare Development for Mobile - Kotlin</li>
        <li>AWS Architecture Cloud</li>
        <li>MySQL, SQL and MongoDB</li>
      </ul>
      <span className="mx-3 fw-bold fs-5">Favorites</span>
      <ul>
        <li>Swimming</li>
        <li>Badminton</li>
        <li>BBQ</li>
        <li>Camping</li>
      </ul>

      <ThemeSwitch />
    </>
  );
};

export default ProfilePage;
