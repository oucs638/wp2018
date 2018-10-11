$(document).ready(function {
 

  $("#list_btn").click(function (event){
    event.preventDefault();
    $.ajax({
      method: "post",
      url: "student.php",
      data: { 
        fnctn: "listData",
        student_ID: "student_list"
      },
      success: function(data) {
        $("#list_dsp").html(data);
      }
    });
  });

  $("#search_btn").click(function (event){
    event.preventDefault();
    $.ajax({
      method: "post",
      url: "student.php",
      data: {
        fnctn: "searchData",
        student_ID: $("#search_form > input[name=student_ID]").val()
      },
      success: function(data)
    });
  });

})
