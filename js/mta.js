window.onload = function() {

// banana = document.getElementById('heading');

// function newFunction() {

// apple = document.getElementById('testing');
// console.log(banana);
// console.log(apple);
// };

// newFunction();

var nLine = ['times-square', '34thN', '28thN', '23rdN', 'union-square', '8thN'];


document.getElementById('calcButton').addEventListener('click',function(){
  var startStation = document.getElementById('startList').value;
  var endStation = document.getElementById('endList').value;
  distance(startStation, endStation);
});


function distance(start,end) {
  var iStart= nLine.indexOf(start);
  var iEnd = nLine.indexOf(end);
  var noStops = Math.abs(iEnd-iStart);
  var message = noStops===1 ? '1 stop' : noStops+' stops'; 
  console.log('Take the N line for '+message);
  return('Take the N line for '+message);
};

};