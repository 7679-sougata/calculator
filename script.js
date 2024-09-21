let string = "";
let display = document.getElementById("screen");

let buttons = document.querySelectorAll("button");
let arr=Array.from(buttons);





arr.forEach(button =>{
    button.addEventListener("click" ,(e) =>{
        if(e.target.innerHTML == "=")
        {
            // console.log(display.value);
            if(display.value != "")
            {
                string=display.value;
                let str_lastvalue =string.slice(string.length-1);
                if( str_lastvalue == "+" ||str_lastvalue == "-" ||str_lastvalue == "*" ||str_lastvalue == "/" )
                {
                    display.value ="error";
                }
                else
                {
                    string=eval(string);
                    display.value=string;
                }
            }
            let str_lastvalue =string.slice(string.length-1);
            if( str_lastvalue == "+" ||str_lastvalue == "-" ||str_lastvalue == "*" ||str_lastvalue == "/" )
            {
                display.value ="error";
            }
            else
            {
                string = eval(string);
                display.value= string;
            }
        }
        else if(e.target.innerHTML == "AC")
        {
            string = "";
            display.value =string;
        }
        else if(e.target.innerHTML == "Del")
        {
            string = string.slice(0,string.length-1);
            display.value = string;
        }
        else
        {
            string += e.target.innerHTML;
            display.value = string;
        }
    })
})