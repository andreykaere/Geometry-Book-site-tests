
function setIconSize(iconId, size) {
	let element = document.querySelector("#" + iconId + " svg");
    
	

	element.style.height = size.toString() + "px";
	element.style.width  = size.toString() + "px";
}

function getLineHeight(titleId) {
	//console.log(id);
	let parent = document.getElementById(titleId);
	let titleTag = parent.children[0].tagName;
	let parentStyle = window.getComputedStyle(parent.querySelector("#" + titleId + " > " + titleTag + "> div"));
	return parseFloat(parentStyle['height']);
}


function getHeaderId(iconId) {
    let reg = /(.*?)_/;//let reg = /(.*)_.*_/
	return iconId.match(reg)[1];
}

function setIconStyle(iconId) {
	//console.log(iconId);
	// if elements is not wihtin this page
	try { 
		let size = getLineHeight(getHeaderId(iconId)); 
	    size = size * 0.8;

	    setIconSize(iconId, size);
	} 
	catch(e) {}//console.log(e)}
	
}




function bindEdit() {
    $(".edit").click(function(e){
        alert(this.id);
	});
}


function showCommentWindow(commentId) {
	//$("#commentWindow").css("display", "block");
	//$("#commentWindow").css("color", "red");
	//event.preventDefault();
	$('#comment-background').addClass('is-visible');
 
	$('#comment-background').on('click', function(event){
		if( $(event.target).is('#comment-cancel-button .button') || 
			$(event.target).is('#comment-background')) {
    
			event.preventDefault();
			$(this).removeClass('is-visible');
		}

	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    }); 

	$("#comment-submit-button").click(function(){
		location.reload();
		$("#comment-window form")[0].reset();
	});
    

}


function hideCommentWindow() {


}


function alertDoneMessage() {
    
}


function bindComment() {
    $(".comment").click(function(e){
        //alert(this.id);
        showCommentWindow(this.id);
	});

}

function showIcons() {
	$(".comment").css("display", 'inline-block');
	$(".edit").css("display", 'inline-block');
	$("h1 > .comment").css("display", 'none');
	$("h1 > .edit").css("display", 'none');
}

function main() {
    
	let iconsIds = ['Факт-4_fact4_edit', 'Подсказка_fact8_edit', 'Рисунок_fact4_edit', 'Дополнение_print_comment', 'Подсказка-12_print_comment', 'Подсказка_fact9_edit', 'Известные-факты_inversion_edit', 'Рисунок-1_print_comment', 'Предисловие_print_comment', 'Свойства-2_print_edit', 'Преобразования-плоскости_print_comment', 'Коники_print_comment', 'Упражнения_orthocenter_edit', 'Факт-8_fact8_edit', 'Рисунок_fact1_comment', 'Подсказка-8_print_edit', 'Рисунок-4_print_comment', 'Недавно-прошедшие_print_edit', 'Рисунок_fact8_comment', 'Доказательство-5_print_edit', 'Инверсия_inversion_comment', 'Как-читать-эту-книгу_print_comment', 'Рисунок-2_print_edit', 'Рисунок_problem2_edit', 'Доказательство_fact9_comment', 'Коники_print_edit', 'Гомотетия_print_comment', 'Теория_index_edit', 'Подсказка_print_comment', 'Рисунок_fact7_edit', 'Свойства-2_print_comment', 'Факты_print_edit', 'Гомотетия_homothetic_edit', 'Подсказка-2_print_edit', 'Подсказка_fact3_edit', 'Недавно-прошедшие_news_edit', 'Подсказка-1_print_comment', 'Дополнение_print_edit', 'Подсказка-2_print_comment', 'Примечание_problem1_comment', 'Дополнение_index_comment', 'Подсказка-6_print_edit', 'Для-кого-эта-книга_foreword_edit', 'Рисунок_fact3_edit', 'Вокруг-ортоцентра_print_comment', 'Рисунок-9_print_edit', 'Доказательство_fact2_edit', 'Доказательство-2_print_edit', 'Точка-Микеля_miquel_point_comment', 'Подсказка_problem2_comment', 'Касание_print_edit', 'Задача-3_print_comment', 'Рисунок-7_print_edit', 'Методы_print_comment', 'Доказательство_fact4_edit', 'Рисунок-8_print_edit', 'Рисунок_print_edit', 'Как-читать-эту-книгу_foreword_comment', 'Обновления_news_edit', 'Примечание_print_comment', 'Поворот-вектора_print_comment', 'Предстоящие_news_comment', 'Что-я-могу-тут-найти_foreword_edit', 'Факт-9_print_edit', 'Методы_index_comment', 'Доказательства-свойств-1_print_comment', 'Подсказка_print_edit', 'Известные-факты-1_print_comment', 'Решение_print_comment', 'Радикальная-ось_print_comment', 'Факт-5_fact5_comment', 'Задачи-1_print_edit', 'Теория_foreword_comment', 'Доказательство-2_print_comment', 'Факт-10_fact10_edit', 'Свойства_print_comment', 'Рисунок_fact8_edit', 'Доказательство_fact1_comment', 'Симедиана_symmedian_edit', 'Доказательства-свойств-2_print_edit', 'Радикальная-ось_radical_line_edit', 'Доказательства-свойств_homothetic_comment', 'Доказательство-9_print_comment', 'Коники_conics_comment', 'Инверсия_print_edit', 'Известные-факты_inversion_comment', 'Подсказка-8_print_comment', 'Задача-3_print_edit', 'Факты_facts_edit', 'Доказательство_problem3_edit', 'Вокруг-ортоцентра_orthocenter_edit', 'Решение_problem4_edit', 'Инверсия_print_comment', 'Предстоящие_print_edit', 'Доказательство_fact9_edit', 'Что-я-могу-тут-найти_index_edit', 'Точка-Микеля_print_comment', 'Рисунок-9_print_comment', 'События_print_comment', 'Известные-факты_homothetic_edit', 'Предисловие_print_edit', 'Методы_print_edit', 'Рисунок_fact6_comment', 'Теория_print_comment', 'Подсказка_fact1_comment', 'Что-я-могу-тут-найти_foreword_comment', 'Подсказка_fact5_edit', 'Подсказка_problem1_comment', 'Рисунок_problem3_edit', 'Подсказка-11_print_comment', 'Доказательства-свойств_orthocenter_edit', 'Задача-2_problem2_comment', 'Рисунок_fact5_comment', 'Педальные-треугольники_print_comment', 'Доказательство-11_print_edit', 'Рисунок-11_print_comment', 'Доказательство-4_print_comment', 'Факт-5_fact5_edit', 'Задача-1_print_edit', 'Подсказка_fact2_comment', 'Доказательства-свойств_print_comment', 'Педальные-треугольники_print_edit', 'Как-читать-эту-книгу_print_edit', 'Доказательство_problem1_comment', 'Доказательства-свойств_inversion_edit', 'Доказательства-свойств_orthocenter_comment', 'Факт-10_print_edit', 'Коники_conics_edit', 'Точка-Микеля_miquel_point_edit', 'Решение_print_edit', 'Предисловие_index_edit', 'Подсказка-4_print_edit', 'Преобразования-плоскости_transformations_comment', 'Доказательство-6_print_edit', 'Новости_news_comment', 'Решение-задач-с-помощью-гомотетии_homothetic_edit', 'Доказательство-8_print_comment', 'Как-читать-эту-книгу_index_comment', 'Задача-4_problem4_comment', 'Свойства-1_print_edit', 'Факт-2_print_edit', 'Факт-2_fact2_edit', 'Подсказка_fact2_edit', 'Рисунок-4_print_edit', 'Педальные-треугольники_pedal_comment', 'Изогональное-сопряжение_isogonal_comment', 'Упражнения_orthocenter_comment', 'Факт-9_fact9_edit', 'Доказательство-5_print_comment', 'Методы-1_print_comment', 'Факты-1_print_edit', 'Задачи_index_comment', 'Подсказка_fact10_edit', 'Упражнения_print_edit', 'Доказательство_fact8_comment', 'Доказательство-1_print_comment', 'Теория_theory_comment', 'Подсказка-12_print_edit', 'Примечание_print_edit', 'Факт-4_fact4_comment', 'Доказательство-12_print_comment', 'Решение-задач-с-помощью-инверсии_print_comment', 'Решение-задач-с-помощью-гомотетии_print_edit', 'Факт-10_print_comment', 'Рисунок-10_print_comment', 'Факт-4_print_comment', 'Рисунок_problem1_edit', 'Доказательство_fact7_comment', 'Недавно-прошедшие_news_comment', 'Факт-1_print_edit', 'Инверсия_inversion_edit', 'Подсказка_problem4_edit', 'Подсказка_fact6_comment', 'Факт-8_print_comment', 'Рисунок-13_print_edit', 'Доказательство_fact6_comment', 'Подсказка_problem2_edit', 'Свойства_homothetic_edit', 'Решение-задач-с-помощью-инверсии_inversion_edit', 'Задача-2_print_edit', 'Рисунок_fact7_comment', 'Задачи_problems_comment', 'Для-кого-эта-книга_foreword_comment', 'Рисунок_problem3_comment', 'Задача-4_print_comment', 'Доказательство_fact8_edit', 'Симедиана_print_edit', 'Факты_foreword_comment', 'Факт-1_fact1_comment', 'Рисунок_fact9_edit', 'Факт-5_print_comment', 'Обновления_print_comment', 'Касание_touching_comment', 'Факт-5_print_edit', 'Как-читать-эту-книгу_foreword_edit', 'Подсказка-5_print_comment', 'Доказательство-10_print_edit', 'Доказательства-свойств_print_edit', 'Теория_theory_edit', 'Факты_facts_comment', 'Факт-7_fact7_edit', 'Симедиана_print_comment', 'Задачи-1_print_comment', 'Задача-1_problem1_edit', 'Решение-задач-с-помощью-инверсии_print_edit', 'Факт-4_print_edit', 'Доказательство-8_print_edit', 'Подсказка_problem1_edit', 'Изогональное-сопряжение_print_edit', 'Задачи_print_comment', 'Факт-10_fact10_comment', 'Рисунок-2_print_comment', 'Доказательства-свойств-1_print_edit', 'Задача-3_problem3_comment', 'Площадь_print_edit', 'Доказательство_fact4_comment', 'Подсказка-9_print_edit', 'Факт-3_fact3_edit', 'Примечание_problem1_edit', 'Что-я-могу-тут-найти_print_edit', 'Доказательство_fact1_edit', 'Как-читать-эту-книгу_index_edit', 'Рисунок_problem4_comment', 'Теория-1_print_edit', 'Подсказка-7_print_comment', 'Предисловие_foreword_comment', 'Задача-2_problem2_edit', 'Подсказка-13_print_comment', 'Вокруг-ортоцентра_print_edit', 'Рисунок_fact2_comment', 'Задача-4_problem4_edit', 'Рисунок_problem4_edit', 'Решение-задач-с-помощью-гомотетии_homothetic_comment', 'Факт-6_print_comment', 'Факт-6_fact6_edit', 'Факт-2_fact2_comment', 'Изогональное-сопряжение_print_comment', 'Доказательство_fact3_edit', 'Недавно-прошедшие_print_comment', 'Преобразования-плоскости_print_edit', 'Что-я-могу-тут-найти_index_comment', 'Задача-1_problem1_comment', 'Площадь_area_comment', 'Доказательства-свойств_inversion_comment', 'Факт-1_print_comment', 'Факт-9_print_comment', 'Подсказка-10_print_comment', 'Дополнение_index_edit', 'Доказательство_fact5_comment', 'Подсказка_fact3_comment', 'Доказательство_print_edit', 'Факт-2_print_comment', 'Рисунок_fact1_edit', 'Методы-1_print_edit', 'Рисунок-5_print_edit', 'Новости_news_edit', 'Доказательство-11_print_comment', 'Доказательство_print_comment', 'Педальные-треугольники_pedal_edit', 'Доказательство-1_print_edit', 'Для-кого-эта-книга_print_edit', 'Подсказка_fact4_comment', 'Рисунок_fact10_edit', 'Рисунок_fact4_comment', 'Преобразования-плоскости_transformations_edit', 'Рисунок_problem2_comment', 'События_news_edit', 'Дополнение_foreword_comment', 'Теория_index_comment', 'Предисловие_index_comment', 'Обновления_print_edit', 'Новости_print_comment', 'Доказательства-свойств_homothetic_edit', 'Подсказка_fact8_comment', 'Рисунок_fact2_edit', 'Свойства_inversion_comment', 'Известные-факты_print_comment', 'Касание_print_comment', 'Доказательство-6_print_comment', 'Факт-1_fact1_edit', 'Факт-7_print_comment', 'Известные-факты_homothetic_comment', 'Площадь_area_edit', 'Известные-факты-1_print_edit', 'Факт-3_fact3_comment', 'Площадь_print_comment', 'Доказательство-12_print_edit', 'Доказательства-свойств-2_print_comment', 'Доказательство_problem2_edit', 'Доказательство_problem1_edit', 'Подсказка-6_print_comment', 'Решение_problem4_comment', 'Задачи_index_edit', 'Предисловие_foreword_edit', 'Факт-3_print_edit', 'Задача-1_print_comment', 'Подсказка-7_print_edit', 'Факты-1_print_comment', 'Задачи_foreword_edit', 'Подсказка-9_print_comment', 'Факты_foreword_edit', 'Рисунок-12_print_edit', 'Факт-9_fact9_comment', 'Доказательство-7_print_comment', 'Доказательство-7_print_edit', 'Для-кого-эта-книга_print_comment', 'Рисунок-8_print_comment', 'Подсказка_fact9_comment', 'Новости_print_edit', 'Рисунок_fact9_comment', 'Задача-3_problem3_edit', 'Точка-Микеля_print_edit', 'Радикальная-ось_print_edit', 'Предстоящие_print_comment', 'Методы_foreword_edit', 'Вокруг-ортоцентра_orthocenter_comment', 'Доказательство_fact3_comment', 'Подсказка-3_print_comment', 'Подсказка_fact10_comment', 'Подсказка_fact4_edit', 'Рисунок_fact3_comment', 'Доказательство-10_print_comment', 'Факт-8_print_edit', 'Методы_index_edit', 'Рисунок-7_print_comment', 'Гомотетия_homothetic_comment', 'Подсказка_fact7_edit', 'Факты_index_comment', 'Доказательство-3_print_edit', 'Поворот-вектора_rotate_vector_edit', 'Известные-факты_print_edit', 'Подсказка_fact5_comment', 'Свойства-1_print_comment', 'Радикальная-ось_radical_line_comment', 'Задача-2_print_comment', 'Доказательство_fact2_comment', 'Теория_print_edit', 'Подсказка_fact7_comment', 'Задачи_print_edit', 'Рисунок-1_print_edit', 'Рисунок-3_print_comment', 'Рисунок-3_print_edit', 'Рисунок-13_print_comment', 'Доказательство_fact6_edit', 'Рисунок-10_print_edit', 'Методы_methods_edit', 'События_news_comment', 'Свойства_orthocenter_comment', 'Методы_methods_comment', 'Подсказка-5_print_edit', 'Доказательство-3_print_comment', 'Поворот-вектора_rotate_vector_comment', 'Факты_print_comment', 'Теория-1_print_comment', 'Дополнение_foreword_edit', 'Рисунок_fact10_comment', 'Решение-задач-с-помощью-гомотетии_print_comment', 'Изогональное-сопряжение_isogonal_edit', 'Доказательство_problem3_comment', 'Рисунок_fact5_edit', 'Решение-задач-с-помощью-инверсии_inversion_comment', 'Что-я-могу-тут-найти_print_comment', 'Задачи_problems_edit', 'Подсказка_problem4_comment', 'Касание_touching_edit', 'Рисунок-5_print_comment', 'Задачи_foreword_comment', 'Подсказка-4_print_comment', 'Методы_foreword_comment', 'Факт-8_fact8_comment', 'Доказательство_problem2_comment', 'Рисунок_problem1_comment', 'Факт-7_print_edit', 'Подсказка_problem3_comment', 'Для-кого-эта-книга_index_comment', 'Свойства_orthocenter_edit', 'Гомотетия_print_edit', 'Свойства_homothetic_comment', 'Симедиана_symmedian_comment', 'Подсказка-10_print_edit', 'Факт-6_fact6_comment', 'Факт-3_print_comment', 'Факт-6_print_edit', 'Теория_foreword_edit', 'Для-кого-эта-книга_index_edit', 'Доказательство_fact5_edit', 'Подсказка_fact1_edit', 'Поворот-вектора_print_edit', 'Рисунок_print_comment', 'Подсказка-3_print_edit', 'Доказательство_fact10_comment', 'Подсказка-1_print_edit', 'Задача-4_print_edit', 'Предстоящие_news_edit', 'Рисунок_fact6_edit', 'Доказательство-4_print_edit', 'Доказательство_fact7_edit', 'События_print_edit', 'Подсказка-13_print_edit', 'Рисунок-6_print_edit', 'Свойства_inversion_edit', 'Упражнения_print_comment', 'Рисунок-6_print_comment', 'Доказательство-9_print_edit', 'Подсказка_fact6_edit', 'Подсказка_problem3_edit', 'Обновления_news_comment', 'Рисунок-12_print_comment', 'Доказательство_fact10_edit', 'Свойства_print_edit', 'Подсказка-11_print_edit', 'Рисунок-11_print_edit', 'Факт-7_fact7_comment', 'Факты_index_edit'];


    showIcons();

	for (i in iconsIds) {
        let iconId = iconsIds[i];

	    setIconStyle(iconId);
    }

	bindEdit();
	bindComment();


    



}



main()
