function test() {

  var x = [];
  var j=0;
  var fname= prompt("Enter value to factorize");

    
     if(fname>0) {

     for(var i=1; i<fname; i++) {
  
           if(fname%i==0) { 

            x[j]=i;
            j++;
                          }
    document.getElementById("demo").innerHTML= `The Prime Factors of ${fname} are ${x}`;

                                }
                }
 else {
   document.getElementById("demo").innerHTML = "Your Number must be greater than zero";
 }
 }
 