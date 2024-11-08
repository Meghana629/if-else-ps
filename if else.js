num=prompt("enter a number")
for(i=num;!(i>=-0);i++){
    console.log(i)
}

num=prompt("enter a number")
for(i=-5;!(i>=0);i++){
    console.log(i)
}

num=prompt("enter a number")
sum=0
if(num>0){
    for(i=1;i<num.length;i++)
        if(num[i]%2==0)
            sum=sum+Number(num[i])
}
console.log(sum)


num=prompt("enter a number")
sum=0
if(num>0){
for(i=0;i<num.length;i++)
    if(!(num[i]%2==0)){
        sum=sum+Number(num[i])
}
}
console.log(sum)
