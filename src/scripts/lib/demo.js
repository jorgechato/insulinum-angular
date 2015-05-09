'use strict';

$(document).on('ready',function(){
    // NProgress.configure({ ease: 'ease', speed: 500 });
    NProgress.start();
});

$(window).on('load',function(){
    NProgress.done();
});

function canvasToPdf(chart){
    // var pdf = new jsPDF('p','pt','a4');
    // pdf.addHTML($(chart),function() {
    //     pdf.output('datauri');
    // });

    var canvas = $(chart);

    chart = chart.replace('#','');
    var fullQuality = canvas[0].toDataURL("image/png", 1.0);

    var a = $("<a>")
    .attr("href", fullQuality)
    .attr("download", chart+".png")
    .appendTo("body");

    a[0].click();

    a.remove();

    // var doc = new jsPDF();
    // doc.addImage(fullQuality, 'JPEG', 535, 267);
    // doc.save("test.pdf");
}
