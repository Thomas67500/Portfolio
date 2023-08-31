

async function CvThomas () {
     let response = await fetch ("assets/js/data.json")
     let data= await response.json()
     console.log (data)
     let position = document.getElementById("CV");
     let anch = document.createElement("a");
     anch.setAttribute("class","nav-link");
     anch.href=data[0].CV
     anch.innerHTML= "Mon CV"
     position.append(anch)

}

CvThomas()



    async function Social (){
        let response = await fetch ("assets/js/data.json")
     let data= await response.json()
     console.log (data)
     let position = document.querySelector(".social-icons");
     let anchLink= document.createElement("a");
     anchLink.href="#";
     anchLink.target= "_blank";
     anchLink.innerHTML="<i class='lab la-linkedin'></i>"
    position.append(anchLink);

     let anchGit= document.createElement("a");
     anchGit.href= data[2].Github;
     anchGit.target="_blank";
     anchGit.innerHTML=  "<i class='lab la-github'></i>"
     position.append(anchGit);

    }

    Social()



