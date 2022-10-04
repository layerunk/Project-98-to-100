var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition(); 

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){

console.log(event);

content = event.results[0][0].transcript; 
console.log(content);

document.getElementById("textbox").innerHTML = content;



if(content == "take my selfie"){
    speak();
}

}

function speak(){


    var camera = document.getElementById("camera"); 
    Webcam.attach(camera);




    setTimeout(function(){
        var img_id = "sel1";
        var synth = window.speechSynthesis;
        var speech = "Clicking selfies in next 5 seconds";
        var audiofile = new SpeechSynthesisUtterance(speech);
        synth.speak(audiofile);
        clickpic();
        save();
    }, 1000);

    setTimeout(function(){
        var img_id = "sel2";
        clickpic();       
        save();
    }, 3500);

    setTimeout(function(){
        var img_id = "sel3";
        clickpic();       
        save();
    }, 5000);

} 

Webcam.set({
    width: 300,
    height: 500,
    image_format: 'png',
    png_quality: 120
});



function clickpic(){
    Webcam.snap(function(pica){
        if(img_id == "sel1"){
            picu = document.getElementById("pic1").innerHTML = '<img id = "picture1" src = "' + pica +'">';
            document.getElementById("result1").innerHTML = picu; 
        }

        if(img_id == "sel12"){
            picu = document.getElementById("pic2").innerHTML = '<img id = "picture2" src = "' + pica +'">';
            document.getElementById("result2").innerHTML = picu; 
        }

        if(img_id == "sel3"){
            picu = document.getElementById("pic3").innerHTML = '<img id = "picture3" src = "' + pica +'">';
            document.getElementById("result3").innerHTML = picu; 
        }

    });
}

function save(){
    var textarea = document.getElementById("anc");
    var picture = document.getElementById("picture").src;

    textarea.href = picture;

    textarea.click();
}