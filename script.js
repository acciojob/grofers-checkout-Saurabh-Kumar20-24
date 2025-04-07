const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);



// let cell = document.querySelectorAll("td.price");
// // console.log(cell)
// let sum=0;
// cell.forEach(val=>{
//     sum+=parseInt(val.textContent);
// })
// console.log(sum);



const getSum = () => {
//Add your code here
let sum=0;
let cells = document.querySelectorAll("td.price");
cells.forEach(cell=>{
    sum+=parseInt(cell.textContent);
})
//   console.log(sum);

  let tableR=document.createElement("tr");
  let tableD1=document.createElement("td");
  let tableD2=document.createElement("td");
  tableD1.append("Total");
  tableD2.append(sum);
  tableR.appendChild(tableD1);
  tableR.appendChild(tableD2);
  document.querySelector("table").appendChild(tableR);
//   console.log(tableR)
};
// console.log(getSum)

getSumBtn.addEventListener("click", getSum);

