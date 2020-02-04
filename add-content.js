var today = new Date ();
var hourNow =today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';}
    else if (hourNow > 12) 
    
    {greeting='Good afternoon!';
    }
else if (hourNow>0){greeting='Good morning!';}
else {greeting='Welcome!';}
document.write ('<h3>'+ greeting +'</h3>');
if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }

  var person = prompt("Please enter your name", "Harry Potter");

if (person == null || person == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + person + "! How are you today?";
}










