("use strict");
function TreeNode(value){
    this.value = value;
    this.descendent = [];
}

//create node with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');

// associate root with is descendents

abe.descendent.push(homer);
homer.descendent.push(bart, lisa,maggie);

console.log(abe);


/*TreeNode {
    value: 'Abe',
    descendent: [ TreeNode { value: 'Homer', descendent: [Array] } ]
  }
*/

/*Write recursive functions for the following:
// 1. Log to the console the names of everyone in the tree.*/
function consoleName(node){
    if(node === null){
        return;
    }

    console.log(node.value);
    
    if(Array.isArray(node.descendent)){
        for(let i =0; i< node.descendent.length; i++){
             consoleName(node.descendent[i]);
        }
    }
    
    }

consoleName(abe);

/*2. Given a target value, return true or false if there is a node in the tree with the target value. 
E.g., contains(tree, “Lisa”)→true contains(tree, “Crusty”)→false */
function contain(node, target){
    




    
console.log(contain(abe,"Lisa"));

