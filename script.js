$(document).ready(function () {

    var First = null
    var Last = null

    console.log(First)
    console.log(Last)

    var ctr = 1 ;
    
    $(".btn-primary").click(() => {
        First = $(".firstname").val()
        Last = $(".lastname").val()
        let bogart = ctr;
        $(`<tr><th scope="row">${bogart}</th><td>${First}</td><td>${Last}</td></tr>`).appendTo(".table")
        ctr++;
    })


});