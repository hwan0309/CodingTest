function solution(phone_book) {
    //정렬 후 startWith로 비교 후 접두사면 false
    
    phone_book.sort();
    
    for(let i=0; i<phone_book.length - 1; i++){
        if(phone_book[i + 1].startsWith(phone_book[i])){
            return false
        }
    }
    return true
   
}