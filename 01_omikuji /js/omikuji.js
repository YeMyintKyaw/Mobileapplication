"use strict";

window.addEventListener("DOMContentLoaded",
    function() {
        $("header").textillate({
            loop: false,
            minDisplayTime: 2000,
            initialDelay: 2000,
            autoStart: true,
            in: {
                effect: "fadeInLeftBig",
                delayScale: 1.5,
                delay: 50,
                sync: false,
                shuffle: true
            }
        });

        $(function(){
            ScrollReveal().reveal("#btn1", { duration: 9000});
        });
        setTimeout(
            function (){
                let popMessage = "いらっしゃい！おみくじ引いてって！";
                window.alert(popMessage);
            },
            "5000"
        );
        
        
    }, false
);

const btn1 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");
btn1.addEventListener("click",
    function(){
        /*
        let n = Math.floor(Math.random() * 3);

        switch (n) {
            case 0:
                btn1.textContent= "Very Happy!!";
                btn1.style.color= "#FF0000";
                btn1.style.fontSize = "40px";
                break;
            case 1:
                btn1.textContent= "Happy!!";
                btn1.style.color= "#fff001";
                btn1.style.fontSize = "30px";
                break;
            case 2:
                btn1.textContent= "UnHappy!!";
                btn1.style.color= "#261e1c";
                btn1.style.fontSize = "20px";
                break;
        }
        */
        let resultText = ["大吉!!!!!","吉!!!!","中吉!!!","小吉!!","末吉!","凶。。"];
        let resultColor = ["#ff0000","#c71585","#ff1493","#ff69b4","#ff8c00","#1e90ff"];
        let resultFontSize = ["55px","50px","45px","40px","35px","30px"];
        let resultMaxSpeed = ["10","10","8","5","5","5"];
        let resultMaxSize = ["30","30","20","15","20","20"];
        let resultImage = ["images/star.png","images/sakura_hanabira.png","images/sakura_hanabira.png","images/sakura_hanabira.png","images/leaf.png","images/snowflakes.png"];
        let resultSound = ["sound/omikuji_sound1.mp3", "sound/omikuji_sound2.mp3", "sound/omikuji_sound3.mp3", "sound/omikuji_sound4.mp3", "sound/omikuji_sound5.mp3", "sound/omikuji_sound1.mp3"];
        let n = Math.floor(Math.random() * resultText.length);
        omikujiText.textContent = resultText[n];
        omikujiText.style.color = resultColor[n];
        omikujiText.style.fontSize = resultFontSize[n];
        $(document).snowfall("clear");
        
        $(document).ready(function(){
            $(document).snowfall({
                maxSpeed : resultMaxSpeed[n],
                minSpeed : 1,
                maxSize : resultMaxSize[n],
                minSize : 1,
                image : resultImage[n],
            });
            let music = new Audio(resultSound[n]);
            music.currentTime = 0;
            music.play();
        });
    }, false
);


