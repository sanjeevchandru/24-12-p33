document.write("38.to move an array element from one position to another."+"<br>");
document.write("The original array :[10, 20, 30, 40, 50]"+"<br>");
function test38(arr,s,e){
    while(s<0){
        s=s+arr.length;
    }
    while(e<0){
        e=e+arr.length;
    }
     arr.splice(e,0,arr.splice(s,1));
     return arr;
}
document.write(test38([10, 20, 30, 40, 50], 0, 2)+"<br>");
// document.write(test38([10, 20, 30, 40, 50], -1, -2)+"<br><br>");