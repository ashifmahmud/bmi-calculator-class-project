document.getElementById("submit").addEventListener("click",bmiCalculator)

function bmiCalculator(){

  let cm = parseFloat(document.getElementById("cm").value)
  let kg = parseInt(document.getElementById("kg").value)

  if(cm<10){
    let n = (cm+"").split(".")

    cm = (parseInt(n[0])*12 + parseInt(n[1]))*2.54;
  }

  let bmi;

  let newCm = parseFloat(cm/100)
  bmi = kg/(newCm*newCm)

  bmi = bmi.toFixed(1)

  let uw = ["Under weight, eat healthy!", "Don't fly away with wind!", "Lighter than a feather!"]
  var fit = ["Wow! You're so fit!", "Thanks for being fit", "Very attractive!"]
  var ow = ["Diet and workout is fun you know?", "Let's not eat fast food!", "Let's walk in every morning!"]
  var ob = ["Be careful!","Don' let your body down!", "Let's go workout!"]

  var x = Math.floor(Math.random()*3);
  
  if(bmi<18.6){
    document.getElementById("result").innerHTML  = bmi;
    document.getElementById("result").style.color  = "yellow";
    document.getElementById("comment").innerHTML  = uw[x];
  }
  else if(bmi>=18.6 && bmi<=24.9){
    document.getElementById("result").innerHTML  = bmi;
    document.getElementById("result").style.color  = "green";
    document.getElementById("comment").innerHTML  = fit[x];
  }
  else if(bmi>24.9 && bmi<=29.9){
    document.getElementById("result").innerHTML  = bmi;
    document.getElementById("result").style.color  = "orange";
    document.getElementById("comment").innerHTML  = ow[x];
  }
  else{
    document.getElementById("result").innerHTML  = bmi;
    document.getElementById("result").style.color  = "red";
    document.getElementById("comment").innerHTML  = ob[x];
  }


}