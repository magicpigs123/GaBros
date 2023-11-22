var fs = require('fs');
var express = require('express');
var path = require('path');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, '')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', async(req, res) => {
  res.sendFile(path.join(__dirname, '', 'projectlogin.html'));
});

window.onload = function() {
  document.getElementById("my_audio").play();
}

function submitForm() {

    let loginForm = document.getElementById("loginForm");
    console.log("FORM SUBMITTED")
  
    let username = document.getElementById("inputUsername").value;
    let password = document.getElementById("inputPassword").value;
    let email = document.getElementById("InputEmail").value;

    console.log(username)
    console.log(password)
    console.log(email)
  
    if (username == "" || password == "" || email == "") {
      // throw error
      alert("PLEASE TYPE SOMETHING IN")
    } else {
      var writeStream = fs.createWriteStream("JournalDEV.txt");
      writeStream.write(username);
      writeStream.write(password);
      writeStream.write(email);
      writeStream.end();
      // perform operation with form input
    }
}
