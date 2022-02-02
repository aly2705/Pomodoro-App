import * as model from './model';
import sidebarView from './views/sidebarView.js';
import headerView from './views/headerView';

/**
 *
 * @param {bool} shown - to tell if the sidebar is active or not
 */
const controlToggleNav = function (shown) {
  sidebarView.toggleSidebar(shown);
};

const init = function () {
  sidebarView.addHandlerActiveLink();
  headerView.addHandlerToggleNav(controlToggleNav);
};

init();
