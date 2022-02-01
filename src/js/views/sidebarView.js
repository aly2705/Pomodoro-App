class SidebarView {
  _parentElement = document.querySelector('.sidebar');
  _navLinks = document.querySelectorAll('.sidebar__item');

  addHandlerActiveLink() {
    this._parentElement.addEventListener('click', this.changeActive.bind(this));
  }

  changeActive(e) {
    const link = e.target.closest('.sidebar__item');
    if (!link) return;

    const currentActive = Array.from(this._navLinks).find(link =>
      link.classList.contains('sidebar__item--active')
    );
    currentActive.classList.remove('sidebar__item--active');
    link.classList.add('sidebar__item--active');
  }
}

export default new SidebarView();
