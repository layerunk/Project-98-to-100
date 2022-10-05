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


    var synth = window.speechSynthesis;
    var speech = "Clicking selfies in next 5 seconds";
    var audiofile = new SpeechSynthesisUtterance(speech);
    synth.speak(audiofile);
    img_id = "sel1";

    setTimeout(function(){
        clickpic();
    }, 1000);

    setTimeout(function(){

        clickpic();    
    }, 3500);

    setTimeout(function(){

        clickpic();       
    }, 5000);

} 

Webcam.set({
    width: 400,
    height: 300,
    image_format: 'png',
    png_quality: 120
});



function clickpic(){
    Webcam.snap(function(pica){
        if(img_id == "sel1"){
         document.getElementById("result1").innerHTML = '<img id = "picture1" src = "' + pica +'">';
         img_id = "sel2";
        }

        if(img_id == "sel2"){
            document.getElementById("result2").innerHTML = '<img id = "picture2" src = "' + pica +'">';
            img_id = "sel3";
        }

        if(img_id == "sel3"){
            document.getElementById("result3").innerHTML = '<img id = "picture3" src = "' + pica +'">';
        }

    });
}

function save1(){
    var textarea = document.getElementById("anc");
    var picture = document.getElementById("picture1").src;

    textarea.href = picture;

    textarea.click();
}

function save2(){
    var textarea = document.getElementById("anc");
    var picture = document.getElementById("picture2").src;

    textarea.href = picture;

    textarea.click();
}

function save3(){
    var textarea = document.getElementById("anc");
    var picture = document.getElementById("picture3").src;

    textarea.href = picture;

    textarea.click();
}

