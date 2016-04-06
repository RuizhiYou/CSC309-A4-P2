function getusers(){
	$.get("http://localhost:3000/getusers", function(data){
		data = JSON.parse(data);
		data = data.result;
		for (var i in data){
			var posts = document.getElementById("users");
			posts.innerHTML += '<div id="'+data[i].id+'">\
						username<input type="text" value="'+data[i].username+'" id="'+data[i].id+'u'+'"></input>password<input type="text" value="'+data[i].password+'" id="'+data[i].id+'p'+'">\
						<button onclick="deleteuser('+data[i].id+')">Delete</button>\
						<button onclick="modifyuser('+data[i].id+')">Apply</button>\
					</div>';
		}
	}
}
function initialize(){

}
function getposts(){
	$.get("http://localhost:3000/getposts", function(data){
		data = JSON.parse(data);
		data = data.result;
		for (var i in data){
			var posts = document.getElementById("posts");
			posts.innerHTML += '<div id="'+data[i].id+'">\
						title<input type="text" value="'+data[i].title+'" id="'+data[i].id+'t'+'"></input>content<input type="text" value="'+data[i].content+'" id="'+data[i].id+'c'+'">\
						<button onclick="deletepost('+data[i].id+')">Delete</button>\
						<button onclick="modifypost('+data[i].id+')">Apply</button>\
					</div>';
		}
	}
}
function deletepost(id){
	$.get("http://localhost:3000/admin/deletepost"+id,function(data)){
		alert("success!");
	}
}
function modifypost(id){
	$.post("http://localhost:3000/admin/modifypost/"+id,{"title":document.getElementById(id+'t').innerHTML,"content":document.getElementById(id+"c").innerHTML});
}

function deleteuser(id){
	$.get("http://localhost:3000/admin/deleteuser"+id,function(data)){
		alert("success!");
	}
}
function modifyuser(id){
	$.post("http://localhost:3000/admin/modifyuser/"+id,{"username":document.getElementById(id+'u').innerHTML,"password":document.getElementById(id+"p").innerHTML});
}