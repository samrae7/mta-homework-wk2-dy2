window.onload = function() {

  // banana = document.getElementById('heading');

  // function newFunction() {

  // apple = document.getElementById('testing');
  // console.log(banana);
  // console.log(apple);
  // };

  // newFunction();

  // var nLine = ['times-square', '34thN', '28thN', '23rdN', 'union-square', '8thN'];


  subway = {
    nLine: ['times-square', '34thN', '28thN', '23rdN', 'union-square', '8thN'],

    lLine: ['8thL','6thL','union-square','3rdL','1stL']
  }

  document.getElementById('calcButton').addEventListener('click',eventListener);


  function eventListener() {
    //declare noOfStop variable
    var noOfStops
    //get start
    var startStation = document.getElementById('startList').value;
    //get end station
    var endStation = document.getElementById('endList').value;
    //what line is startStation in? Store in variable
    var startLine = subway.nLine.indexOf(startStation)===-1 ? subway.lLine : subway.nLine;
    //what line is endStation in? Store in variable
    var endLine = subway.nLine.indexOf(endStation)===-1 ? subway.lLine : subway.nLine;

    //if they're the same call distanceOnLine(a.b.c)
    if (startLine===endLine) {
      noOfStops = distance(startStation, endStation, startLine);

      } else {
        //if the're different call distance OnLine on both of them using union-square as the other value. Then add the reusult together
      noOfStops = distance(startStation, 'union-square', startLine) + distance(endStation, 'union-square', endLine);
      
    };

    var message = noOfStops===1 ? '1 stop' : noOfStops+' stops';

    console.log('You have ' + message+' to your destination');

  };


  function distance(start,end,line) {
    var iStart= line.indexOf(start);
    var iEnd = line.indexOf(end);
    return Math.abs(iEnd-iStart);
  };

};