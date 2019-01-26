function clock(){
    var d,h,m,s;

    //callimng date constructor
    d=new Date;

    //finding angle
    //for 1hour=30degree
    //for 1min=6degree
    //for 1sec=6degree  
    h=30*((d.getHours()%12)+d.getMinutes()/60);
    m=6*d.getMinutes();
    s=6*d.getSeconds();

    //setting angle
    setAngle('h-hand',h);
    setAngle('m-hand',m);
    setAngle('s-hand',s);
    setAngle('s-tail',s+360);

    //getting time
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();

    //condition for setting suffix
    if(h>=12){
        setText('suffix','PM');
    }
    else{
        setText('suffix','AM');
    }

    //finding time for 12 hour clock
    if(h!=12){
        h=h%12;
    }

    //setting time to text format
    setText('hr',h);
    setText('min',m);
    setText('sec',s);
    
    //calling script in every 1sec
    setTimeout(clock,1000);
}

function setAngle(id,val){
    var v='rotate('+val+',100,100)';
    document.getElementById(id).setAttribute('transform',v);
}

function setText(id,val){
    if(val<10){
        val='0'+val;
    }
    document.getElementById(id).innerHTML=val;
}

window.onload=clock;