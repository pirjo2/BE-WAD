//Website used for validating the correctness of the JSON file - https://jsonlint.com/
//Json storage https://api.jsonbin.io/v3/b/654567f154105e766fcb1492

window.onload = function() {
    let filepath = '../myjson.json'; //--> saab lugeda failist / JSON file filepath
    //kui lugeda failist tuleb json.record kasutada lihtsalt json!!!!!
    //let filepath = 'https://api.jsonbin.io/v3/b/654567f154105e766fcb1492' // URL filepath
            fetch(filepath)
            .then((response) => response.json())
            .then(json => {
                console.log(json);
                //for (let i = 0; i < json.record.length; i++){ //muuta lihtsalt json-iks kui loed failist! / for URL filepath
                for (let i = 0; i < json.length; i++){
                    let div = document.createElement("div");
                    let postheader = document.createElement("header");

                    div.className = "posts";
                    postheader.className = "post-header";

                    let date = document.createElement("a");
                    let author = document.createElement("a");
                    let profilepic = document.createElement("img");
                    let likebutton = document.createElement("img");
                    likebutton.src = "like-dark.png";
                    likebutton.addEventListener("click", function() {//function that helps to manage like button
                        if (likebutton.src.endsWith("like-dark.png")) {
                            likebutton.src = "like.png";
                          } else {
                            likebutton.src = "like-dark.png";

                    }});
                    let postpic = document.createElement("img");
                    let postText = document.createElement("a");

                    date.className = "post-date";
                    profilepic.className = "post-logo"
                    author.className = "post-author";
                    likebutton.className = "like-button";
                    postpic.className = "post-content";
                    postText.className = "post-title";

                   /* date.innerText = json.record[i].date;// use these if reading from URL
                    author.innerText = json.record[i].author;
                    postpic.innerText = json.record[i].postImage;
                    postText.innerText = json.record[i].postText;*/

                    date.innerText = json[i].date;
                    profilepic.src = json[i].profilepic;
                    author.innerText = json[i].author;
                    postpic.src = json[i].postImage;
                    postText.innerText = json[i].postText;

                    postheader.appendChild(date);
                    postheader.appendChild(profilepic);
                    postheader.appendChild(author);
                    div.appendChild(postheader);
                    div.appendChild(postpic);
                    div.appendChild(postText);
                    div.appendChild(likebutton);
                    document.body.appendChild(div);

                }
            })
            .catch(err => {
                let errDiv = document.createElement("div");
                errDiv.className = 'posts';
                errDiv.innerText = err;
                document.body.appendChild(errDiv);
                })
            .finally(() => {
                let footer = document.createElement("footer");
                date = new Date().toLocaleString()
                /*footer.innerText = date;*/
                footer.innerText = "© 2023 Copywrong: Möuw";
                document.body.appendChild(footer);
                })
}