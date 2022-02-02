class SidebarView {
  _parentElement = document.querySelector('.sidebar');
  _navLinks = document.querySelectorAll('.sidebar__item');

  addHandlerActiveLink() {
    this._parentElement.addEventListener(
      'click',
      this._changeActive.bind(this)
    );
  }

  _changeActive(e) {
    const link = e.target.closest('.sidebar__item');
    if (!link) return;

    const currentActive = Array.from(this._navLinks).find(link =>
      link.classList.contains('sidebar__item--active')
    );
    currentActive.classList.remove('sidebar__item--active');
    link.classList.add('sidebar__item--active');
  }

  toggleSidebar(shown) {
    if (shown) {
      this._parentElement.style.left = '0';
      return;
    }
    this._parentElement.style.left = '-100%';
  }
}

export default new SidebarView();
