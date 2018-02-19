$(function(){
	
	var apikey = '02f06782aa9cbc3026ed88bacc254c95'; // Instruct Key
	var apiUrl = 'https://api.forecast.io/forecast/';
	var suffix = '?units=si&callback=?';
	
	navigator.geolocation.getCurrentPosition(sucess, error);
	
	function sucess(position){
		console.log('Successfully got Weather.');
		
		var longitude = position.coords.longitude;
		var latitude = position.coords.latitude; // נקודות latitude
		
		$.getJSON(apiUrl + apikey + '/' + latitude + ',' + longitude + suffix,function(data){
			console.log(data);			

			var timezone = data.timezone;
			var icon = data.currently.icon;
			var temperature = data.currently.temperature;
			var summary = data.currently.summary;
			var daily = data.daily.data;

			document.getElementById("latitude").innerHTML = latitude; //מכניס את תוכן המשתנה לאטיטיוד לתוך הדף לאלמנט שהאיידיי שלו הוא לאטיטיוד
			document.getElementById("longitude").innerHTML = longitude;
			document.getElementById("Location").innerHTML = timezone;
			document.getElementById("Icon").innerHTML = "<img src=img/"+icon+'.png'+">";
            console.log("<img src="+icon+'.png'+">");
			document.getElementById("Temp").innerHTML = temperature;
			document.getElementById("Summary").innerHTML = summary;
			
			for(var i = 0;i<8;i++){ // daily information.
               
                 
                document.getElementById("Icon_"+i).innerHTML = "<img src="+"img/"+daily[i].icon+'.png'+">";
                console.log("<img src="+daily[i].icon+'.png'+">");
				document.getElementById("Min_"+i).innerHTML = 'Min: ' + daily[i].temperatureMin;
				document.getElementById("Max_"+i).innerHTML = 'Max: ' + daily[i].temperatureMax;
			}
		});
	}
	
	function error(){
		console.log('UnSuccessfull. Did not get weather.');
	}
})	
	
