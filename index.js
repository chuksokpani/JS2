
let data = [{principal: 2500, time: 1.8}, 
    {principal: 1000, time: 5},
    {principal: 3000, time: 1},
    {principal: 2000, time: 3}];

function interestCalculator(moneyArray) {
const interestData =[]; /*First declare an empty array so you use the push() 
method to insert the values after looping through*/

  for (const index of moneyArray) {
    
        if( (index.principal >=2500) && (index.time >= 1) && (index.time < 3)){
            index.rate =3;

        }
        else if ( (index.principal >= 2500) && (index.time >=3) ){
            index.rate = 4;   

        } 
        else if ( (index.principal<2500) || (index.time <=1) ){
            index.rate = 2;

        } else {
            index.rate =1;
        }
        
    index.interest = (index.principal * index.time * index.rate)/100;
    
    interestData.push(index);
   
    }
 console.log(interestData);
 return interestData; 
}

interestCalculator(data);











/*let data2 = [{principal: 5000, time: 1.8}, 
    {principal: 1000, time:4 },
    {principal: 3000, time: 1},
    {principal: 200, time: 3}];

let data3 = [{principal: 25000, time: 7}];

    interestCalculator(data2);
    interestCalculator(data3)
Used these to further test the code*/