var prediction1 = "";
var prediction2 = "";
Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function takezesnap() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id='imageclicked' src='" + data_uri + "'>"
    })
}

console.log(ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/T2b9P_OYM/model.json', modelLoaded);

function modelLoaded() {
    console.log("model do be kinda loaded")
}

function speak() {
    synth = window.speechSynthesis;
    speak1 = "The first prediction is: " + prediction1;
    speak2 = "The second prediction is: " + prediction2;
    synth.speak(new SpeechSynthesisUtterance(speak1 + speak2));
}

function result() {
    setTimeout(function(){
        speak()
    },10000);
}

//srauhfirwefjvnerfeurgherjgerilwjhuecfbdddddvbgufcknsrgefdasrgdf

function check() {
    img=document.getElementById("imageclicked")
    classifier.classify(img, getResult)
}

function getResult(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_emotionname").innerHTML = results[0].label;
        document.getElementById("result_emotionname2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();

        //Prediction 1 ifs

        if(prediction1 == "Happy") {
            console.log(prediction1 + "predic1 Happy")
            document.getElementById("updateemoji").innerHTML="&#128522"
        }
        else if(prediction1 == "Crying") {
            console.log(prediction1 + "predic1 Crying")
            document.getElementById("updateemoji").innerHTML="&#128546"
        }
        else if(prediction1 == "Sad") {
            console.log(prediction1 + "predic1 Sad")
            document.getElementById("updateemoji").innerHTML="&#128532"
        }
        else {
            console.log(prediction1 + "predic1 Angry")
            document.getElementById("updateemoji").innerHTML="&#128545"
        }

        //Prediction 2 ifs

        if(prediction2 == "Happy") {
            console.log(prediction2 + "predic2 Happy")
            document.getElementById("updateemoji2").innerHTML="&#128522"
        }
        else if(prediction2 == "Crying") {
            console.log(prediction2 + "predic2 Crying")
            document.getElementById("updateemoji2").innerHTML="&#128546"
        }
        else if(prediction2 == "Sad") {
            console.log(prediction2 + "predic2 Sad")
            document.getElementById("updateemoji2").innerHTML="&#128532"
        }
        else {
            console.log(prediction2 + "predic2 Angry")
            document.getElementById("updateemoji2").innerHTML="&#128545"
        }


    }
}