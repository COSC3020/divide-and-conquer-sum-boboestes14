// i was stuck for a while and i looked at ClaytonBrown4741 code to try and help me with this project


//the date is 9/24/2023 and i just tried to fix my code, i curretnly have no idea why it dosent work. it should be working.


//the date is 10/11/2023  i just attempted to make it work again, but it still dosent pass the test. my only conclusion is 
// that something dosent work how i think it works, but i know it should work

function divideAndConquerSum(a) {
    console.log("the array is " + a);
    sum = conquer(a, Math.ceil(a.length/3))
    console.log("the answer is " + sum);
    return sum;    
}

function conquer(a, b) {
    if(a.length == 0)
        return 0
    if(a.length == 1)
        return a[0]
    if(a.length == 2)
        return a[0]+a[1]
    
    
    c = conquer(a.slice(0,b))
    if(a.length%3 == 1){
        d = conquer(a.slice(b,(b*2)-1), Math.ceil(a.length/3))
        e = conquer(a.slice((b*2)-1), Math.ceil(a.length/3))
    }else{
        d = conquer(a.slice(b,b*2), Math.ceil(a.length/3))
        e = conquer(a.slice(b*2), Math.ceil(a.length/3))
    }
    return c+d+e
}