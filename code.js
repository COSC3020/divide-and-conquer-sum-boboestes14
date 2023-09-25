// i was stuck for a while and i looked at ClaytonBrown4741 code to try and help me with this project


//the date is 9/24/2023 and i just tried to fix my code, i curretnly have no idea why it dosent work. it should be working.
function divideAndConquerSum(a) {
    console.log("the array is " + a);
    if(a.length == 0)
        return 0;
    if(a.length == 1)
        return a[0];
    if(a.length == 2)
        return a[0]+a[1];
    b = conquer(a);
    console.log("ended answer is " + b);
    return a;
    
        
}

function conquer(a) {
    const b = Math.floor(a.length/3);
    
    if(a.length >= 3 && b >= 1){
        d = conquer(a.slice(0,b));
        e = conquer(a.slice(b,b*2));
        f = conquer(a.slice(b*2));
        console.log("sum is " + d + " " + e + " " +f);
        return d+e+f;
    }
    if(a.length == 2)
        return a[0]+a[1];
    if(a.length == 1)
        return a[0];
    return 0;
}