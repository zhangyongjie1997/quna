let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let pages=[];
let count = Math.ceil(arr.length/8); 
for(let i = 1,no = 0;i<=count;i++){
  pages.push(arr.slice(no,no+8));
  no +=8;
}
console.log(pages);