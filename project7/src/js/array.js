var sampleArray=['cat','dog','monkey'];
console.log(sampleArray[1]);
sampleArray[3]='donkey';
console.log(sampleArray);
console.log("length of arrays"+ findLength(sampleArray));
sampleArray.push('chimp');

//for(var i=0;i<sampleArray.length;i++){
   // document.write(i+")"+sampleArray[i]+ "<br>");
//}

traverseArray(sampleArray);