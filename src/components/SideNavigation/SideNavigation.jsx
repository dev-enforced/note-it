import React from 'react';
import { sideNavigationLinks } from 'constants';
import "./SideNavigation.css";
import { Link } from 'react-router-dom';

const SideNavigation = () => {
  return (
    <aside className='side-navigation-container m-4 pos-fixed'>
      {
        sideNavigationLinks.map(({ linkName, iconRequired, path },index) => {
          return (
            <Link to={path} key={index} className="side-nav-link gentle-flex-gap flex-align-center fw-500 text-cursor-pointer link-none">
              {iconRequired}
              <p className="side-nav-text">{linkName}</p>
            </Link>
          )
        })
      }
    </aside>
  )
}

export { SideNavigation };