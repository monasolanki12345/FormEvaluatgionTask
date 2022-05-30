$(document).ready(function(){
    debugger
    $("#myform").validate({
       
        rules: {
          sun : {
            required: true,
           
          }
         
         
        },
        messages : {
          sun: {
            redirect: "this field is reequired"
          },
         
        }
      });

      $("#btn").click(function(event){
        event.preventDefault();
      });
    


});