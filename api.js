function loadData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((datas) => displayPost(datas));
}
loadData();

function displayPost(posts){

    for(const post of posts){
        const {id, title, body} = post
    const postcontainer = document.getElementById("card");
    let postDIV = document.createElement('div');
    postDIV.classList.add("post");
    
        postDIV.innerHTML = `
        <h4 class = 'post_id'>Post ID : <span class = "pid">${id}</span> </h4>
        <h5 class = "p_title">Post Title : <span class = "ptt">${title}</span></h5>
        <h5 class = "para"><span class = "pd">Post Description :</span> ${body}</h5>

        <button id = "btn" onclick='handleCommets(${id})'>Show Comments</button> 
                `;

        postcontainer.appendChild(postDIV);
    }
}


