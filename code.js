function divideAndConquerSum(a) {
    if(a.length <= 1){
        return a[0];
    }

    split = Math.floor((a.length-1)/3);
    ans = 0;
    
    b = divideAndConquerSum(a.slice(0,split+1));
    ans = ans + b[0];
    if((a.length/3)-split > .5){
        c = divideAndConquerSum(a.slice(split+1,split*2+2));
            ans = ans + c[0];
    }

    if((a.length/3)-split == 0){
        d = divideAndConquerSum(a.slice(split*2+2,a.length));
        ans = ans + d[0];
    }
    
    return ans;
    
        
}
