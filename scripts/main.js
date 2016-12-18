var ourRequest = new XMLHttpRequest();
ourRequest.open("GET" , "http://api.railwayapi.com/between/source/koaa/dest/bpc/date/18-12/apikey/x4d0xe30/")
ourRequest.onload = function(){
		var wholeData = JSON.parse(ourRequest.responseText);
		createHtml(wholeData);
};

ourRequest.send();


function createHtml(data){
	var trainTemplate = document.getElementById("train-template").innerHTML;
	var compiledTemplate = Handlebars.compile(trainTemplate);
	var ourGeneratedHtml = compiledTemplate(data);

	var trainContainer = document.getElementById("train-container");
	trainContainer.innerHTML = ourGeneratedHtml;
}