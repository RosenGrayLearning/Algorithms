/**
 * Recursive Way
 * @param {*} num 
 */
let countDownFrom = num => {
  if(num === 0){
    return;
  }
   console.log(num)
  countDownFrom(num-1);
 
}

countDownFrom(10);


// //Not Recursive 

// let countDownFrom = num => {

//   for(let i = 0; i<num;i++){
//     console.log(num-i)
//   }
  
// }

// countDownFrom(10);



let categories= [
  { id:'animals','parent':null},
  { id:'mammals','parent':'animals'},
  { id:'cats','parent':'mammals'},
  { id:'dogs','parent':'mammals'},
  { id:'chihuahua','parent':'dogs'},
  { id:'labrador','parent':'dogs'},
  { id:'persian','parent':'cats'},
  { id:'siamese','parent':'cats'}              
];



/**
 * 
 * @param {Array} categories 
 * @param {String} parent 
 */
let makeTree = (categories,parent) =>{
  let node = {};
  let nodes = categories.filter(c => c.parent === parent);
  
  nodes.forEach(c=>{
    node[c.id] = makeTree(categories,c.id);

  });
   return node;
};

const tree = makeTree(categories,null);

console.log(tree);