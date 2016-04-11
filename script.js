function dreamFunction() {
var hoursSlept = prompt("How many hours do you sleep in a day?");
while(hoursSlept >=24 || hoursSlept <=0){
	var hoursSlept = prompt("hmmmm I don't think you sleep that much haha: please insert how many hours you sleep per day");
}
var freeTime = (24-hoursSlept);
var dreamTime = prompt("How many hours do you work on your dream everyday?");
while(dreamTime> freeTime || dreamTime <= 0){
	var dreamTime = prompt("hmmm please make shure you insert the right amount of hours you spend working on your dream everyday");
}
var dreamPercent = ((dreamTime / freeTime) * 100);
var dreamPercent = Math.floor(dreamPercent);
if( dreamPercent >= 50){
	var Motavation = $("#motavation").html("<p>You are doing super awesome why are you even here haha keep up the goood work</p>");
}
else{
	var Motavation = $("#motavation").html("<h1>you only work on your dream</p>" + dreamPercent + "%" + "<h1>of your free time do you really think that is enough?</h1>" +
	 "<p>How much time do you think Bill Gates spent working on his dream?</p>" +
	 "<p>What about Steve Jobs the founder of Apple, do you think he was just eating apple's all day and Apple was just invented?</p>" +
	 "<p>Warren Buffet one of the world's most succesful invester's was he just watching tv more then he was working on his dream's?</p>" +
	 "<p>Donald Trump ohhhh man don't even get me started lol</p>" +
	 "<p>Chris Gardner was homeless and still working on his Dreams 24/7</p>" +
	 "<p>All of these people worked on their Dreams no matter the circumstance</p>" +
	 "<p>What is your excuse for only working on your dream less then 50% of your free time?..........</p>");
};
		$(document).ready(function(){
		    $("#video").ready(function(){
		        $("#video").show();
		        $("button").hide();
		    });
		});
};
