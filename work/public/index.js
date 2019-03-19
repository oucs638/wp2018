$(document).ready(()=>{  
  $("#list_btn").click(function(event){
    event.preventDefault()
    $.ajax({
      method: "GET",
      url: "./portus_list",
      data: {},
      success: (data)=>{document.getElementById("list_dsp_content").innerHTML = data;}
    })
  })
  $("#search_btn").click((event)=>{
    event.preventDefault()
    $.ajax({
      method: "GET",
      url: "./portus_search",
      data: {
        studentID: $("#search_form input[name='student_ID']").val(),
        studentID_1: $("#search_form input[name='student_ID_1']").val(),
      },
      success: (data)=>{
        // var str = data.spilt(" ");
        document.getElementById("search_dsp_content").innerHTML = data;
        // document.getElementById("test_dsp_1").innerHTML = str[1]
      }
    })
  })
  $("#add_btn").click((event)=> {
    event.preventDefault()
    $.ajax({
      method: "GET",
      url: "./portus_add",
      data: {
        studentID: $("#add_form input[name='student_ID']").val(),
        studentname: $("#add_form input[name='student_name']").val(),
      },
      success: (data)=>{document.getElementById("list_dsp_content").innerHTML = data;}
    })
  })

  $("#delete_tn").click(function(event) {
    event.preventDefault()
    $.ajax({
      method: "GET",
      url: "./portus_delete",
      data: {
        studentID: $("#delete_form input[name='student_ID']").val(),
      },
      success: (data)=>{document.getElementById("list_dsp_content").innerHTML = data;}
    })
  })
})
