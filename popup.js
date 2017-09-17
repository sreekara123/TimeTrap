document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('button1').addEventListener('click', startClick)
});

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('button2').addEventListener('click', endClick)
});



let curTab;

let startTime;
let endTime;

function startClick() {
	startTime = new Date();
	
	hello();
}

function hello() {
  chrome.runtime.sendMessage({
		greeting: "hello"
    },
    function(response) {
		console.log(response);
		document.getElementById("URLlabel").innerHTML = response.msg;
    });
}


function endClick() {
	endTime = new Date();
	
	let timeElapsed = (endTime - startTime) / 1000;
	timeElapsed = Math.round(timeElapsed);
	document.getElementById('label1').innerHTML = 'Time Elapsed(s) = ' + timeElapsed;

}



