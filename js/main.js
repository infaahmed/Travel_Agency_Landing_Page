$(document).ready(function () {
    // section one animation
    $("#section-1").waypoint(function(){
        // banner heading animation
        $("#banrHeading").addClass("animate__animated animate__zoomIn animate__slow");
        // banner text animation
        $("#banrText").addClass("animate__animated animate__fadeInUp animate__slow");
        // banner button animation
        $("#whyCamp").addClass("animate__animated animate__fadeInTopLeft animate__slow");
        // banner button animation
        $("#howCamp").addClass("animate__animated animate__fadeInRight animate__slow");
    }, {offset:'40%'});
});
