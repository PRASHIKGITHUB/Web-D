let x=function(){
    console.log("hello");
}
x();

//immediate invoked function
(function exe(){
    console.log("mmm");
})();
(function(x){
    console.log(x*x);
})(5);