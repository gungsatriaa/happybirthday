function playSound(audioName) {
    let audio = new Audio(audioName)
    audio.loop = true;
    audio.play();
}
playSound("88.mp3");