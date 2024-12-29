let score=[75,65,95,85,55,34,54,52,71,56];
let count=0
let sum=0
for(let i=0;i<=score.length-1;i++){
   
    if(score[i]<40){
      sum=score[i]+20
      
    }
    else if(score[i]>90){
        score[i]=90;
    }
    if(score[i]>=50){
        count++
    }
    
}
console.log(count)
