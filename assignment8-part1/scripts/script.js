//Practice with jQuery Events (5 points)	
//In this part of the assignment you will practice working with jQuery events. Code the following within a new web page to successfully complete this part of the assignment:

$(document).ready(function () {


    //1.	Create a button on a web page. Use the .click() method to display an alert message to the user indicating that the button has been clicked when the button is actually clicked. 
//        $("button").click(function (event) {	                       window.alert("You just pressed my button");
//        });

    //2.	Create a button on a web page. Attach the click event using the .bind() method to display an alert message to the user indicating that the button has been clicked when the button is actually clicked. 
//        $("button").bind("click", function (event) {	                       window.alert("Now You just pressed my button");
//        });

    //3.	Create a button on a web page. Attach the click event using the .on() method to display an alert message to the user indicating that the button has been clicked when the button is actually clicked.
//        $("button").on("click", function (event) {	                       window.alert("You just pressed my button");
//        });      

    //4.	Create two buttons on a web page. Attach the click event to both buttons using a single handler using the .on() method. Again, an alert message should be displayed to the user indicating that a button has been clicked when either of the buttons are actually clicked.
//            $("#button1, #button2").on("click", function (event) {	                       window.alert("You just pressed one of my two buttons");
//        }); 

    //5.	Create a div on a web page. Use jQuery to set the div element to 400px wide and 400px high. Attach the click, mouseenter, and mouseleave events using the .on() method. Display an alert message to the user indicating that the div was either clicked on, the mouse entered it, or the mouse left it. 
//    $("div").css("width", 400).css("height", 400).css("background-color", "pink");
//    $("div").on("mouseenter mouseleave click", function() {
//            window.alert("The mouse hovered over,left the div or the div was clicked");
//        });
    //6.	Rewrite the code from number 5. This time add a span tag to the web page. Display three different messages within the span tag when the user enters the div, leaves the div, or clicks on the div.
//    $("div").css("width", 400).css("height", 400).css("background-color", "pink");
//    $("div").on({
//        mouseenter: function() {$("span").text("You hovered over the Div");},
//        mouseleave: function() {$("span").text("You left the Div");},
//        click: function() {$("span").text("You clicked on the Div");}
//    });

    //7.	Create a link within the web page and set its href attribute to browse to google.com. When the user clicks the link, first, prevent it from redirecting to that web site. Second, programmatically style the link so that its color changes to red. Third, display the name of the node that triggered the event within an alert box.

//    $( "a" ).on("click", function( event ) {
//      event.preventDefault();
//    $("a").css("color", "red");
//        window.alert(event.currentTarget.tagName);
//    });


    //8.	Create a div tag within the web page. As the user resizes the browser, display the width and height of the browser window within the div tag.
//    $(window).resize(function() {
//        $("div").text($(window).width());
//    });    

    //9.	Create a text field using the <input> tag. When the input has focus, set the background to a light gray color. When the input does not have focus, reset the background back to a white color.
//    $("input#input1").on({
//        mouseenter: function() { $("input#input1").css("background-color", "lightgrey");},
//        mouseleave: function() { $("input#input1").css("background-color", "white");}
//    });


    //10.	Add a form tag within a web page complete with 2 input fields: one that collects name and a second that collects an email. Add a submit button. When the user submits the form, if any one of the two fields is left empty, display an alert box to the user indicating that the fields are required. Give the field that the user left empty a red border. If both fields have values in them, set their borders to green.
//        $("button").on("click", function(event) {
//            event.preventDefault();
//            var name = $("[name=name").val();
//    
//            var email = $("[name=email").val();  
//            if (name !== "" && email !=="") {
//                /*  Both fields have values in them. Outline form with green */
//                $("[name=name]").css("border", "1px solid green");
//                $("[name=email]").css("border", "1px solid green");          
//            } else { /* Name or email input was left blank, Generate error msgs and change from border color to red */
//                /* Generate Error Message Header */
//                $("#errorMsgs").append("FORM ERROR MESSAGE(S): </br>").css("font", "1.5em bold").css("color", "red"); 
//                /* Determine where errors occcured and display error message(s) */
//                if (name == "") {
//                    /* Add error msg to div and turn form border to red */
//                    $("#errorMsgs").append("-> Name cannot be left blank </br>");
//                    $("[name=name").css("border", "1px solid red");        
//                } 
//                if (email == "") {
//                    /* Add error msg to div and turn form border to red */
//                    $("#errorMsgs").append("-> Email cannot be left blank </br> ");
//                    $("[name=email").css("border", "1px solid red");
//                }
//            }
//        });
//    //The Calculator III (5 points)
//    //In this part of the assignment you will practice working with jQuery events, styles, and DOM manipulation to create an even better version of the calculator that you created in previous assignments. In this part of the assignment you will use jQuery events to handle the interaction between the user and each button in the calculator. You will also use jQuery styling techniques to stylize all of the calculator buttons and the display. To complete this, follow the steps outlined below:
//    //1.	Notice the markup that I’ve included for you in the web page. There is a text box that will display the value of each button click and 16 different buttons each of which represents a major key on a basic calculator. Begin by referencing the jQuery library and then immediately wire up the jQuery .ready() function. 
//    //2.	This first part will require you to stylize all of the buttons programmatically. Using jQuery make each button the same width and height, give each button a unique background color, border style, width and color. Also, give the display a unique background color, set the font color and size, and set a unique border style, width, and color.
//    //3.	Reference the “bubble capture” code from assignment 6. Rewrite this code so that it uses jQuery events and makes use of jQuery DOM manipulation techniques to set the display based on button selections made.
//
//    /* Set attributes of buttons */
//    var maxButtonCountPerRow = 4;
//    var numMarginsBetweenButtons = maxButtonCountPerRow - 1;
//    var buttonHeightVal = 125;
//    var buttonWidthVal = 125;
//    var marginVal = 15;
//    var totalMarginBetweenButtons = marginVal * 2;
//    $("[type=button]").height(buttonHeightVal).width(buttonWidthVal).css("margin", marginVal).css("background-color", "lightBlue").css("border", "10px grey groove").css("font", "2em darkblue");
//
//
//    /* Variables and formula to calculate size of input text box */
//    /* Get width size of button...including padding and borders */
//    var buttonWidth = $("[type=button]").outerWidth();
//    /* Calculate width of display based on # of buttons per row and margins in between them */
//    var setTextWidth = (buttonWidth * maxButtonCountPerRow) + ((maxButtonCountPerRow - 1) * (totalMarginBetweenButtons));
//
//    /* Debug -- show width of button and calculated size of text field in pixels */
//    window.console.log("ButtonWidth = " + buttonWidth);
//    window.console.log("Calculated text width = " + setTextWidth);
//
//    /* Set attributes of text input area */
//    $("#result").height(125).width(setTextWidth).css("margin", marginVal).css("background-color", "lightgreen").css("border", "15px darkgreen double").css("font", "3em darkgreen").css("padding", "10px");
//
//    /* Calculate Values  
//    
//     - Store entered keys in a string (displayString)                      
//     - When equal sign is pressed evaluate string using eval() method        
//     - After evaluated display results and "clearout" string 
//     - Need to account for:  2 scenarios:
//        -- Do not allow "-" sign to be followed by an operator and then "=".
//        -- Do not allow "-" sign followed by a "="
//        -- Fixed: Do not allow someone to enter number followed directly by an operator (other than "=") and then change that operator to =..should ignore "=" sign. 
//     
//     */
//    var evaluated = false;
//    var isNumValue = /[0-9]/;
//    var displayString = "";
//    var currInputValue = "";
//    var prevInputValue = "";
//    $("input").on("click", function (event) {
//            currInputValue = event.target["value"];
//            window.console.log("Current Input: " + currInputValue);
//            window.console.log("Display String: " + typeof displayString);
//            if (isValidInput(displayString, currInputValue)) {
//                window.console.log("Value entered isValid");
//
//                if (currInputValue == "=") {
//
//                    $("#result").val(eval(displayString)).css("text-align", "right");
//                    displayString = eval(displayString).toString();
//                    evaluated = true;
//
//                } else { /* value entered is not equal sign" */
//                    window.console.log("Value entered isValid but currInputValue is not equal sign "); 
//                    /* if previously evaluated and user enters something other than a operator
//                        then set the display value to the current input value and reset 
//                        evaluated to false
//                    */
// 
//                    if (evaluated && (isNumValue.test(currInputValue) || currInputValue == ".")) {
//                        window.console.log("Evaluated and next value is a number or decimal");
//                        displayString = currInputValue;
//                        $("#result").val(displayString).css("text-align", "right");
//                        evaluated = false;
//                    } else { /* continue building the string to be evaluated */
//                        displayString = displayString + event.target["value"];
//                        $("#result").val(displayString).css("text-align", "right");
//                        evaluated = false;
//                    }
//                }
//            } else { /* input is not valid  */
//                // Not sure I need this else statement
//                if (displayString.length > 0) {
//                    window.console.log("*****");                    
//                    prevInputValue = getPrevInputValue(displayString);
//                    window.console.log("displayString: " + displayString);
//                    window.console.log("currInputValue: " + currInputValue);
//                    window.console.log("prevInputValue: " + prevInputValue); 
//                    if (isOperator(currInputValue) && isOperator(prevInputValue)) {
//                        window.console.log("Replace Operator");
//                        // Replace priorInputValue with currInput value
//                        window.console.log("displayString BEFORE Replace: " + displayString);
//                        if (currInputValue !== "=") { /* allow user to replace operator */
//                            displayString = displayString.replace(prevInputValue, currInputValue);
//                            window.console.log("displayString AFTER Replace: " + displayString); 
//                            $("#result").val(displayString).css("text-align", "right");                            
//                        } else { /* input is "=" so ignore it and just refresh display */
//                            $("#result").val(displayString).css("text-align", "right");                           
//                        }
//                    } else { /* displayString >0 & input is invalid & curr and preInputVals not both operators  */
//                        /* Check to see if prevInputValue is "-" and currInputValue is an operator  */ 
//                        if (prevInputValue == "-" && isOperator(currInputValue)) {  
//                           $("#result").val(displayString).css("text-align", "right");  
//                        } 
//                    }
//                } else { /* string value = 0 */
//                    window.console.log("Invalid Input and String length = 0");
//                    if ( isOperator(currInputValue) ) {
//                        displayString = "";
//                         $("#result").val(displayString).css("text-align", "right");    
//                    }
//                }
//            }        
//
///*****  NOTE: The code below is related to validation and error checking input...I disabled it because there was a bug in it */         
//        function isValidInput(str, inputValue) {
//            return true;
////            window.console.log("Str value: " + str + " String length: " + str.length);
////            var isValidInput = true;
////            var twoPriorInput = "";
////            var moreThanTwoOperands = false;
////            if (str.length == 0) {
////                if (isOperator(inputValue)) {
////                    return isValidInput = false;
////                } else {
////                    return isValidInput = true;
////                }
////            } else { /* str.length > 0 */
////                var prevInputPosition = str.length - 1;
////                prevInput = str.substring(prevInputPosition);
////                if (str.length >= 2) {
////                    moreThanTwoOperands = true; 
////                    twoPriorInput = str.substring((str.length - 2), (str.length - 1));                     
////                }
////                
////                window.console.log("***** Debug for isValidInput ********"); 
////                window.console.log("isValidInput-> str: " + str);
////                window.console.log("isValidInput-> str.length: " + str.length);
////
////                window.console.log("isValidInput->inputValue : " + inputValue);
////                window.console.log("isValidInput->prevInputValue : " + prevInput);
////                window.console.log("isValidInput-> moreThanTwoOperands: " + moreThanTwoOperands); 
////                if (moreThanTwoOperands) {
////                   window.console.log("twoPriorInput : " + twoPriorInput); 
////                };
////                window.console.log("isValidInput->inputValue is operator: " + isOperator(inputValue));
////                window.console.log("isValidInput->prevInput is operator: " + isOperator(prevInput));
////                
////               switch (inputValue) {
////                    case '=':
////                       if (prevInput == ".") {
////                           
////                        if (moreThanTwoOperands && (isOperator(twoPriorInput) || twoPriorInput == "-") ) {
////                           isValidInput = false; 
////                        }
////                       }
////                       if (prevInput == "-") {
////                           isValidInput = false
////                       }
////                       if (prevInput == "-" || isOperator(prevInput)) {
////                           isValidInput = false;
////                       }
////                        return isValidInput;
////                        break;
////                   case '-':
////                       if (prevInput == "-" ) {
////                           isValidInput = false;
////                       }
////                    if (moreThanTwoOperands && (isOperator(twoPriorInput) || twoPriorInput == "-") ) {
////                        isValidInput = false; 
////                    }
////                       
////                       return isValidInput;
////                       break; 
////                       
////                   case '.':
////                       window.console.log("Decimal Case Statement");
////                       window.console.log("prevInput = " + prevInput); 
////
////                        if (prevInput == ".") {
////                            isValidInput = false;
////                            window.console.log("Decimal Case: isValidInput false because prevInput is a decimal");
////                        }
//////                }
////                        window.console.log("isValidInput = " + isValidInput);
////                        return isValidInput;
////                        break;  
////                       
////                       
////////                   case '*':
////////                   case '/':
////////                   case '+':
////////                       window.console.log("Case statement for operator"); 
////////                       if (isOperator(prevInput)) {
////////                           isValidInput = false;
////////                       }
////////                       if (prevInput == "-") {
////////                           isValidInput = false;
////////                       }
////////                       if (prevInput == ".") {
////////                           isValidInput = false; 
////////                       }
////////                       if (moreThanTwoOperands && (isOperator(twoPriorInput) || twoPriorInput == "-") ) {
////////                           isValidInput = false; 
////////                        }
////////                       window.console.log("isValidInput: " + isValidInput)
////////                       return isValidInput;
////////                       break; 
////    
////                    default:
////                       return isValidInput;
////                    }             
////
////
////            }
//        }
////
//// 
////
////        function isOperator(strValue) {
////            switch (strValue) {
////            case '/':
////                return true;
////                break;
////            case '*':
////                return true;
////                break;
////            case '+':
////                return true;
////                break;
////            case '=':
////                return true;
////                break;
////            default:
////                return false;
////            }
////        }
//
////        function getPrevInputValue(str) {
////            var prevInputValue;            
////            var prevInputPosition;
////            window.console.log("***GPIV: str value: " +  str);
////            if (str.length > 0) {
////                prevInputPosition = str.length - 1;
////                prevInputValue = str.substring(prevInputPosition);
////                window.console.log("***GPIV: prevInputValue: " + prevInputValue); 
////                return prevInputValue;  
////            } else {
////                return null;
////            }
////
////        }
//    });

});