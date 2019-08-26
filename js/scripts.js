$(document).ready(function(){
    $(".click1").click(function(){
        $("#par1").toggle();
        $(".hidden1").toggle();
    });
    $(".click2").click(function(){
        $("#par2").toggle();
        $(".hidden2").toggle();
    });
    $(".click3").click(function(){
        $("#par3").toggle();
        $(".hidden3").toggle();
    });
    $('form#submitform').submit(function(){
        var name = $('#name').val();
        var email = $('#email').val();
        var text = $('#text').val();
        alert("Hy " + name + " Thank you for reaching out to us.We have received your details!");
    });
    
    $(".row4").hover(function(){
        $(".imge4").css({"opacity":"0.2","transition":"3s"});
        $("#part4").show();
    },
    function(){
        $(".imge4").css("opacity","1");
        $("#part4").hide();
    });
    $(".row3").hover(function(){
        $(".imge3").css({"opacity":"0.2","transition":"3s"});
        $("#part3").show();
    },
    function(){
        $(".imge3").css("opacity","1")
        $("#part3").hide();
    });
    $(".row2").hover(function(){
        $(".imge2").css({"opacity":"0.2","transition":"3s"});
        $("#part2").show();
    },
    function(){
        $(".imge2").css("opacity","1")
        $("#part2").hide();
    });
    $(".row1").hover(function(){
        $(".imge1").css({"opacity":"0.2","transition":"3s"});
        $("#part1").show();
    },
    function(){
        $(".imge1").css("opacity","1")
        $("#part1").hide();
    });
    $(".row5").hover(function(){
        $(".imge5").css({"opacity":"0.2","transition":"3s"});
        $("#part5").show();
    },
    function(){
        $(".imge5").css("opacity","1")
        $("#part5").hide();
    });
    $(".row6").hover(function(){
        $(".imge6").css({"opacity":"0.2","transition":"3s"});
        $("#part6").show();
    },
    function(){
        $(".imge6").css("opacity","1")
        $("#part6").hide();
    });
    $(".row7").hover(function(){
        $(".imge7").css({"opacity":"0.2","transition":"3s"});
        $("#part7").show();
    },
    function(){
        $(".imge7").css("opacity","1")
        $("#part7").hide();
    });
    $(".row8").hover(function(){
        $(".imge8").css({"opacity":"0.2","transition":"3s"});
        $("#part").show();
    },
    function(){
        $(".imge8").css("opacity","1")
        $("#part8").hide();
    });
});


    
    