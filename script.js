const VideoElement = document.querySelector("#video");
const buttonpip = document.querySelector('#button_pip')
const buttonvideo = document.querySelector("#button_video");
const title = document.querySelector(".title")
const textContainer = document.querySelector(".text-container");


//async function for MediaStream Selecting
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        VideoElement.srcObject = mediaStream;
        VideoElement.onloadedmetadata = () => {
            VideoElement.play();
        };
    }
    catch(e){
        console.log('Something Wrong...', e)
    };
};


//async function for PiP FUNTION
async function pip(){
    buttonpip.disabled = true;
    await VideoElement.requestPictureInPicture();
    buttonpip.disabled = false;
};



//addEventListenr to button and body
buttonpip.addEventListener("click", pip);
buttonvideo.addEventListener("click",selectMediaStream);
document.body.addEventListener("click", () => {
  textContainer.classList.add("activehead");
});
