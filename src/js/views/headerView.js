class HeaderView {
  _parentElement = document.querySelector('.header');

  addHandlerToggleNav(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.mobile-menu');
      if (!btn) return;

      btn.classList.toggle('shown');
      const shown = btn.classList.contains('shown');
      handler(shown);
    });
  }
}

export default new HeaderView();
