function checkSpeed() {
	let speed = document.getElementById("speed-input").value;
    let demeritPoints = Math.floor((speed - 70) / 5);
	if (speed <= 70) {
		return document.getElementById("output").innerHTML = "Ok";
	} else{
		if(demeritPoints <= 12){
			return document.getElementById("output").innerHTML = "Demerit points: " + demeritPoints;
		}else{
			return document.getElementById("output").innerHTML = "Demerit points: " + demeritPoints + " License Suspended";

		}
		
        
	}}
