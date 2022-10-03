// author: rottweilas
// mail: rottweilasdev@gmail.com

function skipStop()
{
    if(document.querySelector("body > ytmusic-app > ytmusic-popup-container > tp-yt-paper-dialog > ytmusic-you-there-renderer > div > yt-button-renderer"))
    {document.querySelector("body > ytmusic-app > ytmusic-popup-container > tp-yt-paper-dialog > ytmusic-you-there-renderer > div > yt-button-renderer").click();} 
    setTimeout(skipStop, 1500);
}
