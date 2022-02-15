
const select = document.getElementById("select")


if ("webkitSpeechRecognition" in window) {
    let speechRecognition = new webkitSpeechRecognition();
    
    speechRecognition.onstart = function() {
        document.querySelector(".text-lis").style.display = "block";
    };
    
    speechRecognition.onerror = function() {
        document.querySelector(".text-lis") = "Speech Recognition Error";
    };
    
    speechRecognition.onend = function() {
        document.querySelector(".text-lis").style.display = "none";
    };
    
    speechRecognition.onresult = function(event) {
        
        if(select.value === "eng"){
            speechRecognition.lang = "en-US";
            let transcript = event.results[0][0].transcript;
            document.querySelector("#textarea").innerHTML = transcript;
        }
        if(select.value === "rus"){
            speechRecognition.lang = "ru-RU";
            let transcript = event.results[0][0].transcript;
            document.querySelector("#textarea").innerHTML = transcript;
        }
        if(select.value === "uz"){
            speechRecognition.lang = "uz-UZ";
            let transcript = event.results[0][0].transcript;
            document.querySelector("#textarea").innerHTML = transcript;
        }
    }
    
    
    
    document.querySelector(".btn1").onclick = function() {
        speechRecognition.start();
    };
    document.querySelector(".btn2").onclick = function() {
        speechRecognition.stop();
    };
    
} else{
    
    console.log("Speech Recognition Not Available");
}