// ---------------------------------  ABOUT SHOW HIDE CONTENT PRODUCTS  ---------------------------------


// prevent clicking on links

function preventClick(e) {
  e.preventDefault();
}

var links = document.querySelectorAll('.why-renson__item__link');
console.log(links);

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', preventClick);
}

// Show hide content

var text = [
 {title: "Topkwaliteit en duurzaamheid",
   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
 {title: "Minimalistisch design",
   text: "Lorem ipsum"},
 {title: "Eindeloze prestatie",
   text: "dolor sit amet, consectetur adipiscing"},
 {title: "Ultiem gebruiks en onderhoudsgemak",
   text: "eiusmod tempor incididunt ut"
 }];

function addContent(e) {
  var number = e.currentTarget.dataset.columns;
  var whyRensonItems = document.querySelectorAll('.why-renson__item');
  var whyRensonTitle = document.querySelector('.why-renson__product__title');
  var whyRensonText = document.querySelector('.why-renson__product__title__text');

  whyRensonTitle.innerHTML = text[number].title;
  whyRensonText.innerHTML = text[number].text;
  e.currentTarget.classList.add('selected-item');

  for (var i = 0; i < whyRensonItems.length; i++) {
    if (whyRensonItems[i].dataset.columns !== e.currentTarget.dataset.columns) {
      whyRensonItems[i].classList.remove('selected-item');
    }
  }
}

var products = document.querySelectorAll('.why-renson__item');

for (var i = 0; i < products.length; i++) {
  products[i].addEventListener('click', addContent);
}
