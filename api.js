let allpost;

function loadData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((datas) =>{
         displayPost(datas)
         allpost = datas;
         });
}
loadData();

function displayPost(posts){
    let first9Posts = posts?.slice(0, 9);

    let len = posts.length;
    let pages = Math.ceil(len / 9)

    let pageArr = [...Array(pages)].map((page, indx) => indx + 1) 
    console.log(pageArr);
    for (const page of pageArr){
        console.log(page)
        const btnContainer = document.getElementById("btn_container");    
        const btnDiv = document.createElement("div");
        btnDiv.classList.add('btn');
        btnDiv.innerHTML = `
        <button onclick="pageFunction(${page})">${page}</button>`;

        btnContainer.appendChild(btnDiv);
    }


    for(const post of first9Posts){
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


function pageFunction(btn){
    let pagePosts = allpost.slice((9 * (btn -1)), (9 * (btn -1 )) + 9);

    const postContainer = document.getElementById("card");
    postContainer.innerHTML = "";
    for(const post of pagePosts){
        const {id, title, body} = post
        let postDIV = document.createElement('div');
        postDIV.classList.add("post");
          
        postDIV.innerHTML = `
        <h4 class = 'post_id'>Post ID : <span class = "pid">${id}</span> </h4>
        <h5 class = "p_title">Post Title : <span class = "ptt">${title}</span></h5>
        <h5 class = "para"><span class = "pd">Post Description :</span> ${body}</h5>

        <button id = "btn" onclick='handleCommets(${id})'>Show Comments</button> 
                `;

        postContainer.appendChild(postDIV);
        }
}