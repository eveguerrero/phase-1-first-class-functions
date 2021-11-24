function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  
  function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
  }
  
  function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  function runFiveMiles() {
    console.log("Go for a five-mile run");
  }

  function liftWeights() {
    console.log("Pump iron");
  }
  
  function swimFortyLaps() {
    console.log("Swim 40 laps");
  }

  function Monday() {
    runFiveMiles();
    liftWeights();
  }
  exerciseRoutine(function () {
    console.log("Stretch! Work that core!");
  });

  exerciseRoutine(() => {
    console.log("Stretch! Work that core!");
  });

  function receivesAFunction(callback){
    callback("Hi");
    
  }

  function returnsANamedFunction() {
    return function example() {};
  }
  
  function returnsAnAnonymousFunction(){
      return ()=>{};
  }

  





