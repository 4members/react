function home() {

    d3.select("#hello").style("color", "red");
}

function fun2() {

    d3.select('[id="2"]').style("color", function() {
        return "hsl(" + Math.random() * 360 + ",100%,50%)";
    });
}

function fun3() {
    d3.selectAll("p")
        .data([16, 23, 42])
        .style("font-size", function(d) {
            return d + "px";
        });
}

function fun4() {
    var p = d3.select("body")
        .selectAll("p")
        .data(['Hello World (1)', 'Hello World (2)', 'Hello World (3)', 'Hello World (4)', 'Hello World (5)', 'Hello World (6)'])
        .text(function(d) {
            return d + "!";
        });

    // Enter…
    p.enter().append("p")
        .text(function(d) {
            return d;
        });
    p.enter().append("button").text(() => {
      return "Delete Node 4"
    }).onclick("fun5()");



}

function fun5() {

    d3.select('[id="4"]').exit.remove()


}
