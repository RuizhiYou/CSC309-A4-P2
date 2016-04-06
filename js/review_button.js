function uVote(num){
            num += 1;
        document.getElementById("score_1").innerHTML = "Upvote"+ " ("+num.toString()+")";
    };

    function dVote(num){
            num += 1;
        document.getElementById("score_2").innerHTML = "Downvote"+ " ("+num.toString()+")";
    };


    function comment(){
        var check_value = document.getElementById("check").getAttribute('value');
        if(check_value == "OFF"){
            document.getElementById("Input_Box").style.display = 'block';
            document.getElementById("modal").style.display = 'block';
            document.getElementById("check").setAttribute('value', 'ON');
        }
        
        else{
            document.getElementById("Input_Box").style.display = 'none';
            document.getElementById("modal").style.display = 'none';
            document.getElementById("check").setAttribute('value', 'OFF');              }

    }


    var person = {

        user_id: "1998",
        user_name: "Hongwei",
        user_profile: "http://fmn.rrfmn.com/fmn059/20120920/1055/large_h9hO_40db00024787125e.jpg"

        
    }
    function send(){

        var new_input = document.getElementById("newComment").value;
        if(new_input.length == 0){
            alert("What is your review for this? Please type something on the comment shell~ :)");
            
        }else{
            var time = new Date();
            var par = document.createElement("P");                       // Create a <p> node
            var t1 = document.createTextNode(time);                  // Create a text node
            par.appendChild(t1);                                          // Append the text to <p>
            document.getElementById("new_cc").appendChild(par);


            var user_n = person.user_name;
            var pa = document.createElement("P");                       // Create a <p> node
            var t0 = document.createTextNode(user_n);                // Create a text node
            pa.appendChild(t0);     
            pa.style.background = 'white';                        
            var img = document.createElement('img');
            img.style.height='60px';
            img.style.width='60px';
            src=person.user_profile;
            img.src = src;  

            var t = document.createTextNode("  :      " +new_input);                 // Create a text node
            pa.appendChild(t);

            document.getElementById("new_cc").appendChild(img);
            document.getElementById("new_cc").appendChild(pa);
            document.getElementById("newComment").value = "";


        }


        document.getElementById("new_cc").appendChild(para);

    }