// page init
jQuery(function(){
	ImageFitCont();
	FixedHeader();
	ProjectSlider();
	ProjectGallery();
});

// Image Fit Container
function ImageFitCont() {
	$('.imageFit').imgLiquid({
		fill: true,
        horizontalAlign: 'center',
        verticalAlign: 'center'
	});
}

// Fixed Header
function FixedHeader() {
	var lastScrollTop = 0, delta = 5;
	
		$(window).scroll(function(event){
		   var st = $(this).scrollTop();
		   
		   if(Math.abs(lastScrollTop - st) <= delta)
			  return;
		   
		   if (st > lastScrollTop){
				// downscroll code
				$('.site-header').addClass('fix-head');
		   } 
		   if (st < 50){
		   // downscroll code
		   	$('.site-header').removeClass('fix-head');
		   }
		   else {
			  // upscroll code
			  //$('.site-header').removeClass('fix-head');
		   }
		   lastScrollTop = st;
		});

}

function ProjectSlider() {

    const projectSlider_swiper = new Swiper('.project-slider', {
        navigation: {
            nextEl: '.project-slider .swiper-button-next',
            prevEl: '.project-slider .swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }      
      });

    const homeProjectSlider_swiper = new Swiper('.project-slider.home-project-slider', {
        navigation: {
            nextEl: '.project-slider.home-project-slider .swiper-button-next',
            prevEl: '.project-slider.home-project-slider .swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 28,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            }
        }      
    });

    const homeTopSlider_swiper = new Swiper('.project-slider.home-top-slider', {
        navigation: {
            nextEl: '.project-slider.home-top-slider .swiper-button-next',
            prevEl: '.project-slider.home-top-slider .swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 0,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            }
        }        
    });

}

function ProjectSliderOld() {
	$('.project-slider').swiper({
		nextButton: '.project-slider .swiper-button-next',
        prevButton: '.project-slider .swiper-button-prev',
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            1024: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 1
            }
        }
	});
	$('.project-slider.home-project-slider').swiper({
			nextButton: '.project-slider .swiper-button-next',
	        prevButton: '.project-slider .swiper-button-prev',
	        slidesPerView: 4,
	        spaceBetween: 28,
	        breakpoints: {
	            1024: {
	                slidesPerView: 2
	            },
	            768: {
	                slidesPerView: 1
	            }
	        }
		});
	$('.project-slider.home-top-slider').swiper({
			nextButton: '.project-slider .swiper-button-next',
	        prevButton: '.project-slider .swiper-button-prev',
	        slidesPerView: 4,
	        //autoplay: 2500,
        	//autoplayDisableOnInteraction: false
	        spaceBetween: 0,

	        breakpoints: {
	            1024: {
	                slidesPerView: 2
	            },
	            768: {
	                slidesPerView: 1
	            }
	        }
		});


}

function ProjectGallery() {
	$('#image-gallery').lightSlider({
		gallery:true,
		item:1,
		thumbItem:9,
		slideMargin: 0,
		speed:500,
		auto:true,
		loop:true,
		onSliderLoad: function() {
			$('#image-gallery').removeClass('cS-hidden');
		}  
	});
}

$(document).on('click', function(e) {
    var elem = $(e.target).closest('.box-handel'),
        box  = $(e.target).closest('.box-form');
    
    if ( elem.length ) {
        e.preventDefault();
        $('.box-form').slideToggle();
    }else if (!box.length){
        $('.box-form').hide();
    }
});

$(document).on('shown.bs.tab', function () {
    ProjectSlider();
});

$(document).ready(function() {
    
  // Equal Height
  if ($(window).width() > 767) {
      $('.dev-blocks').each(function(){  
		  var highestBox = 0;
		  $('.dev-block', this).each(function(){
			if($(this).height() > highestBox) {
			  highestBox = $(this).height(); 
			}
		  });  
		  $('.dev-block',this).height(highestBox);
	   });
	}
});


$(window).load(function() {
     setTimeout(function() {
        $('.quick-contact-box').addClass('anim-up');
    }, 2000);
	
	var timeout = null;

	$(document).on('mousemove', function() {
		$('.quick-contact-box').addClass('anim-up');
		clearTimeout(timeout);
	
		timeout = setTimeout(function() {
			$('.quick-contact-box').removeClass('anim-up');
		}, 8000);
	});
	
	//$('#ninja-slider').NinjaSlider();
	 
	
});

function HomeGalleryGrid() {
    $('.gal-mesonry .grid').isotope({
      // options
      itemSelector: '.grid-item',
      layoutMode: 'masonry'
    });
}
function HomeGalleryGrid2() {
    $('.gal-mesonry2 .grid').isotope({
      // options
      itemSelector: '.grid-item',
      layoutMode: 'masonry'
    });
}
$(document).ready(function(){
	
$('.rental-class a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  //console.log(e.target.hash);
  var targethref = e.target.hash;
  if(targethref == '#rentals1')
  	HomeGalleryGrid2();
  else
  	HomeGalleryGrid();	
})

})




















// --------- projectDetail-imgVideo-slider -------------

function projectDetailImgVideoSwiperSlider() {
    var projectDetail_imgVideo_sliderSwiper = new Swiper(".projectDetail-imgVideo-slider .swiper-container", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        navigation: {
            nextEl: ".projectDetail-imgVideo-slider .swiper-button-next",
            prevEl: ".projectDetail-imgVideo-slider .swiper-button-prev",
        },
        pagination: {
            el: '.projectDetail-imgVideo-slider .swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: function (number) {
                return ('0' + number).slice(-2);
            },
            formatFractionTotal: function (number) {
                return ('0' + number).slice(-2);
            },
            renderFraction: function (currentClass, totalClass) {
                return '<span class="pagination-text"><span class="' + currentClass + '"></span>' +
                    ' / ' +
                    '<span class="' + totalClass + '"></span></span>';
            }
        },
    });


    projectDetail_imgVideo_sliderSwiper.on('slideChange', function () {

        var currentSlide, slideType, player, command;

        //find the current slide element and decide which player API we need to use.
        currentSlide = $('.projectDetail-imgVideo-slider').find(".swiper-slide-active");

        //determine which type of slide this, via a class on the slide container. This reads the second class, you could change this to get a data attribute or something similar if you don't want to use classes.
        slideType = currentSlide.length ? currentSlide.attr("class").split(" ")[1] : null;

        if (slideType == "mp4") {
            currentSlide.find("video").get(0).pause();
        }
        else {
            command = {
                "event": "command",
                "func": "pauseVideo"
            };
        }
    });



    $('#projectDetailFileFolderModal').on('shown.bs.modal', function () {
        projectDetail_fileFolder_swiper = new Swiper('.projectDetail-fileFolder-slider .swiper-container', {
            navigation: {
                nextEl: '.projectDetail-fileFolder-slider .swiper-button-next',
                prevEl: '.projectDetail-fileFolder-slider .swiper-button-prev',
            },
            slidesPerView: 1,
            spaceBetween: 0,
            breakpoints: {
                320: {
                    slidesPerView: 6,
                },
                768: {
                    slidesPerView: 8
                },
                992: {
                    slidesPerView: 10
                },
                1200: {
                    slidesPerView: 15
                }
            }
        });

        fileFolder_detail_sliderSwiper = new Swiper(".fileFolder-detail-slider .swiper-container", {
            loop: false,
            spaceBetween: 0,
            slidesPerView: 1,
            navigation: {
                nextEl: ".fileFolder-detail-slider .swiper-button-next",
                prevEl: ".fileFolder-detail-slider .swiper-button-prev",
            },
            centeredSlides: true,
            pagination: {
                el: '.fileFolder-detail-slider .swiper-pagination',
                type: 'fraction',
                formatFractionCurrent: function (number) {
                    return ('0' + number).slice(-2);
                },
                formatFractionTotal: function (number) {
                    return ('0' + number).slice(-2);
                },
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="pagination-text"><span class="' + currentClass + '"></span>' +
                        ' / ' +
                        '<span class="' + totalClass + '"></span></span>';
                }
            },
            on: {
                init: function () {
                    angular.element('button:eq(1)').scope().setDescription();
                }
            }
        });


        fileFolder_detail_sliderSwiper.on('slideChange', function () {

            var currentSlide, slideType, player, command;

            //find the current slide element and decide which player API we need to use.
            currentSlide = $('.fileFolder-detail-slider').find(".swiper-slide-active");

            //determine which type of slide this, via a class on the slide container. This reads the second class, you could change this to get a data attribute or something similar if you don't want to use classes.
            angular.element('button:eq(1)').scope().setDescription(fileFolder_detail_sliderSwiper.realIndex);
            slideType = currentSlide.length ? currentSlide.attr("class").split(" ")[1] : null;

            if (slideType == "mp4") {
                //console.log(slideType);
                currentSlide.find("video").get(0).pause();
            }
            else {
                //console.log(slideType);
                command = {
                    "event": "command",
                    "func": "pauseVideo"
                };
            }
        });
    });
}
function toggleStickyModal(elementId, action) {

    var modalInterval = setInterval(() => {
        let $modal = $(`#${elementId}`);
        let keyboard = false; // Prevent to close by ESC
        let backdrop = 'static'; // Prevent to close on click outside the modal

        if ($modal.length) {
            if(typeof $modal.data('bs.modal') === 'undefined') { // Modal did not open yet
                if (action == 'open') {
                    $modal.modal({
                        keyboard: keyboard,
                        backdrop: backdrop
                    });
                }
            } else {
                if (action == 'open') {
                    $modal.modal('show');
                } else {
                    $modal.modal('hide');
                }
            }

            clearInterval(modalInterval);
        }
    }, 1000);
}
