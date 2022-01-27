function stringLength(value:string): number{
return value.replace(" ","").length;
}

let count:number = stringLength("test 1");
console.log(count);

function count_both(value2:string, spaces?:boolean): number{
    if(spaces){
       return value2.length; 
    } else{
        return value2.replace(" ","").length;
    }
}
let bothCount = count_both("test 1", true);//the ? will make it 
console.log(bothCount);