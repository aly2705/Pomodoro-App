import * as model from './model';
import sidebarView from './views/sidebarView.js';
import headerView from './views/headerView';
import pomodoroView from './views/pomodoroView';

/**
 *
 * @param {bool} shown - to tell if the sidebar is active or not
 */
const controlToggleNav = function (shown) {
  sidebarView.toggleSidebar(shown);
};

const controlActivePomodoro = function () {
  console.log('Control');
};

const init = function () {
  sidebarView.addHandlerActiveLink();
  headerView.addHandlerToggleNav(controlToggleNav);
  pomodoroView.addHandlerActiveTimer();
  pomodoroView.addHandlerTimerEffect();
};

init();
