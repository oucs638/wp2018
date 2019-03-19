<?php

$json = file_get_contents("student.json");
$student_list = json_decode($json, true);


function listData()
{
  global $student_list;
  echo "<h1>{$student_list}</h1>";
}
function searchData()
{
  
}
function addData()
{

}
function deleteData()
{

}
/****************/

?>
