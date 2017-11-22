document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";

function calculateTip() {
    var billAmt = document.getElementById("billAmt").value;
    var service = document.getElementById("service").value;
    var count = document.getElementById("count").value;
    
    if(billAmt === "" || service == 0)
        {
            window.alert("Give some value to get it going!!");
            document.getElementById("totalTip").style.display="none";
        }
    else if (count <0){
        window.alert("Number of people cannot be less than 0");
    }
    
    else{
         if (count == 0 || count == null)
        {
            count = 1;
        }
            var total = (billAmt * service) / count;
            document.getElementById("total").innerHTML= total.toFixed(2);
            document.getElementById("totalTip").style.display = "block";
        if(count!=1 )
            {
                document.getElementById("each").style.display="block";
            }
    }
   
    
}
document.getElementById("button").onclick = function() { calculateTip();};