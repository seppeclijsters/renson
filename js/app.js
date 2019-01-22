$(document).foundation();


// --------------------------------- SLIDE SHOWS ---------------------------------

// ---- slideshow index -----
var swiper = new Swiper('.swiper__container', {
  effect: 'coverflow',
  loop: true,
  speed: 600,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 200,
  slideActiveClass: 'swiper__active__slide',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows : false,
  },
  navigation: {
    nextEl: '.swiper__next',
    prevEl: '.swiper__prev',
    // clickable: true
  },
  breakpoints: {
    1024: {
      spaceBetween: 120,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows : false,
      },
    },
    640: {
      spaceBetween: 50,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows : false,
      },
    }
  }
});

var swiper__designlijnen = new Swiper('.swiper__designlijnen', {
  spaceBetween: 30,
  speed: 800,
  effect: 'fade',
  parallax: true,
  pagination: {
    el: '.designlijnen__background__buttons',
    type: 'bullets',
    clickable: true,
    renderBullet: function (index, className) {
      var names = ['Linarte', 'Linius'];

      return '<div class="' + className + '">' + (names[index]) + '</div>';

    },
 },
  navigation: {
    nextEl: '.product__slider__next',
    prevEl: '.product__slider__prev',
  },
});

var homeSwiper = new Swiper('.swiper__container2', {
  speed: 800,
  spaceBetween: 30,
  autoplay: true,
  effect: 'fade',
  pagination: {
   el: '.swiper-pagination',
   type: 'bullets',
   clickable: true,
   renderBullet: function (index, className) {
     var names = [];
     $(".swiper-wrapper .swiper-slide").each(function(i) {
       names.push($(this).data("name"));
     });

     return '<img class="' + className + '" src="' + names[index] + '">';
   },
  },
  navigation: {
    nextEl: '.swiper__button__next',
    prevEl: '.swiper__button__prev',
  },
});

var swiper3 = new Swiper('.swiper__container3', {
  effect: 'coverflow',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 200,
  coverflowEffect: {
   rotate: 0,
   stretch: 0,
   depth: 200,
   modifier: 1,
   slideShadows : false,
  },
  navigation: {
   nextEl: '.swiper__next',
   prevEl: '.swiper__prev',
   // clickable: true
  },
});

var swiper = new Swiper('.product__slider', {
  spaceBetween: 30,
  speed: 800,
  effect: 'fade',
  loop: true,
  navigation: {
    nextEl: '.product__slider__next',
    prevEl: '.product__slider__prev',
  },
});


var swiper__about = new Swiper('.about__swiper', {
  speed: 700,
  pagination: {
    el: '.about__swiper__pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.about__swiper__next',
    prevEl: '.about__swiper__prev',
  },
});


// --------------------------------- MASONRY ---------------------------------

if ($('.grid').length){
  const grid = document.querySelector('.grid');
  const msnry = new Masonry( grid, {
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    percentPosition: true,
    gutter: 6,
  });
}

if ($('.grid2').length){
  const grid = document.querySelector('.grid2');
  const msnry = new Masonry( grid, {
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    // columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: 6,
    // gutter: 'gutter-sizer'
  });
}

// --------------------------- FALLBACK OBJECT FIT IE11 ---------------------------

objectFitImages();


// --------------------------- HAMBURGER MENU OPEN/CLOSE ---------------------------
var menuisopen = false;

var tl = new TimelineLite();

tl.set(".navigation-mobile-open", {xPercent: 0})
  .to(".navigation-mobile-open", 1, {xPercent: -100})
  .to(".line", .1, {stroke: '#000'}, 0)
  .to(".navigation-mobile__logo", .1, {opacity: 0}, .8);

tl.pause();



function opennav() {
  if(!menuisopen) {
    TweenLite.to(tl, 1, {time:1});
    document.body.classList.add('noscroll');
    menuisopen = true;
  } else {

    TweenLite.to(tl, tl.duration(), {time:.0000, ease: Expo.easeOut});
    document.body.classList.remove('noscroll');
    menuisopen = false;
  }
}

var hamburger = document.querySelector('.ham');
hamburger.addEventListener('click', opennav);
// hamburger.forEach(function(item){
//   item.addEventListener('click', opennav);
// });



var tl2 = new TimelineLite();

tl2.set(".navigation-mobile-open", {xPercent: 0})
  .to(".navigation-mobile-open", 1, {xPercent: -100})

tl2.pause();



function opennav2() {
  if(!menuisopen) {
    TweenLite.to(tl2, 1, {time:1});
    document.body.classList.add('noscroll');
    menuisopen = true;
  } else {

    TweenLite.to(tl2, tl2.duration(), {time:.0000, ease: Expo.easeOut});
    document.body.classList.remove('noscroll');
    menuisopen = false;
  }
}

var hamburger2 = document.querySelector('.ham-scroll');
hamburger2.addEventListener('click', opennav2);


// --------------------------- POPUP CONTAINER DEALER PAGE -----------------------------

var dealerpopuptext = document.querySelector('.dealer-popup__container__text');
var dealercontainer = document.querySelector('.dealer-popup__container');


var popupAnim = new TimelineLite();

popupAnim.set(".dealer-popup", {zIndex: -5})
  .to(".dealer-popup", .1, {zIndex: 150})
  .to(".dealer-popup", .3, {opacity: 1})


popupAnim.pause();

function closepopup(e) {
  popupAnim.reverse();
}

if ($('.close').length) {
  var close = document.querySelector('.close');
  close.addEventListener('click', closepopup);
}

$('.dealer-popup__container').on('click', function(e) {
    e.stopPropagation();
});

$('.dealer-popup').on('click', function (e) {
 popupAnim.reverse();
});


var openpopup = document.querySelectorAll('.info-popup');
for (var i = 0; i < openpopup.length; i++) {
  openpopup[i].addEventListener('click', function (e) {
    if (e.currentTarget.classList.contains('info-popup-premium')) {
      dealerpopuptext.innerHTML = "Een Premium Ambassador heeft een jarenlange ervaring met de Renson-oplossingen en biedt de meest professionele begeleiding. De Premium Ambassador vertegenwoordigt alles waar Renson voor s: comfort, design, kwaliteit en service. U kan er terecht voor het volledige productgamma zowel van terrasoverkappingen, zonwering en/of gevelbekleding van Renson. In hun ruime showroom maakt u kennis met de diverse mogelijkheden.Een Premium Ambassador heeft een jarenlange ervaring met de Renson-oplossingen en biedt de meest professionele begeleiding. De Premium Ambassador vertegenwoordigt alles waar Renson voor staat: comfort, design, kwaliteit en service. U kan er terecht voor het volledige productgamma zowel van terrasoverkappingen, zonwering en/of gevelbekleding van Renson. In hun ruime showroom maakt u kennis met de diverse mogelijkheden.";
      dealercontainer.style.backgroundColor='#EBBE3E';
      dealerpopuptext.style.color='white';
    } if (e.currentTarget.classList.contains('info-popup-ambassador')) {
      dealerpopuptext.innerHTML = "Een Ambassador heeft een jarenlange ervaring met de Renson-oplossingen en biedt de meest professionele begeleiding. De Premium Ambassador vertegenwoordigt alles waar Renson voor s: comfort, design, kwaliteit en service. U kan er terecht voor het volledige productgamma zowel van terrasoverkappingen, zonwering en/of gevelbekleding van Renson. In hun ruime showroom maakt u kennis met de diverse mogelijkheden.Een Premium Ambassador heeft een jarenlange ervaring met de Renson-oplossingen en biedt de meest professionele begeleiding. De Premium Ambassador vertegenwoordigt alles waar Renson voor staat: comfort, design, kwaliteit en service. U kan er terecht voor het volledige productgamma zowel van terrasoverkappingen, zonwering en/of gevelbekleding van Renson. In hun ruime showroom maakt u kennis met de diverse mogelijkheden.";
      dealercontainer.style.backgroundColor='#00275B';
      dealerpopuptext.style.color='white';
    } if (e.currentTarget.classList.contains('info-popup-verkooppunt')) {
      dealerpopuptext.innerHTML = "Een Verkooppunt heeft een jarenlange ervaring met de Renson-oplossingen en biedt de meest professionele begeleiding. De Premium Ambassador vertegenwoordigt alles waar Renson voor s: comfort, design, kwaliteit en service. U kan er terecht voor het volledige productgamma zowel van terrasoverkappingen, zonwering en/of gevelbekleding van Renson. In hun ruime showroom maakt u kennis met de diverse mogelijkheden.Een Premium Ambassador heeft een jarenlange ervaring met de Renson-oplossingen en biedt de meest professionele begeleiding. De Premium Ambassador vertegenwoordigt alles waar Renson voor staat: comfort, design, kwaliteit en service. U kan er terecht voor het volledige productgamma zowel van terrasoverkappingen, zonwering en/of gevelbekleding van Renson. In hun ruime showroom maakt u kennis met de diverse mogelijkheden.";
      dealercontainer.style.backgroundColor='#EFEFF0';
      dealerpopuptext.style.color='#525151';
    }

    popupAnim.restart();
  })
}


// --------------------------- HAMBURGER MENU OPEN/CLOSE ---------------------------

var menuisopen = false;

var tl = new TimelineLite();

tl.set(".navigation-mobile-open", {xPercent: 0})
  .to(".navigation-mobile-open", 1, {xPercent: -100})
  .to(".line", .1, {stroke: '#000'}, 0)
  .to(".navigation-mobile__logo", .1, {opacity: 0}, .8);

tl.pause();



function opennav() {
  if(!menuisopen) {
    TweenLite.to(tl, 1, {time:1});
    document.body.classList.add('noscroll');
    menuisopen = true;
  } else {

    TweenLite.to(tl, tl.duration(), {time:.0000, ease: Expo.easeOut});
    document.body.classList.remove('noscroll');
    menuisopen = false;
  }
}



// --------------------------- Photoswiper gallery ---------------------------
window.onload = function () {
  var initPhotoSwipeFromDOM = function(gallerySelector) {

      // parse slide data (url, title, size ...) from DOM elements
      // (children of gallerySelector)
      var parseThumbnailElements = function(el) {
          var thumbElements = document.querySelectorAll('.photoswipeEl'),
              numNodes = thumbElements.length,
              items = [],
              figureEl,
              linkEl,
              size,
              item;


          for(var i = 0; i < numNodes; i++) {

              figureEl = thumbElements[i]; // <figure> element

              // include only element nodes
              if(figureEl.nodeType !== 1) {
                  continue;
              }

              linkEl = figureEl.children[0]; // <a> element

              size = linkEl.getAttribute('data-size').split('x');

              // create slide object
              item = {
                  src: linkEl.getAttribute('href'),
                  w: parseInt(size[0], 10),
                  h: parseInt(size[1], 10),
              };



              if(figureEl.children.length > 1) {
                  // <figcaption> content
                  item.title = figureEl.children[1].innerHTML;
              }

              if(linkEl.children.length > 0) {
                  // <img> thumbnail element, retrieving thumbnail url
                  item.msrc = linkEl.children[0].getAttribute('src');
              }

              item.el = figureEl; // save link to element for getThumbBoundsFn
              items.push(item);
          }

          return items;
      };

      // find nearest parent element
      var closest = function closest(el, fn) {
          return el && ( fn(el) ? el : closest(el.parentNode, fn) );
      };

      // triggers when user clicks on thumbnail
      var onThumbnailsClick = function(e) {
          e = e || window.event;
          e.preventDefault ? e.preventDefault() : e.returnValue = false;

          var eTarget = e.target || e.srcElement;

          // find root element of slide
          var clickedListItem = closest(eTarget, function(el) {
              return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
          });

          if(!clickedListItem) {
              return;
          }

          // find index of clicked item by looping through all child nodes
          // alternatively, you may define index via data- attribute
          var clickedGallery = clickedListItem.parentNode,
              childNodes = clickedListItem.parentNode.childNodes,
              numChildNodes = childNodes.length,
              nodeIndex = 0,
              index;

          for (var i = 0; i < numChildNodes; i++) {
              if(childNodes[i].nodeType !== 1) {
                  continue;
              }

              if(childNodes[i] === clickedListItem) {
                  index = nodeIndex;
                  break;
              }
              nodeIndex++;
          }



          if(index >= 0) {
              // open PhotoSwipe if valid index found
              openPhotoSwipe( index, clickedGallery );
          }
          return false;
      };

      // parse picture index and gallery index from URL (#&pid=1&gid=2)
      var photoswipeParseHash = function() {
          var hash = window.location.hash.substring(1),
          params = {};

          if(hash.length < 5) {
              return params;
          }

          var vars = hash.split('&');
          for (var i = 0; i < vars.length; i++) {
              if(!vars[i]) {
                  continue;
              }
              var pair = vars[i].split('=');
              if(pair.length < 2) {
                  continue;
              }
              params[pair[0]] = pair[1];
          }

          if(params.gid) {
              params.gid = parseInt(params.gid, 10);
          }

          return params;
      };

      var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
          var pswpElement = document.querySelectorAll('.pswp')[0],
              gallery,
              options,
              items;

          items = parseThumbnailElements(galleryElement);

          // define options (if needed)
          options = {

              // define gallery index (for URL)
              galleryUID: galleryElement.getAttribute('data-pswp-uid'),

              getThumbBoundsFn: function(index) {
                  // See Options -> getThumbBoundsFn section of documentation for more info
                  var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                      pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                      rect = thumbnail.getBoundingClientRect();

                  return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
              },

              shareEl: false,
              showHideOpacity:true,

          };

          // PhotoSwipe opened from URL
          if(fromURL) {
              if(options.galleryPIDs) {
                  // parse real index when custom PIDs are used
                  // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                  for(var j = 0; j < items.length; j++) {
                      if(items[j].pid == index) {
                          options.index = j;
                          break;
                      }
                  }
              } else {
                  // in URL indexes start from 1
                  options.index = parseInt(index, 10) - 1;
              }
          } else {
              options.index = parseInt(index, 10);
          }

          // exit if index not found
          if( isNaN(options.index) ) {
              return;
          }

          if(disableAnimation) {
              options.showAnimationDuration = 0;
          }

          // Pass data to PhotoSwipe and initialize it
          gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
          gallery.init();
      };

      // loop through all gallery elements and bind events
      var galleryElements = document.querySelectorAll( gallerySelector );

      for(var i = 0, l = galleryElements.length; i < l; i++) {
          galleryElements[i].setAttribute('data-pswp-uid', i+1);
          galleryElements[i].onclick = onThumbnailsClick;
      }

      // Parse URL and open gallery if it contains #&pid=3&gid=1
      var hashData = photoswipeParseHash();
      if(hashData.pid && hashData.gid) {
          openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
      }
  };

  // execute above function
  initPhotoSwipeFromDOM('.hero-gallery');



  initPhotoSwipeFromDOM('.hero-gallery2');
 }


// ------------------------- SCROLL ANIMATION --------------------------

let shownav = new TimelineLite();
shownav
.to('.navigation2', .5, {top: 0});
shownav.pause();

let showmobilenav = new TimelineLite();
showmobilenav
.to('.navigation-mobile2', .5, {top: 0});
showmobilenav.pause();

var scrollnav = false;


window.addEventListener('scroll' , function (event) {

  if (window.pageYOffset >= 900 && !scrollnav) {
    shownav.restart();
    showmobilenav.restart();
    scrollnav = true;
  } else if(window.pageYOffset <= 900 && scrollnav) {
    shownav.reverse();
    showmobilenav.reverse();
    scrollnav = false;
  }
});


// ------------------------- SLIDER OUTPUT SCORE --------------------------

if ($('input[type="range"]').length) {

  $('input[type="range"]').rangeslider({
    // Feature detection the default is `true`.
      // Set this to `false` if you want to use
      // the polyfill also in Browsers which support
      // the native <input type="range"> element.
      polyfill: false,

      // Default CSS classes
      rangeClass: 'slider',
      disabledClass: 'rangeslider--disabled',
      horizontalClass: 'rangeslider--horizontal',
      fillClass: 'slider',
      handleClass: 'rangeslider__handle',

      // Callback function
      onInit: function() {
        $rangeEl = this.$range;
        // add value label to handle
        var $handle = $rangeEl.find('.rangeslider__handle');
        var handleValue = '<div class="rangeslider__handle__value">' + this.value + '</div>';
        $handle.append(handleValue);

        // get range index labels
        var rangeLabels = this.$element.attr('labels');
        // rangeLabels = rangeLabels.split(', ');

        // add labels
        $rangeEl.append('<div class="rangeslider__labels"></div>');
        $(rangeLabels).each(function(index, value) {
          $rangeEl.find('.rangeslider__labels').append('<span class="rangeslider__labels__label">' + value + '</span>');
        })
      },

      // Callback function
      onSlide: function(position, value) {
        var $handle = this.$range.find('.rangeslider__handle__value');
        $handle.text(this.value);
      },

      // Callback function
      onSlideEnd: function(position, value) {}
  });

}
