

 


$(document).ready(function(){




  //first name
  $("#t1").blur(function () {
    checkfname();
  });


  //last Name

  $("#t2").blur(function () {
    checklname();
  });


  //email validation

  $("#t3").blur(function () {
    checkemailid();
  });


  //Age validation
  $("#t5").blur(function () {
    agevalidaion();
  });

  

  $(".gender").blur(function () {


    checkradiobutton();
  });

 

  $("#t4").blur(function () {
    checkphonenumber();
  });

  $("#t6").blur(function () {
    Sundayvalidation();
  });

  $("#t7").blur(function () {
    MondayValidation();
  });

  $("#t8").blur(function () {
   TuesdayValidation();
  });

  $("#t9").blur(function () {
    WednesdayValidation();
   });

   $("#t10").blur(function () {
    thurdayValidation();
   });

   $("#t11").blur(function () {
    FridayValidation();
   });

   $("#t12").blur(function () {
    SaturdayValiation();
   });



  
  $(function () {
    enable_c7();
    $("#check_box").click(enable_c7);
    
 });

  function enable_c7() {
    enable_c8();
    enable_c9();
    enable_c10();
    enable_c11();
    enable_c12();
    enable_c13();
    enable_c14();
    $('#Sunday').prop('checked', false);
    $('#Monday').prop('checked', false);
    $('#Tuesday').prop('checked', false);
    $('#Wednesday').prop('checked', false);
    $('#Thursday').prop('checked', false);
    $('#Friday').prop('checked', false);
    $('#Saturday').prop('checked', false);
    $('#Sunday').prop('checked', false);
    $("#t6").val("");
    $("#t7").val("");
    $("#t8").val("");
    $("#t9").val("");
    $("#t10").val("");
    $("#t11").val("");
    $("#t12").val("");
    $("#t13").val("");
    $("#t6").val("");

    $(".check_box").prop("disabled", !this.checked);
  }

  $(function () {
    enable_c8();
   
    $("#Sunday").click(enable_c8);
  });

  function enable_c8() {
    $("#t6").val("");
    $(".Sunday").prop("disabled", !this.checked);

  }

  $(function () {
    enable_c9();
    $("#Monday").click(enable_c9);
  });

  function enable_c9() {
    $("#t7").val("");
    $(".Monday").prop("disabled", !this.checked);
  }

  $(function () {
    enable_c10();
    $("#Tuesday").click(enable_c10);
  });

  function enable_c10() {
    $("#t8").val("");
    $(".Tuesday").prop("disabled", !this.checked);
  }


  $(function () {
    enable_c11();
    $("#Wednesday").click(enable_c11);
  });

  function enable_c11() {
    $("#t9").val("");
    $(".Wednesday").prop("disabled", !this.checked);
  }

  $(function () {
    enable_c12();
    $("#Thursday").click(enable_c12);
  });

  function enable_c12() {
    $("#t10").val("");
    $(".Thursday").prop("disabled", !this.checked);
  }

  $(function () {
    enable_c13();
    $("#Friday").click(enable_c13);
  });

  function enable_c13() {
    $("#t11").val("");
    $(".Friday").prop("disabled", !this.checked);
  }

  $(function () {
    enable_c14();
    $("#Saturday").click(enable_c14);
  });

  function enable_c14() {
    $("#t12").val("");
    $(".Saturday").prop("disabled", !this.checked);
  }


});
function checkfname() {
  debugger
  var exp = /^[A-Za-z]+$/;
  var fn = $("#t1").val();

  if (fn == "") {
    $("#msg").html("this field is required");

    return false;

  }
  else
  {
  if (exp.test(fn) == false) {
    $("#msg").html("you can not enter numbers in fname");
     return false;
  }
  else {
    $("#msg").html(" ");
    return true;
  }

}
}
function checklname() {
  var exp1 = /^[A-Za-z]+$/;
  var ln = $("#t2").val();

  if (ln == "") {
    $("#msg1").html("this field is required");
    lastname = false;
    return false;
  }
  else {
    $("#msg1").html(" ");

  }

  if (exp1.test(ln) == false) {
    $("#msg1").html("you can not enter numbers in last Name");

    lastname = false;
    return false;
  }
  else {
    $("#msg1").html(" ");
    return true;
  }

}

function checkemailid() {

  var expe = /^[a-zA-Z0-9.-]+@+tntra.io*$/;
  var f = $("#t3").val();
  if (f == "") {

    $("#msg3").html("** Email Id is required");
    emailname = false;
    return false;
  }
  else {
    if (expe.test(f) == false) {
      $("#msg3").html("*Invalid email  id");
      emailname = false;
      return false;
    }
    else {
      $("#msg3").html(" ");
      return true;
    }
  }
}

function checkphonenumber() {
  var expphone = /^[6-9]\d{9}$/;
  var g = $("#t4").val();

  if (g == "") {
   
    $("#msg4").html("** Phone Number is required");
    phonename = false;
    return false;
  }
  else {
    if (expphone.test(g) == false) {
      $("#msg4").html("**Invalid phone number");
      phonename = false;
      return false;
    }
    else {
      $("#msg4").html(" ");
      return true;
    }
  }
}


function agevalidaion() {


  var dropv = $("#t5").val();


  if (dropv == "") {
    $("#msg5").html("** this field is required");
   
    return false;
  }
  else {
    $("#msg5").html(" ");
    return true;
  }


}

function checkradiobutton() {

  if ($('input[name=r]:checked').length == 0) {
    $("#radiomsg").html("atleast select one");
    radiobuttonname = false;
    return false;
  }
  else {
    $("#radiomsg").html(" ");
    return true;
  }
}

function Sundayvalidation(){
 debugger
  var s = $("#t6").val();
  if (s == "") {
    $("#msg6").html("** this field is required");
    return false;
   }
  else {
    $("#msg6").html("");
    return true;
  }
}

function MondayValidation(){
 var m= $("#t7").val();
  if (m == "") {
    $("#msg7").html("** this field is required");
    return false;
   
   }
  else {
    $("#msg7").html("");
    return true;
  }
}

function TuesdayValidation(){
  var t= $("#t8").val();
   if (t == "") {
     $("#msg8").html("** this field is required");
    
    }
   else {
     $("#msg8").html("");
     return true;
   }
 }


 function WednesdayValidation(){
  var w= $("#t9").val();
   if (w == "") {
     $("#msg9").html("** this field is required");
    
    }
   else {
     $("#msg9").html("");
     return true;
   }
 }

 function thurdayValidation(){
  var thu= $("#t10").val();
   if (thu == "") {
     $("#msg10").html("** this field is required");
    
    }
   else {
     $("#msg10").html("");
     return true;
   }
 }

 function FridayValidation(){
  var f= $("#t11").val();
   if (f == "") {
     $("#msg11").html("** this field is required");
    
    }
   else {
     $("#msg11").html("");
     return true;
   }
 }


 function SaturdayValiation(){

  var s= $("#t12").val();
   if (s == "") {
     $("#msg12").html("** this field is required");
    
    }
   else {
     $("#msg12").html("");
     return true;
   }
 }


function redirect() {
debugger
  checkfname();
  checklname();
  checkemailid();
  checkphonenumber();
  agevalidaion();
  checkradiobutton();
  
  
 
  if (checkfname() == true && checklname() == true && checkemailid() == true && checkphonenumber() == true && agevalidaion()==true && checkradiobutton()==true && ($("#t6").prop("disabled")==false && Sundayvalidation()==true) || ($("#t7").prop("disabled")==false && MondayValidation()==true)) {
    var fname = document.getElementById("t1").value;
    sessionStorage.setItem("first", fname);
    var lname = document.getElementById("t2").value;
    sessionStorage.setItem("lastname", lname);
    var email = document.getElementById("t3").value;
    sessionStorage.setItem("emailid", email);

    var no = document.getElementById("t4").value;
    sessionStorage.setItem("phone", no);
    var a = document.getElementById("t5").value;
    sessionStorage.setItem("age", a);

    var v12= $('input[type="radio"][name = "r"]:checked').val();
    sessionStorage.setItem("gender", v12);

    var s = document.getElementById("t6").value;
    sessionStorage.setItem("sunday", s);
    var m = document.getElementById("t7").value;
    sessionStorage.setItem("monday", m);

    var t = document.getElementById("t8").value;
    sessionStorage.setItem("tuesday",t);

    var w = document.getElementById("t9").value;
    sessionStorage.setItem("wednesday",w);
    var th = document.getElementById("t10").value;
    sessionStorage.setItem("thursday",th);

    var f = document.getElementById("t11").value;
    sessionStorage.setItem("friday",f);

    var s = document.getElementById("t12").value;
    sessionStorage.setItem("saturday",s);

    window.location = "file:///D:/FormEvalutationTest/mona.html";

  }
  else {
    return false;
  }


}

