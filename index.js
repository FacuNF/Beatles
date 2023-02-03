
addEventListener("DOMContentLoaded", function(){
//Nav-Bar;
let clickOnNav = document.querySelectorAll(".navbar_section");
let navList = ["george", "paul", "ringo", "john"];

for(var i = 0; i < clickOnNav.length; i++){
    let goTo = navList[i];
    clickOnNav[i].addEventListener("click", function(){
        console.log(goTo); 
        var scroll = document.querySelector("#" + goTo);
        console.log(scroll);
        scroll.scrollIntoView(
            {behavior: "smooth",
            inline: "center",
            block: "start"
            }
        )
    })
}

//Movement on Discography;
    function centerAlbum(){
    var albumToCenter = document.querySelector(".active_album")
    .scrollIntoView({inline: "center", block: "nearest", behavior: "smooth"});
    }

    let albums = document.querySelectorAll(".album");
    for (let x = 0; x != albums.length; x++){
        albums[x].addEventListener("click", function(){
            //remove pre active albums;
            var pre = document.querySelector(".active_album");
            let album = albums[x]

            if (pre == null){ 
                album.classList.add("active_album");
                var albumChildrem = album.children;
                for(var y = 0; y< albumChildrem.length; y++){
                    albumChildrem[y].style.opacity = "100%";
                }
                centerAlbum();
            }
            if (pre == album){
                var preChildren = pre.children;
                for(var y = 0; y < preChildren.length; y++){
                    preChildren[y].style.opacity = "0%";
                }
                pre.classList.remove("active_album");
            }
            else{                
                var preChildren = pre.children;
                for(var y = 0; y < preChildren.length; y++){
                    preChildren[y].style.opacity = "0%";
                }
                pre.classList.remove("active_album");

                album.classList.add("active_album");
                var albumChildrem = album.children;
                for(var y = 0; y< albumChildrem.length; y++){
                    albumChildrem[y].style.opacity = "100%";
                }
                centerAlbum();
            }
        });
    }
  
//Movement on "Love You Make/Take";
    let movementContainer = this.document.querySelector(".movement");
    movementContainer.addEventListener("mouseover", function(){
        let pixelsToMove = 
        (movementContainer.clientWidth - 
        document.querySelector(".movement_container").clientWidth) * -1; //right to left: negative;
        let timeToTransition = pixelsToMove / -60; //1s per 60px;
            movementContainer.style.transition = timeToTransition +"s";
            movementContainer.style.transform = "translateX("+ pixelsToMove +"px)";
        
        let comebackWaitingTime = (timeToTransition * 1000) + 500; 
        let comeback = setTimeout(function(){
            movementContainer.style.transition = timeToTransition +"s";
            movementContainer.style.transform = "translateX(0px)";
            //back to X = 0px;
        }, comebackWaitingTime);
    },{
        once: true,
    })

//Movement on Galery;
    let FirstGaleryItems = document.querySelectorAll(".first_galery_item");
    let SecondGaleryItems = document.querySelectorAll(".second_galery_item");
    let GaleryLength = FirstGaleryItems.length;
    let ActiveItem = 0;

    function moveRight(){
        //Remove active Class;
        FirstGaleryItems[ActiveItem].classList.remove("active_item");
        SecondGaleryItems[ActiveItem].classList.remove("active_item");
        if(ActiveItem == GaleryLength-1){
            ActiveItem = 0;
            FirstGaleryItems[ActiveItem].classList.add("active_item");
            SecondGaleryItems[ActiveItem].classList.add("active_item");
        }
        else{
            ActiveItem++;
            FirstGaleryItems[ActiveItem].classList.add("active_item");
            SecondGaleryItems[ActiveItem].classList.add("active_item");
        }
        //CENTER
        let CenterItems = document.querySelectorAll(".active_item");
        if(ActiveItem == 0){
            CenterItems[0].scrollIntoView({inline: "start", block: "center", behavior: "smooth"});
            let SecondGaleryScroll = setTimeout(function(){
                CenterItems[1].scrollIntoView({inline: "start",behavior: "smooth"});
                CenterItems = null;
            }, 740);
        return
        }
        else{
        CenterItems[0].scrollIntoView({inline: "center", behavior: "smooth"});
        let SecondGaleryScroll = setTimeout(function(){
            CenterItems[1].scrollIntoView({inline: "center", behavior: "smooth"});
            CenterItems = null;
        }, 500);
        }
        return 
    };
    let NextButton = this.document.querySelector("#next_button");
    NextButton.addEventListener("click", moveRight);        

    function moveLeft(){
        item = ActiveItem;
        FirstGaleryItems[item].classList.remove("active_item");
        SecondGaleryItems[item].classList.remove("active_item");

        if(item == 0){
            item = 3;
            FirstGaleryItems[item].classList.add("active_item");
            SecondGaleryItems[item].classList.add("active_item");

        }
        else{
            item = item - 1;
            FirstGaleryItems[item].classList.add("active_item");
            SecondGaleryItems[item].classList.add("active_item");
        }
        ActiveItem = item;
        
        let CenterItems = document.querySelectorAll(".active_item");
        if(ActiveItem == 3){
            CenterItems[0].scrollIntoView({inline: "start", block: "center", behavior: "smooth"});
            let SecondGaleryScroll = setTimeout(function(){
                CenterItems[1].scrollIntoView({inline: "start",behavior: "smooth"});
                CenterItems = null;
            }, 740);
        return
        }
        else{
        CenterItems[0].scrollIntoView({inline: "center", behavior: "smooth"});
        let SecondGaleryScroll = setTimeout(function(){
            CenterItems[1].scrollIntoView({inline: "center", behavior: "smooth"});
            CenterItems = null;
        }, 500);
        }
        return 
    };
    let PrevButton = this.document.querySelector("#previous_button");
    PrevButton.addEventListener("click", moveLeft);
})          
        