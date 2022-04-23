
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

function main() {
    
	let iconsIds = ['Факты_index_comment', 'Факт-1_print_comment', 'Примечание_problem1_edit', 'Площадь_area_comment', 'Что-я-могу-тут-найти_index_comment', 'Задача-4_problem4_edit', 'Поворот-вектора_print_comment', 'Факт-1_print_edit', 'Методы_index_edit', 'Изогональное-сопряжение_print_comment', 'Предисловие_index_comment', 'Подсказка-4_print_comment', 'Подсказка-1_print_edit', 'Дополнение_foreword_edit', 'Точка-Микеля_print_edit', 'Рисунок_fact3_edit', 'Доказательства-свойств_orthocenter_edit', 'Предисловие_print_comment', 'Рисунок-10_print_edit', 'Методы_foreword_comment', 'Доказательство-5_print_comment', 'Подсказка_problem3_edit', 'Точка-Микеля_miquel_point_comment', 'Поворот-вектора_rotate_vector_edit', 'Примечание_print_comment', 'Вокруг-ортоцентра_print_comment', 'Инверсия_inversion_comment', 'Коники_conics_edit', 'Для-кого-эта-книга_print_comment', 'Симедиана_symmedian_edit', 'Изогональное-сопряжение_isogonal_edit', 'Задача-1_print_edit', 'Подсказка_problem3_comment', 'Рисунок_fact5_edit', 'Доказательство_problem3_comment', 'Доказательства-свойств_homothetic_edit', 'Доказательство-2_print_edit', 'Факт-9_print_edit', 'Факт-9_fact9_edit', 'Подсказка_problem1_comment', 'Решение-задач-с-помощью-гомотетии_print_edit', 'Рисунок_fact10_edit', 'Свойства-2_print_comment', 'Рисунок_fact2_comment', 'Подсказка_problem2_edit', 'Подсказка-7_print_comment', 'Факт-6_print_edit', 'Рисунок_fact8_comment', 'Касание_print_comment', 'Рисунок-8_print_comment', 'Подсказка_fact6_edit', 'Задачи-1_print_comment', 'Факт-3_fact3_edit', 'Доказательство_fact2_edit', 'Доказательство_problem1_edit', 'Радикальная-ось_print_edit', 'Что-я-могу-тут-найти_print_edit', 'Предисловие_print_edit', 'Подсказка-10_print_edit', 'Предстоящие_print_edit', 'Новости_news_edit', 'Факт-5_fact5_comment', 'Гомотетия_print_comment', 'Факты_index_edit', 'Теория_foreword_edit', 'Доказательство_fact8_edit', 'Факт-7_fact7_edit', 'Доказательство_fact4_comment', 'Решение-задач-с-помощью-гомотетии_print_comment', 'Симедиана_symmedian_comment', 'Известные-факты_homothetic_edit', 'Доказательства-свойств_print_edit', 'Задача-4_print_comment', 'Подсказка-2_print_comment', 'Свойства_orthocenter_edit', 'Рисунок_problem3_comment', 'Факт-7_fact7_comment', 'Рисунок-1_print_edit', 'События_print_comment', 'Недавно-прошедшие_news_comment', 'Рисунок_fact2_edit', 'Рисунок-13_print_comment', 'Факт-8_fact8_comment', 'Решение-задач-с-помощью-гомотетии_homothetic_edit', 'Рисунок-13_print_edit', 'Как-читать-эту-книгу_print_comment', 'Доказательство_fact6_comment', 'Подсказка-12_print_edit', 'Задача-3_print_comment', 'Свойства-2_print_edit', 'Площадь_print_comment', 'Преобразования-плоскости_transformations_comment', 'Факт-8_fact8_edit', 'Решение_print_comment', 'Радикальная-ось_radical_line_edit', 'Теория_theory_comment', 'Для-кого-эта-книга_foreword_comment', 'Точка-Микеля_miquel_point_edit', 'Обновления_news_comment', 'Для-кого-эта-книга_index_comment', 'Подсказка_fact6_comment', 'Для-кого-эта-книга_print_edit', 'Рисунок-7_print_comment', 'Доказательство_fact4_edit', 'Доказательство-10_print_comment', 'Решение-задач-с-помощью-инверсии_print_edit', 'Методы_methods_edit', 'Рисунок-6_print_edit', 'Изогональное-сопряжение_isogonal_comment', 'Доказательство_fact3_edit', 'Факт-10_print_edit', 'Решение_problem4_edit', 'Факт-4_print_edit', 'Рисунок-4_print_comment', 'Доказательство-5_print_edit', 'Рисунок_problem1_edit', 'Инверсия_inversion_edit', 'Недавно-прошедшие_news_edit', 'Доказательство-9_print_edit', 'Доказательство-10_print_edit', 'Задача-1_problem1_edit', 'Коники_print_edit', 'Свойства_print_edit', 'Обновления_news_edit', 'Доказательство-9_print_comment', 'Доказательства-свойств_print_comment', 'Рисунок-11_print_edit', 'Доказательство_fact7_comment', 'Подсказка-4_print_edit', 'Рисунок-8_print_edit', 'Рисунок_problem4_comment', 'Подсказка-6_print_comment', 'Упражнения_orthocenter_edit', 'Задача-3_problem3_comment', 'Теория-1_print_edit', 'Свойства-1_print_comment', 'Изогональное-сопряжение_print_edit', 'Дополнение_foreword_comment', 'Теория_print_comment', 'Доказательство_print_comment', 'Доказательство-6_print_edit', 'Подсказка_fact9_edit', 'Задачи_print_edit', 'Доказательства-свойств-1_print_comment', 'Недавно-прошедшие_print_edit', 'Факт-4_print_comment', 'Подсказка_fact8_edit', 'Факт-2_fact2_edit', 'Доказательство_fact10_comment', 'Вокруг-ортоцентра_orthocenter_comment', 'Методы_index_comment', 'Поворот-вектора_rotate_vector_comment', 'Факт-7_print_edit', 'Рисунок-12_print_comment', 'Касание_print_edit', 'Новости_print_edit', 'Предисловие_foreword_edit', 'Задачи_problems_edit', 'Свойства_homothetic_edit', 'Свойства_print_comment', 'Радикальная-ось_print_comment', 'Касание_touching_comment', 'Рисунок_fact7_edit', 'Как-читать-эту-книгу_index_comment', 'Факт-6_print_comment', 'Подсказка-10_print_comment', 'Рисунок-3_print_edit', 'Факт-8_print_comment', 'Рисунок-9_print_edit', 'Решение-задач-с-помощью-инверсии_inversion_comment', 'Рисунок_fact9_edit', 'Доказательство-11_print_edit', 'Свойства_orthocenter_comment', 'Подсказка-8_print_edit', 'Подсказка_fact7_comment', 'Доказательство_problem3_edit', 'Предстоящие_news_edit', 'Свойства_inversion_edit', 'Рисунок_fact8_edit', 'Предстоящие_print_comment', 'Рисунок-7_print_edit', 'Рисунок_fact6_edit', 'Доказательство-6_print_comment', 'Подсказка-11_print_edit', 'Педальные-треугольники_print_comment', 'Подсказка_problem4_edit', 'Задачи_problems_comment', 'Упражнения_print_comment', 'Задачи_foreword_edit', 'События_print_edit', 'Доказательство_fact2_comment', 'Задачи_index_comment', 'Рисунок-1_print_comment', 'Доказательство_fact9_comment', 'Как-читать-эту-книгу_foreword_comment', 'Задача-2_problem2_comment', 'Подсказка-3_print_comment', 'Доказательство_fact1_edit', 'Доказательство_fact3_comment', 'Факт-10_fact10_edit', 'Факты_facts_edit', 'Решение-задач-с-помощью-гомотетии_homothetic_comment', 'Факт-4_fact4_comment', 'Доказательство-8_print_comment', 'Задача-4_problem4_comment', 'Задача-2_problem2_edit', 'Задачи-1_print_edit', 'Доказательство_fact7_edit', 'Упражнения_orthocenter_comment', 'Теория_index_edit', 'Преобразования-плоскости_transformations_edit', 'Задачи_index_edit', 'Рисунок-5_print_edit', 'Известные-факты_print_comment', 'Дополнение_print_comment', 'Доказательство_fact10_edit', 'Подсказка_fact3_edit', 'Дополнение_index_edit', 'Факт-2_fact2_comment', 'Преобразования-плоскости_print_edit', 'Подсказка-6_print_edit', 'Теория_foreword_comment', 'Предстоящие_news_comment', 'Факты_print_comment', 'Новости_print_comment', 'Задача-4_print_edit', 'Рисунок_fact6_comment', 'Доказательство_print_edit', 'Рисунок_fact4_comment', 'Факт-1_fact1_comment', 'Доказательство-3_print_edit', 'Рисунок_problem1_comment', 'Рисунок_fact10_comment', 'Рисунок_fact7_comment', 'Что-я-могу-тут-найти_foreword_edit', 'Рисунок-4_print_edit', 'Вокруг-ортоцентра_print_edit', 'Обновления_print_comment', 'Недавно-прошедшие_print_comment', 'Факт-3_print_comment', 'Рисунок_problem4_edit', 'Задачи_foreword_comment', 'Рисунок-12_print_edit', 'Доказательства-свойств-2_print_comment', 'Инверсия_print_comment', 'Факты_print_edit', 'Гомотетия_homothetic_comment', 'Доказательства-свойств_orthocenter_comment', 'Рисунок_fact5_comment', 'Новости_news_comment', 'Подсказка_fact10_edit', 'Известные-факты-1_print_comment', 'Вокруг-ортоцентра_orthocenter_edit', 'Подсказка-13_print_edit', 'Доказательство_problem1_comment', 'Теория_index_comment', 'Подсказка_fact9_comment', 'Задача-3_print_edit', 'Радикальная-ось_radical_line_comment', 'Факт-5_fact5_edit', 'Рисунок_print_edit', 'Подсказка_print_comment', 'Задача-1_problem1_comment', 'Симедиана_print_comment', 'Факт-9_print_comment', 'Подсказка_fact3_comment', 'Рисунок-2_print_comment', 'Доказательство-12_print_edit', 'Доказательство-7_print_edit', 'Факты-1_print_edit', 'Обновления_print_edit', 'Задача-1_print_comment', 'Рисунок_fact1_comment', 'Подсказка_fact2_comment', 'Факт-5_print_edit', 'Рисунок_problem2_edit', 'Факты_facts_comment', 'Доказательство-4_print_edit', 'Точка-Микеля_print_comment', 'Подсказка_fact4_comment', 'Примечание_print_edit', 'Преобразования-плоскости_print_comment', 'Методы-1_print_comment', 'Подсказка_fact5_comment', 'Теория_print_edit', 'Площадь_print_edit', 'Подсказка-5_print_edit', 'Доказательство_problem2_edit', 'Решение-задач-с-помощью-инверсии_inversion_edit', 'Дополнение_print_edit', 'Доказательство_fact9_edit', 'Для-кого-эта-книга_foreword_edit', 'Подсказка_fact2_edit', 'Методы_print_comment', 'Факт-8_print_edit', 'Факт-10_fact10_comment', 'Доказательство_problem2_comment', 'Гомотетия_homothetic_edit', 'Подсказка-3_print_edit', 'Подсказка-5_print_comment', 'Подсказка-7_print_edit', 'Известные-факты_inversion_edit', 'Факт-6_fact6_comment', 'Решение-задач-с-помощью-инверсии_print_comment', 'Рисунок-2_print_edit', 'Что-я-могу-тут-найти_foreword_comment', 'Подсказка_fact5_edit', 'Предисловие_foreword_comment', 'Доказательства-свойств_homothetic_comment', 'Рисунок_print_comment', 'Гомотетия_print_edit', 'Рисунок-11_print_comment', 'Доказательство_fact5_edit', 'Касание_touching_edit', 'Педальные-треугольники_pedal_comment', 'Что-я-могу-тут-найти_index_edit', 'Известные-факты_homothetic_comment', 'Задача-2_print_comment', 'Подсказка_problem4_comment', 'Рисунок_fact9_comment', 'Рисунок-9_print_comment', 'Доказательство-4_print_comment', 'Свойства_homothetic_comment', 'Подсказка-9_print_comment', 'Доказательства-свойств_inversion_comment', 'Подсказка_fact1_edit', 'Методы-1_print_edit', 'Подсказка-1_print_comment', 'Подсказка-11_print_comment', 'Упражнения_print_edit', 'Что-я-могу-тут-найти_print_comment', 'Доказательство-7_print_comment', 'Факт-7_print_comment', 'Подсказка_problem1_edit', 'Подсказка_print_edit', 'Факт-2_print_edit', 'Подсказка_fact10_comment', 'Доказательство-12_print_comment', 'Доказательство_fact5_comment', 'Свойства-1_print_edit', 'Рисунок_fact1_edit', 'Задача-3_problem3_edit', 'Рисунок_problem2_comment', 'Известные-факты_print_edit', 'Задача-2_print_edit', 'Доказательства-свойств-1_print_edit', 'Подсказка-2_print_edit', 'Инверсия_print_edit', 'Коники_conics_comment', 'Поворот-вектора_print_edit', 'Методы_methods_comment', 'Доказательство-8_print_edit', 'Доказательство_fact6_edit', 'Рисунок-6_print_comment', 'Теория-1_print_comment', 'Доказательство-1_print_edit', 'Доказательства-свойств-2_print_edit', 'Подсказка-12_print_comment', 'Факт-3_fact3_comment', 'Педальные-треугольники_pedal_edit', 'Как-читать-эту-книгу_print_edit', 'Подсказка_fact1_comment', 'Факт-6_fact6_edit', 'Методы_print_edit', 'Рисунок_fact4_edit', 'Факт-5_print_comment', 'Подсказка_problem2_comment', 'События_news_comment', 'Дополнение_index_comment', 'Рисунок-5_print_comment', 'События_news_edit', 'Свойства_inversion_comment', 'Доказательство-3_print_comment', 'Факты-1_print_comment', 'Доказательство_fact1_comment', 'Решение_print_edit', 'Подсказка_fact4_edit', 'Доказательство-1_print_comment', 'Педальные-треугольники_print_edit', 'Подсказка_fact8_comment', 'Подсказка_fact7_edit', 'Рисунок-10_print_comment', 'Доказательство-2_print_comment', 'Задачи_print_comment', 'Доказательство_fact8_comment', 'Подсказка-8_print_comment', 'Факт-4_fact4_edit', 'Подсказка-9_print_edit', 'Симедиана_print_edit', 'Для-кого-эта-книга_index_edit', 'Факт-10_print_comment', 'Известные-факты_inversion_comment', 'Теория_theory_edit', 'Факты_foreword_comment', 'Методы_foreword_edit', 'Рисунок-3_print_comment', 'Доказательство-11_print_comment', 'Факт-3_print_edit', 'Доказательства-свойств_inversion_edit', 'Факт-2_print_comment', 'Как-читать-эту-книгу_foreword_edit', 'Подсказка-13_print_comment', 'Как-читать-эту-книгу_index_edit', 'Рисунок_fact3_comment', 'Факты_foreword_edit', 'Примечание_problem1_comment', 'Площадь_area_edit', 'Решение_problem4_comment', 'Предисловие_index_edit', 'Известные-факты-1_print_edit', 'Факт-9_fact9_comment', 'Рисунок_problem3_edit', 'Факт-1_fact1_edit', 'Коники_print_comment'];


	for (i in iconsIds) {
        let iconId = iconsIds[i];

	    setIconStyle(iconId);
    }

	bindEdit();
	bindComment();


    



}



main()
