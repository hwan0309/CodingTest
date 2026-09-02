function solution(orders, course) {
    var answer = [];
    
    //조합 구하기 dfs
    const combin = (arr, selectNum) => {
        const result = [];
        if(selectNum === 1) return arr.map((val)=> [val]);
        
        arr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index +1);
            const combine = combin(rest, selectNum -1);
            const attach = combine.map((c) => [fixed, ...c]);
            result.push(...attach);
        });
        return result
    }
    
    course.forEach((targetLen) => {
        const menuMap = new Map();
        let maxCount = 0;
        
        orders.forEach((order) =>{
            const sortedOrder = order.split('').sort();
            if(sortedOrder.length >= targetLen){
                const combs = combin(sortedOrder, targetLen);
                combs.forEach((comb) => {
                    const menuStr = comb.join('');
                    const count = (menuMap.get(menuStr) || 0) +1
                    menuMap.set(menuStr, count);
                    maxCount = Math.max(maxCount, count)
                })
            }
        })
        
        if(maxCount >= 2){
            for(const[menu, count] of menuMap.entries()){
                if(count === maxCount) answer.push(menu)
            }
        }
    })
    //orders.sort();
    //console.log(orders)
    
    
    return answer.sort();
}