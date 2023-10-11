
function handleCommets(id){
    let a = 0;
    let openModalBtn = document.getElementById("btn");
    let modal = document.getElementById("modal");
    let closeModalBtn = document.getElementById("closeModalBtn");

   if(a == 0){
    modal.style.display = "block";
    openModalBtn.style.display = "none";

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(comments => {
            console.log(comments);
            console.log(id);
             document.getElementById("box").innerHTML = "";
            for (let data of comments) {
                console.log(data);
                const commentContainer = document.getElementById("box");
                let commentDIV = document.createElement('div');
                    commentDIV.classList.add("cmt");
                    commentDIV.innerHTML = `
                    <h4 class='c_id'>Name : <span class="cid">${data.name}</span> </h4>
                    <h5 class="c_title">E-mail : <span class="ctt">${data.email}</span></h5>
                    <h5 class="cpara"><span class="cd">Description : </span>${data.body}</h5>
                     `;
                     commentContainer.appendChild(commentDIV);
               }
        })

   }else{
    return a = 1;
   }
    window.addEventListener("click", function(event){
    if (event.target == modal) {
        modal.style.display = "none";
        openModalBtn.style.display = "block";

        }
    });

    closeModalBtn.addEventListener("click", function() {
        modal.style.display = "none";
        openModalBtn.style.display = "block";
    });

        
}