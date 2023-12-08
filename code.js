function divideAndConquerSum(a) {
    sum = conquer(a, Math.ceil(a.length/3))
    return sum;    
}

function conquer(a, b) {
    let arr = a
    if(arr.length == 0)
        return 0
    if(arr.length == 1)
        return a[0]
    if(arr.length == 2)
        return a[0]+a[1]
    
    let c = conquer(arr.slice(0,b)) + conquer(arr.slice(b,b*2), Math.ceil(arr.length/3)) + conquer(arr.slice(b*2), Math.ceil(arr.length/3))
    return c
}