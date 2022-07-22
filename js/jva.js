

// start clock 

const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const deg = 6;

setInterval(()=>{
    let currentdate = new Date();
    let hh = currentdate.getHours() * 30;
    let mm = currentdate.getMinutes() * deg;
    let ss = currentdate.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    min.style.transform = `rotateZ(${(mm)}deg)`;
    sec.style.transform = `rotateZ(${(ss)}deg)`;
});

// end clock 



//  start auto type 

var typing = new Typed('#type', {
    strings: ['TIMMING,'],
    typeSpeed: 400,
    backSpeed: 100,
    loop: true,
    // loopCount: Infinity,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,

    // fadeOut: true,
    // fadeOutDelay: 500,

    startDelay: 1000,
});


var typing = new Typed('#typing', {
    strings: ['the only luxury is time. you can\'t get time back!'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: false,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    startDelay: 1500,
});


// end auto type 


// start display 
$('.displayitem').click(function(e){
    $(this).addClass("activedis").siblings().removeClass('activedis');


    var getattr = $(this).attr("data-filter");

    if(getattr === "all"){
      $(".filter").show();
      console.log("hello right")
    }else{
        $('.filter').hide();
        $(".filter").not("."+ getattr).hide();
        $(".filter").filter("."+ getattr).show();
       

        // console.log("hellow wrong")
    }


})
// end display 


