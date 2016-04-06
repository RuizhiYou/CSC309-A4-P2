var screen_height = $(window).height();
var cur_y = $(window).scrollTop();
var cur_screen = $(window).height();
var cur_index = 0;
var posts = [];
var page = 0;
var flag = 1;
//Execute at the begining
// make an ajax call to your server and fetch the next 100, then update
//some vars
var url = "http://localhost:3000/users/"+checkCookie()+"/feed/"+page;
$.get(url, function(data){
	data = JSON.parse(data);
	if (data.result.length == 0){
		if (flag){
			document.getElementById("content").innerHTML += '		<div class="post">\
			<text class="title">No More Feed  </text></br>\
			<text class="cont">This is the last article</br></br></br></text>\
			</div>'
			flag = 0;
		}
		return;
 	}
	else{
		page+=10;
		data = data.result;
		for (var i in data){
			var type;
			if(data[i].type=="article"){
				type = "Article";
			}
			else{
				type = "Question";
			}
			generator(data,type,i);
		}
	}
});

//Exceute after scrolling
$(window).scroll(function(){
     if($(window).scrollTop() + window.innerHeight > $(document).height() - 100)
    {
      	// make an ajax call to your server and fetch the next 100, then update
      	//some vars
      	var url = "http://localhost:3000/users/"+checkCookie()+"/feed/"+page;
       	$.get(url, function(data){
       		data = JSON.parse(data);
 			if (data.result.length == 0){
 				if (flag){
	 				document.getElementById("content").innerHTML += '		<div class="post">\
					<text class="title">No More Feed  </text></br>\
					<text class="cont">This is the last article</br></br></br></text>\
					</div>'
					flag = 0;
				}
 				return;
 			}
 			else{
 				page+=10;
 				data = data.result;
 				var type
 				for (var i in data){
 					if(data[i].type=="article"){
 						type = "Article";
					}
					else{
						type = "Question";
					}
					generator(data,type,i);
 				}
 			}
 		});
     }
});


function generator(data,type,i){
	document.getElementById("content").innerHTML += '<div class="post"><div class="metadata">\
	<text> New '+type+' added to Topic: <a href="http://localhost:3000/topics/'+data[i].target_topic+'">'+data[i].target_topic+'</a>, posted by <a href="http://localhost:3000/users/'+data[i].author+'/show">'+data[i].author+'</a></text>\
	<img align="right" class="ava" src="'+data[i].src+'" alt="Mountain View" style="width:40px;height:40px;"></img>\
	</div>\
	<text class="title"><a href="http://localhost:3000/posts/'+data[i]._id.valueOf()+'">'+data[i].title+'</a> </text></br>\
	<text class="cont">'+data[i].text+'</br></br></br></text>\
	<div class="botbar"><text >\
			<div>\
			<a><button class="uvButton1" onClick="uVote(222)"><a id="score_1">Upvote (222)</a></button></a>,\
			<a><button id="dvButton" onClick="dVote(3333)"><a id="score_2">Downvote (3333)</a></button></a>, \
			<label id="check" for="toggle" onClick="comment()" value="OFF" ><button>Show recently comments</button></label>  <input type="checkbox" id="toggle" />\
			<div class="modal" id="modal"><h2>Recently comments by other users... </h2><p id="new_cc"></p> </div>\
			</div>\
			<div id="comm" class="post">\
			<div class="botbar">\
			</div>\
			<div class="Main" id="Input_Box">     \
		         <div class="Input_Box" >     \
		           	<textarea class="Input_text" id="newComment"></textarea>     \
		           	<div class="faceDiv"></div>     \
		           	<div for="toggle" class="Input_Foot" > <a class="imgBtn" ></a><a class="postBtn" id="value" onClick="send()">Send</a> </div> \
		    	</div>     \
	        </div> \
		</div>\
	</text>\
	</div>\
	</div>\
	</br>';
}