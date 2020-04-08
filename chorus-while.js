/* This outputs the 1975 funk song "Why can't we be friends?" by the band "War" */


const chorus = "Why can't we be friends?";
let repeat = 0;
while (repeat < 16) {
switch(repeat) {
 case 4: 
  console.log("I seen ya around for a long long time")
  console.log("I really remember you when you drank my wine");
  break;
 case 8:
  console.log("I'd seen ya walking down in Chinatown")
  console.log("I called ya but you could not look around");
  break;
 case 12:
  console.log("I pay my money to the welfare line")
  console.log("I see ya standing in it every time")
}
console.log(chorus);	
repeat++			
}
console.log("The color of your skin don't matter to...")