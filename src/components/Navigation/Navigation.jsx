import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'constants';
import { SideNavigation } from 'components';
import "./Navigation.css";
const Navigation = () => {
  const [sideNavigationView, setSideNavigationView] = useState(false);
  const toggleSideNavigation = () => {
    setSideNavigationView(prevValue => !prevValue);
    console.log(sideNavigationView);

  }
  return (
    <div className={`${sideNavigationView ? "open" : ""}`}>
      <header className='top-navigation-container gentle-flex flex-space-between-align-center py-4 px-8 pos-relative'>
        <div className="brand-container fw-600 fs-1-5">
          <button className='nav-btn mr-4 text-cursor-pointer fw-500 p-0' onClick={toggleSideNavigation}>
            <Menu />
          </button>
          <Link className='redirect-to-home fw-700 link-none' to="/noteshome">
            <span>NOTE</span> IT
          </Link>
        </div>
        <div className="action-container gentle-flex-gap flex-align-center">
          <button className="create-note-btn btn btn-primary" >
            CREATE NOTE
          </button>
        </div>
      </header>
      <SideNavigation />
      {sideNavigationView && <div className='overlay' onClick={toggleSideNavigation}></div>}
    </div>

  )
}

export { Navigation }