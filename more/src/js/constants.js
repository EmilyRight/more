const links = {
  gbshare: 'http://q.tele2.ru/gifts',
  mincentre: 'https://q.tele2.ru/mincentre',
  gbcentre: 'https://q.tele2.ru/gbcentre',
};

const hidden = 'popup-modal-hidden';
const active = 'modal-box-active';
const noscroll = 'modal-box-viewed';
const oldText = `<div class="modal-box__header">
<h4 class="modal-box__title">Осталось только подключиться</h4>
<div class="close">
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <use xlink:href="#close"></use>
  </svg>
</div>
</div>
<div class="modal-box__body">
<p class="modal-box__text">
  Переходите к&nbsp;нам со&nbsp;своим номером или выберите новый.
</p>
<div class="modal-box__actions dark-bg">
  <a
    class="btn btn-primary close connect-btn js-gtm-event"
    href="https://q.tele2.ru/tariffs"
    target="_blank"
    >Подключиться</a
  >
  <a class="link already-btn js-gtm-event" href=""
    >Я&nbsp;уже абонент Tele2</a
  >
</div>
</div>`;

const newText = `
<div class="modal-box__header">
  <h4 class="modal-box__title">Классно, что вы&nbsp;с&nbsp;нами!</h4>
  <div class="close">
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlink:href="#close"></use>
    </svg>
  </div>
</div>
<div class="modal-box__body">
  <p class="modal-box__text">
    Пользуйтесь всеми возможностями Tele2 и&nbsp;следите за&nbsp;появлением новых.
  </p>
</div>`;
const closeIconClassName = 'close';

export {
  links, hidden, active, noscroll, oldText, newText, closeIconClassName,
};
