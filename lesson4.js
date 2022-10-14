function buttonClick() {
	var input = document.getElementById('input');
	alert(input.value);
}

var months = [
		'янв', 'фев', 'мар', 'апр', 'май', 'июн',
		'июл', 'авг', 'сен', 'окт', 'ноя', 'дек' ];
var date = new Date();
var month = date.getMonth();
alert(months[month]);