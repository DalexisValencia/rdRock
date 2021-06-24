$(".form-managed-file").prev().css("border", "10px solid orange")

$('#upload-paso3 input[type="file"]').live('change', function(){ 
    console.warn("ha cambiado", $(this).length);
    // input[data-drupal-selector='edit-image-upload-remove-button']
    $(".abi-file_control.js-form-managed-file.form-managed-file").on("click", function(){
        console.warn("whats?")
        $(".abi-file_control.js-form-managed-file.form-managed-file").css("border", "1px solid magenta");
        setTimeout(() => {
            var btnDelete = $("input[data-drupal-selector='edit-image-upload-remove-button']")
                btnDelete.css("pointer-events", "all");

                setTimeout(() => {
                    console.error("lanzo el evento")
                    btnDelete.trigger("submit");
                }, 1000);

        }, 1000);
    })
});

$('#upload-paso3').bind('DOMSubtreeModified', function(e) {
    var fileContainer = $(".abi-file_control.js-form-managed-file.form-managed-file .file--image");
    // var upload = $('#upload-paso3 input[type="file"]');

    if (fileContainer.length == 1) {
        console.error("Hay una imagen cargada");
        $("div[id^='ajax-wrapper-']").addClass("image-uploaded");
    }

    if (fileContainer.length == 0) {
        console.error("estilos de imagen no cargada");
        $("div[id^='ajax-wrapper-']").removeClass("image-uploaded");
    }
    
    // console.warn(fileContainer, 'fileContainer');
});

$()