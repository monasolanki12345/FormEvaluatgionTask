
$(document).ready(function(){


 var v="";
    
 $("#btn").click(function () {
  var v1=$("#t1").val();
  var v2=$("#t2").val();
  var v3=$("#t3").val();
  var v4=$("#t4").val();
  var v5=$("#t5").val();
  
  var v12= $('input:radio[name=r]:checked').val();

  v=v+"<tr><td>"+v1+"</td><td>"+v2+"</td><td>"+v3+"</td><td>"+v4+"</td><td>"+v5+"</td><td>"+v12+"</td>/tr>";
  $("#tb").html(v);

  
});

});