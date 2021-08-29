let listvid=document.querySelectorAll(".video_list .Vid");
let MainVid=document.querySelector(".main_video video");
let title=document.querySelector(".main_video .title");

listvid.forEach(video =>{
    video.onclick=()=>{
        listvid.forEach(Vid =>Vid.classList.remove('active'));
        video.classList.add('active');
        if( video.classList.contains('active')){
            let src=video.children[0].getAttribute('src');
            MainVid.src=src;
            let text=video.children[1].innerHTML;
            title.innerHTML=text;
        };
    };
});
