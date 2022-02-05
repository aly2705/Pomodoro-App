import View from './View.js';

class PomodoroView extends View {
  _parentElement = document.querySelector('.pomodoro');

  addHandlerActiveTimer() {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.pomodoro__option');
      if (!btn) return;

      const currentActiveTimer = Array.from(
        this.querySelectorAll('.pomodoro__option')
      ).find(el => el.classList.contains('pomodoro__option--active'));
      currentActiveTimer.classList.remove('pomodoro__option--active');
      btn.classList.add('pomodoro__option--active');
    });
  }
  addHandlerTimerEffect() {
    this._parentElement.addEventListener('click', function (e) {
      const timer = e.target.closest('.timer');
      if (!timer) return;

      console.log(timer);
      timer.setAttribute(
        'style',
        'box-shadow: 0 10rem 0.4rem rgba(#000, 0.3);'
      );

      //   setTimeout(
      //     () =>
      //       (timer.style.boxShadow =
      //         'inset -1rem -1rem 3rem rgba(#000, 0.25), 0 0.4rem 0.4rem rgba(#000, 0.25);'),
      //     3000
      //   );
    });
  }
}

export default new PomodoroView();
