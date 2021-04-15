/* globals require */
console.log("Hello, Airtable");

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyFs7Zk2PBOmwekT" }).base(
  "app9lgiFmyzrAzu5L"
);

//get the "captions" table from the base, select ALL the records, and specify the functions that will receive the data
base("captions").select({}).eachPage(gotPageOfLines, gotAllLines);

// an empty array to hold our data
var lines= [];

// callback function that receives our data
function gotPageOfLines(records, fetchNextPage) {
  console.log("gotPageOfLines()");
  // add the records from this page to our captions array
  lines.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllLines(err) {
  console.log("gotAllLines()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading captions");
    console.error(err);
    return;
  }

  // call functions to log and show the lines
  consoleLogLines();
  showLines();
}

// just loop through the lines and console.log them
function consoleLogLines() {
  console.log("consoleLogLines()");
  lines.forEach((line) => {
    console.log("Line:", line);
  });
}

// image gallery:
// function showImage(){
//   console.log("showImage()");
//   for(var i=0; i <100; i++){
//     var showImage = document.createElement("img"); 
//     lineImg.classList.add("anime-image");

//     showImage.src= lines[i].fields.Attachment[0].url;
//     lines[i].showing = true;
//     document.querySelector(".slideshow_container").append(showImage);
//   }
// }


// loop through the lines, create elements for each one, and add it to the scrollbox
function showLines() {
  console.log("showCaptions()");
  lines.forEach((line) => {

    // for the image gallery:
    
    var lineImage = document.createElement("img");
    lineImage.classList.add("image");
    lineImage.src = line.fields.image[0].url;
    document.querySelector(".gallery2").append(lineImage);   

 
    // make a container for all the list item within .list:
    var lineContainer = document.createElement("div");
    lineContainer.classList.add("line-container");
    document.querySelector(".list ").append(lineContainer);

    // for the flying Comment, making every input as a li with the class named "item":
    var linePart1 = document.createElement("li");
    linePart1.classList.add("item");
    linePart1.innerText = line.fields.part_1;
    lineContainer.append(linePart1);

    var linePart2 = document.createElement("li");
    linePart2.classList.add("item");
    linePart2.innerText = line.fields.part_2;
    lineContainer.append(linePart2);


    var linePart3 = document.createElement("li");
    linePart3.classList.add("item");
    linePart3.innerText = line.fields.part_3;
    lineContainer.append(linePart3);

    // for the flying Comment, pull the line and make individual as a span item

    var bulletPart1 = document.createElement("span");
    bulletPart1.classList.add("item1");
    bulletPart1.innerText = line.fields.part_1;
    document.querySelector(".row1").append(bulletPart1);

    var bulletPart2 = document.createElement("span");
    bulletPart2.classList.add("item1");
    bulletPart2.innerText = line.fields.part_2;
    document.querySelector(".row2").append(bulletPart2);


    var bulletPart3 = document.createElement("span");
    bulletPart3.classList.add("item1");
    bulletPart3.innerText = line.fields.part_3;
    document.querySelector(".row3").append(bulletPart3);



    //get anime field from airtable
    //loop through the array and add each anime title as
    //a class to the anime container
    var lineAnime = line.fields.anime;
    lineAnime.forEach(function(anime){
    lineContainer.classList.add(anime);
  })

    var lineAnime = line.fields.anime;
    lineAnime.forEach(function(anime){
    lineContainer.classList.add(anime);
  })
  
    var lineAnime = line.fields.anime;
    lineAnime.forEach(function(anime){
    lineContainer.classList.add(anime);
  })


    // add event listener to our filter
    // to add an active class to our lines

    var filterFmab = document.querySelector(".btn_fmab");
    filterFmab.addEventListener("click", function(){

        if (lineContainer.classList.contains("fmab")){
            lineContainer.style.display = "block";

        }else{
            lineContainer.style.display = "none";
        }
    })

    var filterAc = document.querySelector(".btn_ac");
    filterAc.addEventListener("click", function(){

        if (lineContainer.classList.contains("ac")){
            lineContainer.style.display = "block";

        }else{
            lineContainer.style.display = "none";
        }
    })

    var filterKj = document.querySelector(".btn_jk");
    filterKj.addEventListener("click", function(){

        if (lineContainer.classList.contains("jk")){
            lineContainer.style.display = "block";

        }else{
            lineContainer.style.display = "none";
        }
    })



  



   
  });
  }


  // document.getElementById("gallery").onscroll = function() {
  //   var winScroll = document.getElementById("gallery").scrollTop;
  //   var height = document.getElementById("gallery").scrollHeight - document.getElementById("gallery").clientHeight;
  //   var scrolled = (winScroll / height) * 100;
  //   document.getElementById("myBar").style.width = scrolled + "%";
  // };

  var scrollableContainer = document.querySelector('.player');
scrollableContainer.addEventListener('scroll', updateProgressIndicator, false);
function updateProgressIndicator() {
    var scrollTop = scrollableContainer.scrollTop;
    var height = scrollableContainer.scrollHeight - scrollableContainer.clientHeight;
    var scrolled = scrollTop / height;
    document.querySelector('.progress-bar').style.transform = `scaleX(${scrolled})`;
}






