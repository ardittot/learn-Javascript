<!DOCTYPE html>
<html>
<body>

<h1>The + Operator</h1>

<p id="demo"></p>

<script>
var setup = function () {
   var c = 0;
   //var d = ++c;
   //return d;
   return function () {
      return ++c;
   };
};

/* function setup () {
   var c = 0;
   //var d = ++c;
   //return d;
   return function () {
      return ++c;
   };
}; */

var next = setup();
console.info(next());
console.info(next());
document.getElementById("demo").innerHTML = next();
document.getElementById("demo").innerHTML = next();
//next();
next = setup();
//next();
//console.info(next());
//console.info(next());
document.getElementById("demo").innerHTML = next();
document.getElementById("demo").innerHTML = next();
window.alert(next());
document.write(next());
console.log(next());
console.info(next());
console.info("END TEST");
</script>

</body>
</html>
