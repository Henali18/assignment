const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout,
});
const fs = require("fs");

var createDir = () =>{
  fs.mkdir("directory 1", () => {
    console.log("Directory Created Successfully!!!");
    repeat();
  });
};

var removeDir = () =>{
  fs.rmdir("directory 1", () => {
    console.log("Directory Remove Successfully!!!");
    repeat();
  });
};

var writeFile = () =>{
  fs.writeFile('file1.txt', 'Hello, Good Morning!', function (err) {
    if (err) throw err;
    console.log('Write Text Successfully!!!');
    repeat();
  });
};

var readFile = () =>{
  fs.readFile('file1.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }console.log(data)
    repeat();
  });
};

var deleteFile = () =>{
  fs.unlink('file1.txt', function (err) {
    if (err) throw err;
    console.log('File Deleted Successfully!!!');
    repeat();
  });
};

var appendtoFile = () =>{
  fs.appendFile('file1.txt', 'Have a Good Day!', function (err) {
    if (err) throw err;
    console.log('Text Append Successfully!');
    repeat();
  });
};

var updateFile = () =>{
  fs.appendFile('file1.txt', ' My new text', function (err) {
    if (err) throw err;
    console.log('File Updated Successfully!');
    repeat();
  });
};

var renameFile = () =>{
  fs.rename('file1.txt', 'file3.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed Successfully!');
    repeat();
  });  
};

var start = () => {
  rl.question("Enter Your Choice: ",(answer) => {
    if(answer=='1'){
      createDir();
    }else if(answer=='2'){
      removeDir();    
    }else if(answer=='3'){
      writeFile();    
    }else if(answer=='4'){
      readFile();    
    }else if(answer=='5'){
      deleteFile();    
    }else if(answer=='6'){
      appendtoFile();    
    }else if(answer=='7'){
      updateFile();    
    }else if(answer=='8'){
      renameFile();    
    }else{
      console.log("Wrong Choice, Please try Again")
      start();
    }
  });
};

var instructions=()=>{
  console.log("Enter 1 to Create a new Directory");
  console.log("Enter 2 to Remove Directory");
  console.log("Enter 3 to Write a file ");
  console.log("Enter 4 to Read a file ");
  console.log("Enter 5 to Delete a file");
  console.log("Enter 6 to Append data to file");
  console.log("Enter 7 to Update/Replace file");
  console.log("Enter 8 to Rename a file");
  console.log("Enter 9 Exit");
};

var repeat =() => {
    instructions();
    start();
};
console.log("Welcome to file System!");
repeat();