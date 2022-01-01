
const hamburger = document.querySelector('.menu-hamburger');
const headerMenu = document.querySelector('.header-menu');
const headerNav = document.querySelector('.header__nav');
const headerNavShowModificator = 'header__nav_show';
const hideModificator = 'header-menu_hide';
const humburgerHideModificator = 'menu-hamburger_hide';
const animationDuration = 200;

function handleDocumentClick(e) {
  const isShowed = headerNav.classList.contains(headerNavShowModificator);
  const isClickOnCloseBtn = e.target.closest('.menu-hamburger');
  const isClickOutsideMenu = !e.path.find(el => el.classList && el.classList.contains('header-menu'));
  const isClickOnLink = e.path.find(el => el.classList && el.classList.contains('header-menu__item'));
  
  if (isClickOnCloseBtn && !isShowed) {
    headerNav.classList.add(headerNavShowModificator);
  }

  if (isShowed && (isClickOutsideMenu || isClickOnLink)) {
    hide();
  }
}

function hide() {
  headerNav.classList.remove(headerNavShowModificator);
  hamburger.classList.add(humburgerHideModificator);
  headerMenu.classList.add(hideModificator);

  setTimeout(() => {
    headerMenu.classList.remove(hideModificator);
    hamburger.classList.remove(humburgerHideModificator);
  }, animationDuration);
}

document.addEventListener('click', handleDocumentClick);

console.log(`
**Максимальный балл за задание (130/120)**

- студент засабмитил в [rs app](https://app.rs.school/course/student/cross-check-submit?course=js-fe-preschool) ссылку на своё CV, задеплоенное на 'gh-pages' (10/10)
- вёрстка валидная (10/10)  
   - для проверки валидности вёрстки используйте сервис https://validator.w3.org/  
   - валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." В таком случае баллы за пункт требований выставляем полностью.
   - если есть предупреждения - 'warnings', но нет ошибок - 'errors', выставляем половину баллов за пункт требований
- вёрстка семантическая (20/20)  
  В коде странице присутствуют и используются по назначению следующие элементы:  
  Под "используются по назначению" имеется в виду, что у элементов есть какое-то содержание, соответствующее типу элемента, а не добавлены пустые теги для получения баллов. Правильность использования элементов не проверяется и на балл не влияет.
   - 'header', 'main', 'footer' (5/5)
   - элемент 'nav' (5/5)    
   - только один заголовок 'h1' (5/5)
   - заголовки 'h2' (5/5)  
- в footer есть ссылка на гитхаб автора работы, год создания приложения, [логотип курса](https://rs.school/images/rs_school_js.svg) со [ссылкой на курс](https://rs.school/js/) (10/10)  
Если ссылка в футере ведёт на [курс stage0](https://rs.school/js-stage0/), это не ошибка.
- для оформления СV используются css-стили (10/10)
- при уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону (10/10)
- на странице СV есть фото или аватарка автора, пропорции изображения не искажены, у изображения есть атрибут 'alt' (10/10)
- навигация, контакты для связи и перечень навыков оформлены в виде списка 'ul > li' или 'ul > li > a' (10/10)  
Также допускается использование нумерованого списка 'ol > li' или 'ol > li > a' 
- Содержание CV (30/30)  
  CV содержит:
   - краткую информацию о себе (5/5)
   - контакты для связи (5/5)
   - перечень навыков (5/5)
   - пример кода. Код добавляется при помощи символов и тегов, а не картинкой (5/5)
   - перечень выполненных учебных проектов со ссылками на исходный код или страницу приложения (5/5)
   - информацию об образовании и уровне английского (5/5)
- CV выполнено на английском языке (10/10)`);