var preediction = "";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});


camera=document.getElementById("camera");
Webcam.attach('#camera');


function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version=',ml5.version);

Classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/j06oPbAkP/model.json',modelloaded);


function modelloaded()
    {
        console.log('modelloaded');
    }


function speak()
{
    var Synth=window.speechSynthesis;
    speakdata="The prediction is "+preediction;
    var Utterthis=new SpeechSynthesisUtterance(speakdata);
    Synth.speak(Utterthis);
}

