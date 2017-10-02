var config = {
    apiKey: "AIzaSyAZg6fUvvZe1TXJbjl5mk2Nsbf7JkJqWX4",
    authDomain: "tinder-gif-2.firebaseapp.com",
    databaseURL: "https://tinder-gif-2.firebaseio.com",
    projectId: "tinder-gif-2",
    storageBucket: "tinder-gif-2.appspot.com",
    messagingSenderId: "917606015245"
  };

  firebase.initializeApp(config);

  var database = firebase.database();


$(document).ready(function(){

$("#search").on('click',function(){

event.preventDefault();

$("#gifbox").css("visibility", "visible");
$("#gif-choice").css("visibility", "visible");

var search = $("#gif").val().trim();

 var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=9699c44e26a14adca9d3598a519db277&limit=5";

$.ajax({
	url:queryURL,
	method: "GET"
})
.done(function(response){


	console.log(response);

	console.log(response.data[0].images.fixed_height.url);

	var results1 = response.data[0];
	var results2 = response.data[1];
	var results3 = response.data[2];
	var results4 = response.data[3];
	var results5 = response.data[4];

	var divSearch1 = $("<div>");
	var divSearch2 = $("<div>");
	var divSearch3 = $("<div>");
	var divSearch4 = $("<div>");
	var divSearch5 = $("<div>");

	var imageSearch1 = $("<img>");
	var imageSearch2 = $("<img>");
	var imageSearch3 = $("<img>");
	var imageSearch4 = $("<img>");
	var imageSearch5 = $("<img>");


	imageSearch1.attr('src', results1.images.fixed_height.url);
	imageSearch1.attr('id', "image1");
	imageSearch1.attr('class', "gif-images");
	imageSearch2.attr('src', results2.images.fixed_height.url);
	imageSearch2.attr('id', "image2");
	imageSearch2.attr('class', "gif-images");
	imageSearch3.attr('src', results3.images.fixed_height.url);
	imageSearch3.attr('id', "image3");
	imageSearch3.attr('class', "gif-images");
	imageSearch4.attr('src', results4.images.fixed_height.url);
	imageSearch4.attr('id', "image4");
	imageSearch4.attr('class', "gif-images");
	imageSearch5.attr('src', results5.images.fixed_height.url);
	imageSearch5.attr('id', "image5");
	imageSearch5.attr('class', "gif-images");


 	//var gifs = imageSearch.attr('src', results[i].images.fixed_height.url);

	divSearch1.append(imageSearch1);
	divSearch2.append(imageSearch2);
	divSearch3.append(imageSearch3);
	divSearch4.append(imageSearch4);
	divSearch5.append(imageSearch5);

	$("#gifbox").prepend(divSearch1);
	$("#gifbox").prepend(divSearch2);
	$("#gifbox").prepend(divSearch3);
	$("#gifbox").prepend(divSearch4);
	$("#gifbox").prepend(divSearch5);

});
});

var url;
var usersName;
var zip;
var sex;
var age;

$(document).on("click", ".gif-images",function(){


		$("#gif-choice").html(this);
		url = $(this).attr('src');
		console.log(url);
		//activateFirebase();
	/*

	$("#image2").on("click" ,function(){
		$("#gif-profile").html(this);
		url = $(this).attr('src');
		console.log(url);
		activateFirebase();
	});

	$("#image3").on("click" ,function(){
		$("#gif-profile").html(this);
		url = $(this).attr('src');
		console.log(url);
		activateFirebase();
	});

	$("#image4").on("click" ,function(){
		$("#gif-profile").html(this);
		url = $(this).attr('src');
		console.log(url);
		activateFirebase();
	});

	$("#image5").on("click" ,function(){
		$("#gif-profile").html(this);
		url = $(this).attr('src');
		console.log(url);
		activateFirebase();
	});
	*/
});



	function activateFirebase(){
  	console.log(url);
  	var usersInfo = {
  		user: usersName,
  		url: url,
  		zip: zip,
  		sex: sex,
  		age: age
  	};
  	 database.ref().push(usersInfo);
  	 console.log(usersInfo.user);
  	 console.log(usersInfo.url);
  	 console.log(usersInfo.zip);
  	 console.log(usersInfo.sex);
  	 console.log(usersInfo.age);
  }

	$("#clear").on("click",function(){
		$("#gifbox").html("");
		$("#gif-choice").html("");
		 $("#gifbox").css("visibility", "hidden");
        $("#gif-choice").css("visibility", "hidden");
	});

	$("#submit-btn").on("click", function(event){
		event.preventDefault();
		usersName = $("#userName").val().trim();
		zip = $("#location").val().trim();
		sex = $("#gender").val().trim();
//var profilePic = $("#choosing").val();
		age = $("#age").val().trim();

    var user = {
      user_name: usersName,
      user_age: age,
      user_zip: zip,
      user_gender: sex
    };

    $.post("/api/new", user, function(data) {
      console.log(data);
    });

		activateFirebase();
		window.location.href ="chat.html";
	});




});
