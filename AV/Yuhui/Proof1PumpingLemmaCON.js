/*global ODSA */
"use strict";
$(document).ready(function () {
  var av_name = "Proof1PumpingLemmaCON";
  var av;
  
  var xoffset = -30;
  var yoffset = 0;
  var circRadius = 20;
  av = new JSAV(av_name);
  MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
  $(".avcontainer").on("jsav-message", function() {
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
  });

    //Slide 1
    av.umsg("Suppose that $L_2$ is regular");
    av.displayInit();

    //Slide 2 
    av.umsg("If $L_2$ is regular then there exista a DFA $M$ that recognizes $L_2$.");
    var g = av.ds.graph({directed: true});
    
    var q0 = g.addNode("q0", {left: xoffset, top: yoffset + 100});   
    var q1 = g.addNode("q1", {left: xoffset + 80, top: yoffset + 100});
    var e1 = g.addEdge(q0, q1);
    var arrow1 = av.g.line(307, 130, 408, 130, {"stroke-width": 2, "arrow-end": "classic-wide-long"});
    var arrow2 = av.g.line(510, 130, 625, 130, {"stroke-width": 2, "arrow-end": "classic-wide-long"});
    var arrow3 = av.g.line(150, 130, 195, 130, {"stroke-width": 2, "arrow-end": "classic-wide-long"});
    var qn = g.addNode("qn", {left: xoffset + 430, top: yoffset + 98});
    qn.addClass('final');
    var label = av.label("$.............$", {"top": yoffset + 100, "left": xoffset + 450});
    var labelM = av.label("$M$", {"top": yoffset, "left": xoffset + 450});
    g.layout();
    av.step();

    //Slide 3
    av.umsg("$M$ has a finite number of states, say $k$ states.");
    var labelK = av.label("$|----------------k-----------------|$", {"top": yoffset + 70, "left": xoffset + 230});
    av.step();

    //Slide 4
    av.umsg("Consider a long string $a^kb^k \\in L_2$.");
    var arrValues = ["a", "a", "...", "a", "b", "...", "b", "b"];
    var arr = av.ds.array(arrValues);
    var labelab = av.label("$|----k----|----k----|$", {"left": xoffset + 338, "top": yoffset + 250});
    av.step();

    //Slide 5
    var arrow4 = av.g.line(320, 230, 210, 148, {"stroke-width": 2, "arrow-end": "classic-wide-long"});
    var arrow5 = av.g.line(350, 230, 290, 148, {"stroke-width": 2, "arrow-end": "classic-wide-long"});
    var arrow6 = av.g.line(410, 230, 450, 148, {"stroke-width": 2, "arrow-end": "classic-wide-long"});
    av.step();

    //Slide 6
    av.umsg("Since there are $k$ states and $k$ a's, some state in $M$ must be reached more than once when following the path of $a^k$.");
    
    av.step();

    //Slide 7
    av.umsg("In that case, there is a loop with one or more a's (say $t$ a's for some $t>1$) along the path.");
    arrow2.hide();
    arrow1.hide();
    labelM.hide();
    labelK.hide();
    label.hide();
    var arrow7 = av.g.line(307, 130, 347, 130, {"stroke-width": 2, "arrow-end": "classic-wide-long"});
    var label1 = av.label("$..........$", {"top": yoffset + 100, "left": xoffset + 380});
    var arrow8 = av.g.line(407, 130, 447, 130, {"stroke-width": 2, "arrow-end": "classic-wide-long"});
    var qt = g.addNode("qt", {left: xoffset + 250, top: yoffset + 100});
    var qt1 = g.addNode(" ", {left: xoffset + 200, top: yoffset});
    var qt2 = g.addNode(" ", {left: xoffset + 300, top: yoffset});
    var e2 = g.addEdge(qt, qt2);
    var e3 = g.addEdge(qt1, qt);
    var e4 = av.g.line(495, 30, 470, 30, {"stroke-width": 2, "arrow-end": "classic-wide-long"});
    var e5 = av.g.line(450, 30, 425, 30, {"stroke-width": 2, "arrow-end": "classic-wide-long"});
    var arrow8 = av.g.line(477, 130, 527, 130, {"stroke-width": 2, "arrow-end": "classic-wide-long"});
    var label2 = av.label("$..........$", {"top": yoffset + 100, "left": xoffset + 560});
    var label3 = av.label(".....", {"top": yoffset, "left": xoffset + 480});
    var labela = av.label("$t$ a's", {"top": yoffset + 45, "left": xoffset + 480});
    var arrow9 = av.g.line(580, 130, 626, 130, {"stroke-width": 2, "arrow-end": "classic-wide-long"});
    arrow6.hide();
    var arrow10 = av.g.line(410, 230, 560, 140, {"stroke-width": 2, "arrow-end": "classic-wide-long"});
    var arrow11 = av.g.line(380, 230, 463, 148, {"stroke-width": 2, "arrow-end": "classic-wide-long"});
    g.layout();
    av.step();

    //Slide 8
    av.umsg("Suppose we start at the initial state, traverse the same path for $a^kb^k$, but we traverse the loop of a's one additional time.");
    av.step();

    //Slide 9
    av.umsg("We will end up in the same final state that $a^kb^k$ did, but our actual number of a's is some other value (call it $m$).");
    arr.hide();
    arrow10.hide();
    arrow11.hide();
    labelab.hide();
    arrow4.hide();
    arrow5.hide();
    var arrValues2 = ["a", "a", "...", "a", "a", "...", "a", "b", "...", "b", "b"];
    var arr2 = av.ds.array(arrValues2);
    var labelaab = av.label("$|------m>k-------|----k----|$", {"left": 260, "top": 250});
    av.g.line(280, 230, 210, 148, {"stroke-width": 2, "arrow-end": "classic-wide-long"});
    av.g.line(310, 230, 290, 148, {"stroke-width": 2, "arrow-end": "classic-wide-long"});
    av.g.line(380, 230, 460, 148, {"stroke-width": 2, "arrow-end": "classic-wide-long"});
    av.g.line(460, 230, 560, 140, {"stroke-width": 2, "arrow-end": "classic-wide-long"});
    av.step();

    //Slide 10
    av.umsg("Therefore, the string $a^mb^k$ is accepted by $M$, but this string is not in $L_2$. Contradiction!");
    av.step();

    //Slide 11
    av.umsg("Thus, $L_2$ is not regular.");
    av.recorded(); 
    
});
