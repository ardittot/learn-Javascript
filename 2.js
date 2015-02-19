<!DOCTYPE html>
<html>
<body>

<h1>The + Operator</h1>

<p id="demo"></p>

<script>

name = "myName";

function myFunc() {
   //document.getElementById("demo").innerHTML = name;
   console.info(name);
   var name = "newName";
   //document.getElementById("demo").innerHTML = name;
   console.info(name);
}
/* var myFunc = function () {
   //document.getElementById("demo").innerHTML = name;
   console.info(name);
   var name = "newName";
   //document.getElementById("demo").innerHTML = name;
   //console.info(name);
} */
myFunc();

console.info("END TEST");
</script>

</body>
</html>
