var add= function(){
    var x;
    var y;
    this.obj=this;
    this.setx=function(val){
        x=val;
    }
    this.sety=function(val){
        y=val;
    }
   this.getx=function(){return x;} 
   this.gety=function(){return y;}
   this.addition=function(){return x+y;}
}
var obj1=new add();
obj1.setx(2);
obj1.sety (3);

console.log("hello world");
add.prototype.multiply=function(){
    return this.getx()*this.gety();

}
console.log(obj1.multiply());

//obj1.sub=function(){
  //  return obj1.gety()-obj1.getx();
//}
//console.log(obj1.addition());
//var obj2=new add();
//console.log(obj2.getx());
//console.log(obj1.sub());
//function login(){
   // var credentials=[{
      //  'email':'blah@blah.com',
      //  'password':'xyz'
   // },
//{
  //  'email':'ll',
    //'password':'123'
//},
                    // {
    //'email':'ll',
    //'password':'123'
//}];
   // this.validation=function(){
      //  var.email=$('#email').val();
      //  var pass=$('#pass').val();
      //  for(var i=0;i<credential.length;i++){
         //   if (credential[i]).email==email && credential[i].password==pass){
                
//            }else {//throw error msg};
//        }
//    }
                    // }