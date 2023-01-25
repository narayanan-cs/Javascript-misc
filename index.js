async function getConnectedDevices(type)
{
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter((device)=> device.kind===type);
}

async function openCamera(cameraId, minWidth, minHeight)
{
    const constraints = {'audio':{'echoCancellation': true},
                         'video': {'deviceId': cameraId,'width':{'min':minWidth},'height':{'min':minHeight}}   }

                         return navigator.mediaDevices.getUserMedia(constraints);

}

async function playVideoFromCamera()
{
    try{
        const constraints = {'video':true, 'audio': true}
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const videoElement = document.querySelector('video#localVideo');
        videoElement.srcObject = stream;
    }catch(error)
    {
        console.log("Error Opening video camera");
    }
}