<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>each demo</title>
  <style>
  ul {
    font-size: 18px;
    margin: 0;
  }
  span {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
  .example {
    font-style: italic;
  }
  </style>
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
</head>
<body>
 
To do list: <span id="yes">(click here to change)</span>
<ul>
  <li>Eat</li>
  <li class="ye">Sleep</li>
  <li>Be merry</li>
</ul>
 
<script>
/* $('#myElementId').click(function(){
	var element = this;
   $('.myOtherClass').each(function(){
      // How do you get access to the element that has id myElementId here?
	  $(element).hide(); //$(element).<event>
   });
}); */
$( "#yes" ).click(function() {
   var element = this;
  $( ".ye" ).each(function() {
    $( this ).toggleClass( "example" );
    $(element).hide();
  });
});
</script>
 
</body>
</html>
