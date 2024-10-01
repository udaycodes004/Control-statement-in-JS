let x=prompt("enter first number");
let y=prompt("enter second number");
let ans=0;
if(x>y){
    console.log("cannot perfrom operation")
    
}else{
    for(let i=x;i<=y;i++){
        ans+=(i**3);
    }
}
console.log(ans);