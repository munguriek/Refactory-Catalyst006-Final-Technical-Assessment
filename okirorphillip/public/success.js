function bootstrapAlert() {
    $(".bootstrap-growl").remove()
    $.bootstrapGrowl("This is A success message!",{
        type: "success",
        offset: {from:"top",amount:250},
        align: "center",
        delay: 3000,
        allow_dismiss: true,
        stackup_spacing: 10
    });
}