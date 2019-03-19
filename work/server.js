const express = require('express')
const app = express()
const port = 10101 
app.use(express.static(__dirname + '/public'))
app.listen(port)
app.get('/portus_list', function(req, res) {
  var fs = require('fs');
  var file = "./student.json";
  var json = JSON.parse(fs.readFileSync(file));
  var str = JSON.stringify(json);
  str = str.replace("{", "");
  str = str.replace("}", "");
  str = str.replace(/,/g ,"<br>");
  str = str.replace(/\"/g, "");
  str = str.replace(/:/g, " ");
  res.send(str);
})
app.get('/portus_search', function(req, res) {
  var fs = require('fs');
  var file = "./student.json";
  var json = JSON.parse(fs.readFileSync(file));
  var req_key = req.query.studentID;
  var req_key_1 = req.query.studentID_1;
  var res_val = json[req_key];
  var res_val_1 = json[req_key_1];
  var str = ""+ res_val + " " + res_val_1;
  res.send(str);
})
app.get('/portus_add', function(req, res) {
  var fs = require('fs');
  var file = "./student.json";
  var json = JSON.parse(fs.readFileSync(file));
  var req_key = req.query.studentID;
  var req_val = req.query.studentname;
  var add_str = ",\"" + req_key + "\": \"" + req_val + "\"}";
  var tmp_str = JSON.stringify(json);
  tmp_str = tmp_str.replace("}", "");
  var pck_str = tmp_str + add_str;
  pck_str = pck_str.replace(",}", "}");
  fs.writeFile(file, pck_str, (err)=>{
    if(err) {
      console.log("add failed");
    };
    console.log("add success");
  });
  var str = pck_str;
  str = str.replace("{", "");
  str = str.replace("}", "");
  str = str.replace(/,/g ,"<br>");
  str = str.replace(/\"/g, "");
  str = str.replace(/:/g, " ");
  res.send(str);
})
app.get('/portus_delete', function(req, res) {
  var fs = require('fs');
  var file = "./student.json";
  var json = JSON.parse(fs.readFileSync(file));
  var req_key = req.query.studentID;
  var req_val = json[req_key];
  var req_str = "\"" + req_key + "\":\"" + req_val + "\"";
  var tmp_str = JSON.stringify(json);
  tmp_str = tmp_str.replace(req_str, "");
  var pck_str = tmp_str.replace(",," , ",");
  pck_str = pck_str.replace(",}", "}");
  fs.writeFile(file, pck_str, (err)=>{
    if(err) {
      console.log("delete failed");
    };
    console.log("delete success");
  });
  var str = pck_str;
  str = str.replace("{", "");
  str = str.replace("}", "");
  str = str.replace(/,/g ,"<br>");
  str = str.replace(/\"/g, "");
  str = str.replace(/:/g, " ");
  res.send(str);
})
