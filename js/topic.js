var topic_id = document.getElementById("recognition_tag").getAttribute("value");

$.post("/topics/"+
    topic_id,
    function(data,status){
    	data = JSON.parse(data);
    	document.getElementById("topic").innerHTML += topic_id;
    	document.getElementById("description").innerHTML += data.description;

    	for (var i in data.result){
	    	document.getElementById("content").innerHTML +=
	    	'<div class="post">\
				<div class="metadata">\
					<img align="right" class="ava" src="'+data.result[i].src+'" alt="Mountain View" style="width:40px;height:40px;"></img>\
				</div>\
			<text class="cont"><a href="/posts/'+data.result[i]._id+'">'+data.result[i].title+'</a></br></br></br></text>\
			<div class="botbar"><text ><button class="vote">Upvote</button>('+data.result[i].upvote+'), <a href="">'+data.result[i].downvote+'</a>(20), <a href="">Created at '+data.result[i].time+'</a></text></div>\
			</div>\
			</br>'
		}
    });
function followTopic(){
	var data = {"username":checkCookie(),"new_topic":topic_id};
	$.post("/followtag/",data,function(data,status){
		alert("success!")});
}