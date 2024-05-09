/*values of plants and areas*/
const gardenRadius = 5;
const plantRadius = 0.8;
const plantsWeekOne = 20;
const plantsWeekTwo = 40;
const plantsWeekThree = 80;
/*for part two*/
const plantsWeekTen = 51200;
/*const plantsWeekTen = */
const PI = 3.1415;
const gardenArea = PI * gardenRadius * gardenRadius;
const plantArea = PI * plantRadius * plantRadius;

/*functions to find out what you should do with the garden.*/
if (plantArea > 0.8 * gardenArea)
 {console.log("Prune")}

if (plantArea >= 0.5 * gardenArea && plantArea <= 0.8 * gardenArea)
 {console.log("Monitor")}
 
if (plantArea < 0.5 * gardenArea)
 {console.log("Plant")}

/*prediciton of plant growth after number of weeks */
console.log(
    `Plant growth after the first week is ${plantsWeekOne * plantArea}`
 )
console.log(
    `Plant growth after the second week is ${plantsWeekTwo * plantArea}`
 )
console.log(
    `Plant growth after the third week is ${plantsWeekThree * plantArea}`
)
console.log(
    `You would need this much additional space after 10 weeks; ${plantsWeekTen * plantArea - gardenArea}.`
)

try {
    100 * plantArea === gardenArea
}
catch(err) {
    /*plantArea * plantsWeekOne == gardenArea*/
}
throw "you dumb"; //throw a text
