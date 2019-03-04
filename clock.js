document.addEventListener('DOMContentLoaded', function(){
    
    'use strict';
    
    
    
    var canvas = document.createElement('canvas');
    var c = canvas.getContext('2d');
    document.body.appendChild(canvas);
    
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    
    
   
    
    function degToRad(degree){
     
        var factor = Math.PI/180;
        return degree * factor;
    }
    
    function renderTime(){
        
        requestAnimationFrame(renderTime);
        // data
        let date = new Date();
        let fullDate = date.toDateString();
        let fullTime = date.toTimeString();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let miliseconds = date.getMilliseconds();
        let newSeconds = seconds + (miliseconds/1000);
        
        
        if(seconds<10) seconds = '0' +seconds;
        if(minutes<10) minutes = '0' +minutes;
        
        let timeNow = hours + ':' + minutes + ':' + seconds;
        // background
        
        c.fillStyle = '#333';
        c.fillRect(0,0, innerWidth, innerHeight);
        c.fill();
        // hours
        
        c.beginPath();
        c.arc(innerWidth/2, innerHeight/2, 350, degToRad(270), degToRad((hours*30)-90), false);
        c.strokeStyle = '#037895';
        c.lineCap = 'round';
        c.lineWidth = 30;
        c.shadowBlur = 15;
        c.shadowColor = '#037895';
        c.stroke();
        
        // minutes
        
        c.beginPath();
        c.arc(innerWidth/2, innerHeight/2, 290, degToRad(270), degToRad((minutes*6)-90), false);
        c.strokeStyle = '#27879f';
        c.lineCap = 'round';
        c.lineWidth = 30;
        c.shadowBlur = 15;
        c.shadowColor = '#27879f';
        c.stroke();
        
        // seconds
        
        c.beginPath();
        c.arc(innerWidth/2, innerHeight/2, 230, degToRad(270), degToRad((newSeconds*6)-90), false);
        c.strokeStyle = '#28d1fa';
        c.lineCap = 'round';
        c.lineWidth = 30;
        c.shadowBlur = 15;
        c.shadowColor = '#28d1fa';
        c.stroke();
        // Datatext
        
        c.beginPath();
        c.font = "50px Arial";
        c.shadowBlur = 20;
        c.shadowColor = '#22aacb';
        c.fillStyle = '#28d1fa';
        c.fillText(fullDate, innerWidth/2.5, innerHeight/2);
        c.closePath();
        
        c.beginPath();
        c.font = "50px Arial";
        c.fillStyle = '#28d1fa';
        c.fillText(timeNow,innerWidth/2.2,innerHeight/1.7);
        c.fill();
        
    }
    
renderTime(); 
});