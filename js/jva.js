

// start clock 

const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const deg = 6;

setInterval(()=>{
    let currentdate = new Date();
    let h = currentdate.getHours() * 30;
    let m = currentdate.getMinutes() * deg;
    let s = currentdate.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(h)+(m/12)}deg)`;
    min.style.transform = `rotateZ(${(m)}deg)`;
    sec.style.transform = `rotateZ(${(s)}deg)`;
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



// start modal box
$("#pw").click(function(){
    var hideshowpw = $('#password').attr("type");
    if(hideshowpw === "password"){
       hideshowpw =  "text";
        $("#pw").html(`<i class="fa-solid fa-unlock"></i> hide password`).css("color","#fff");
    }else{      
        hideshowpw = "password";
        $("#pw").html(`<i class="fa-solid fa-lock"></i> show password`);
    }
    $("#password").attr("type",hideshowpw);
   });

//    for comfirm password 
$("#compw").click(function(){
    var comfirmpassword = $("#compassword").attr("type");
    if(comfirmpassword === "password"){
        comfirmpassword = "text";
        $("#compw").html(`<i class="fa-solid fa-unlock"></i> hide password`).css("color","#fff");
    }else{
        comfirmpassword = "password";
        $("#compw").html(`<i class="fa-solid fa-lock"></i> show password`);
    }
    $("#compassword").attr("type",comfirmpassword);     
});

// password match 
$("#compassword").on("keyup",function(){
    let password = $('#password').val();
let compassword = $("#compassword").val();
    if(password != compassword){
        $('#textspace1').html("password does not match").css("color","#fff");
    }else{
        $('#textspace1').html("password match").css("color","#fff");
    }
})
 
// end modal box 





