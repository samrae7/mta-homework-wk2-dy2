window.onload = function() {

  var noOfStops;

  subway = {
    nLine: ['times-squareN', '34thN', '28thN', '23rdN', 'union-square', '8thN'],

    lLine: ['8thL','6thL','union-square','3rdL','1stL'],

    sixLine: ['grand-central6', '33rd6', '28th6', '23rd6', 'union-square', 'astor-place6']
    }

  document.getElementById('calcButton').addEventListener('click',eventListener);

  function eventListener() {
    getNoOfStops();
    displayStops();
  }

  function getNoOfStops() {
    //get start
    var startStation = document.getElementById('startList').value;
    //get end station
    var endStation = document.getElementById('endList').value;
    //what line is startStation in? Store in variable
    var startLine = findLine(startStation);
    var endLine = findLine(endStation);

    // var endLine = subway.nLine.indexOf(endStation)===-1 ? subway.lLine : subway.nLine;

    //if they're the same line call distanceOnLine(a.b.c)
    if (startLine===endLine) {
      noOfStops = distance(startStation, endStation, startLine);

      } else {
        //if the're different call distance OnLine on both of them using union-square as the other value. Then add the result together
      noOfStops = distance(startStation, 'union-square', startLine) + distance(endStation, 'union-square', endLine);
      
    };

    return noOfStops;

  };


  function distance(start,end,line) {
    var iStart= line.indexOf(start);
    var iEnd = line.indexOf(end);
    return Math.abs(iEnd-iStart);
  };

  function findLine(station) {
    if (subway.nLine.indexOf(station)!==-1) {
      line = subway.nLine;
    }

    else if (subway.lLine.indexOf(station)!==-1) {
      line = subway.lLine;
    }

    else {
      line = subway.sixLine;
    }
    return line;
  };

  function displayStops() {
    
    var Xstops = noOfStops===1 ? '1 stop' : noOfStops+' stops';

   if(noOfStops===0){
       document.getElementById('message').innerHTML='Start and end stations must be different. Please re-enter.';
       return
    }

    document.getElementById('message').innerHTML='You have ' + Xstops +' to your destination'
  }

};