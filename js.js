let answer = ["сайт","мавпа","картопля","озеро","богдан","кава","картина","слоненя","зеркало","веселка"]
 let was = []
let progress = 0;
let num = Math.floor(1+Math.random()*10)
$(document).ready(function(){
$(".progress").knob({
	'min':0,
	'max':5,
	'angleOffset':-60,
	'angleArc':120,
	'width':'100%',
	'thickness':0.2,
	'lineCap':'round',
	'displayInput': false,
})

$("#rules").slideUp()
$(".slideRules").click(function(){
	$("#rules").slideToggle()
})
startRebus(num)
$("#btn1").click(function(){
if($("#inputTask1").val().toLowerCase() == `${answer[num-1]}`)
{
	alertify.success("Right answer!")
	$("#inputTask1").val("")
	progress++
	$(".progress").val(progress).trigger('change')
	was.push(num)
	if(progress< 5){
		do{
			num = Math.floor(1+ Math.random()*10)
		}
		while(was.includes(num))
			startRebus(num)
	}
	else{
		alert("You win!")
	}
	alertify.error("Wrong answer! Try again")
}
})
})
function startRebus(arg){
	$("#picture").attr("src", `./img/${arg}.png`)
}
