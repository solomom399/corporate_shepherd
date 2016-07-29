
//==========================================================

$("#p-form").submit(function(){
  $(".run").click()
    $.ajax({
      type: "POST",
      url: "http://csga.com.ng/engine/promoters-login.php",
      data: new FormData(this),
      contentType: false,
         cache: false,
   processData:false,
      cache: false,
      success: function(resp) {
            if(resp == true){
                location.href = "data/register-agent.html"
            }else{
                $(".check").text(resp).css("color","red")
                $(".close").click()
            }
        }
    })
    return false
})


$("#a-form").submit(function(){
  $(".run").click()
    $.ajax({
      type: "POST",
      url: "http://csga.com.ng/engine/register-users.php",
      data: new FormData(this),
      contentType: false,
         cache: false,
   processData:false,
      cache: false,
      success: function(resp) {
            if(resp == true){
              $(".su").text("Successful").css("color","green")
                    location.href = "register-agent.html"
            }else{
                $(".check").text(resp).css("color","red")
                $(".close").click()
            }
        }
    })
    return false
})



$("#ad-form").submit(function(){
  $(".run").click()
    $.ajax({
      type: "POST",
      url: "http://csga.com.ng/engine/admin-login.php",
      data: new FormData(this),
      contentType: false,
         cache: false,
   processData:false,
      cache: false,
      success: function(resp) {
            
        }
    })
    return false
})


$(function (){
  function cameraSuccess(imagedata){
    $(".file").val(imagedata)
  }

  function cameraError(error){
    alert(error)
  }

  function accesscamera(){
    var options = {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType:  Camera.PictureSourceType.CAMERA
    };

    navigator.camera.getPicture(cameraSuccess, cameraError, options);
  }


  $("#btn").on("click",accesscamera)
})


