$(function(){
	
	// создаём дело
	$('.affairs__form-btn').click(function(){
		var title = $('.affairs__form-title').val();
		var description = $('.affairs__form-description').val();
		if(title && description != "") {
			$('.affairs__list-empty').remove();
			var element = 
			'<div class="affairs__list-ready">' +
			'<div class="affairs__list-ready-title">' +
			'<div class="affairs__list-ready-title-p">' +
			title +
			'<a class="affairs__clear-button" href="#" aria-label="clear-button"></a>' +
			'</div>' +
			'<a class="affairs__roll-up" href="#" aria-label="roll-up"></a>' +
			'</div>' +
			'<div class="affairs__list-ready-description">' +
			'<p>' + description + '</p>' +
			'</div>' +
			'</div>';
			$(element).appendTo($('.affairs__list'));
			$('.affairs__list-ready').addClass('display-none').slideDown(500);
			
			// Обнуляем поля формы и задаем отступы
			$('.affairs__form-description').val('');
			$('.affairs__form-title').val('');
			$('.affairs__form').animate( {padding:'25px 40px 35px'}, {duration:500});
			return false;
		}
	});

	// крутим крестик при наведении и отведении мышки
	$('.affairs__list').on('mouseenter', '.affairs__clear-button', function(){
			$(this).toggleClass("clear-rotation");
	});
	$('.affairs__list').on('mouseleave', '.affairs__clear-button', function(){
		$(this).toggleClass("clear-rotation");
	});

	// Берем весь body, устанавливаем обработчик .on для события
	// "клик по элементу с классом .affairs__clear-button" и запускаем функцию.
	// берем элемент по которому произошло событие (this)
	// получаем первый родительский элемент благодаря .closest, 
	// элемент который совпадает с селектором .affairs__list-ready, и удаляем его.
	$('.affairs__list').on('click', '.affairs__clear-button', function(){  
		$(this).closest('.affairs__list-ready').hide('slow', function(){
			$(this).remove();
			if($('div').is('.affairs__list-ready') != true) {
			$('.affairs__list').append('<p class="affairs__list-empty">Список пуст...</p>');
			$('.affairs__form').animate( {padding:'45px 40px 55px'}, {duration:500});
		}
		});
	});

	// сворачиваем и разворачиваем описание дела
	$('.affairs__list').on('click', '.affairs__roll-up', function(){
    var title = $(this).closest('.affairs__list-ready').find('.affairs__list-ready-description');
    if(title.is(':visible')) {
			title.slideUp(400);
			$(this).addClass('roll-up-rotation');
    }else {
			title.slideDown(400);
			$(this).removeClass('roll-up-rotation');
    }
  });

});