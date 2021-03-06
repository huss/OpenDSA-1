$(document).ready(function() {
    "use strict";
    var av_name = "Mathematical";
    var av = new JSAV(av_name);
    av.container.on('jsav-updatecounter', () => MathJax.Hub.Queue(["Typeset",MathJax.Hub]));
    var injector = PIFRAMES.init(av_name);
    // Load the config object with interpreter and code created by odsaUtils.js
    var config = ODSA.UTILS.loadConfig({av_name: av_name}),
        interpret = config.interpreter, // get the interpreter
        code = config.code;             // get the code object
    var goNext = false;
    av.umsg("The concept of a set in the mathematical sense has a wide application in computer science. The notations and techniques of set theory are commonly used when describing and implementing algorithms because the abstractions associated with sets often help to clarify and simplify algorithm design.");
    // var q = av.question("TF", "Understand the given information", {correct: true, falseLabel: "No", trueLabel: "Yes"});
    // var answer = q.show();
    // alert(answer);
    av.displayInit();
    // av.umsg("Start with the alphabet set. We normally represent an alphabet set with $\\Sigma$. The alphabet set is a set of symbols (typically letters or characters, but it could include any symbols}.");
    // av.step();
    av.umsg(injector.injectQuestion("q1", "A set is a collection of distinguishable members or elements. There is no concept of duplication in a set."));
    av.step();

    //second frame
    // av.umsg("Given some alphabet set $\\Sigma$, a string is a finite sequence of symbols (taken from $\\Sigma$, of course). Suppose we have $\\Sigma = {a, b}$, which of the following are valid strings?");
    // av.step();
    // av.umsg("Suppose we have $\\Sigma = {a, b}$, which of the following are valid strings?");
    // av.step();
    av.umsg(injector.injectQuestion("q2", "A set is a collection of distinguishable members or elements. There is no concept of duplication in a set."));
    av.step();
    // av.umsg(injector.injectQuestion("q2_2"));
    // av.step();
    
    //thrid frame
    // av.umsg("A language is simply a collection of strings defined over $\\Sigma$.");
    // av.step();
    av.umsg(injector.injectQuestion("q3", "Sets members are typically drawn from some larger population known as the base type"));
    av.step();

    //fourth frame
    // av.umsg("Another definition of a language is a subset of the powerset of $\\Sigma$. Remember from Discrete Math class that a power set of any set is the set of all possible subsets from the given set.");
    // av.step();
    // av.umsg("Remember from Discrete Math class that a power set of any set is the set of all possible subsets from the given set.");
    // av.step();
    av.umsg(injector.injectQuestion("q4", "Each member of a set is either a primitive element of the base type or is a set itself."));
    av.step();

    //fifth 
    // av.umsg("Useful notations: We usually use these symbols in our book, For symbols in some alphabet $\\Sigma$, we typically use either digits or letters near the start of the common English alphabet: $a,b,c,d,0,1$ For string names (that is, some variable that is meant to refer to a string), we usually use letters near the end of the common English alphabet: $u,v,w,x,y,z$");
    // av.step();
    av.umsg(injector.injectQuestion("q5", "Sets common symbols: a) {}: braces that surround the set elements."));
    av.step();

    //sixth frame
    av.umsg(injector.injectQuestion("q6", "Sets common symbols: b) {x|x is a positive integer}: A set definition using a set format"));
    av.step();

    //seventh frame
    av.umsg(injector.injectQuestion("q7", "Sets common symbols: c) x∈P: x is a member of set P d) x∉P: x is not a member of set P"));
    av.step();

    //eight frame
    av.umsg(injector.injectQuestion("q8", "Sets common symbols: e) ∅: The null or empty set"));
    av.step();

    //nineth frame
    av.umsg(injector.injectQuestion("q9", "Sets common symbols: f) |P|: Cardinality: the size of set P or number of members for set P"));
    av.step();

    //tenth frame
    // av.umsg("Another useful operation is to reverse a string: Reversing a string means to flip it, in other words, write its symbols in reverse order.");
    // av.step();
    av.umsg(injector.injectQuestion("q10", "Sets common symbols: g) P⊆Q, Q⊇P: Set P is included in set Q, set P is a subset of set Q, or set Q is a superset of the set P"));
    av.step();

    //eleventh frame
    av.umsg(injector.injectQuestion("q11", "Sets common symbols: i) P∪Q:  Union: all elements appearing in P OR Q"));
    av.step();
    
    //twelveth frame
    // av.umsg("One of the most important operations that we use is the * operator, also called the closure operator. “*” of something means concatenating that something zero or more times. For example, if we have $\\Sigma$ = {a,b}, $\\Sigma$* means the set of strings obtained by concatenating 0 or more symbols from $\\Sigma$. ");
    // av.step();
    av.umsg(injector.injectQuestion("q12", "Sets common symbols: i) P∪Q:  Union: all elements appearing in P OR Q"));
    av.step();

    //13th frame
    // av.umsg("Slightly different from the * operator, sometimes we want to have at least one copy of the thing that we are concatenating. Then we use +. One way of thinking of this: $\\Sigma$+=$\\Sigma$∗−{$\\lambda$}");
    // av.step();
    av.umsg(injector.injectQuestion("q13", "Sets common symbol: i) P∪Q:  Union: all elements appearing in P OR Q"));
    av.step();

    //14th frame
    // av.umsg("Sets. As we see, Languages are sets, so all sets of operations can be applied to them.");
    // av.step();
    av.umsg(injector.injectQuestion("q14", "Sets common symbols: j)P∩Q: Intersection: all elements appearing in P AND Q"));
    av.step();
    
    //15th frame
    // av.umsg("Sets. As we see, Languages are sets, so all sets of operations can be applied to them.");
    // av.step();
    av.umsg(injector.injectQuestion("q15", "Sets common symbols: j)P∩Q: Intersection: all elements appearing in P AND Q"));
    av.step();

    //16th frame
    // av.umsg("In languages, $\\Sigma$∗  represents the Universe set $U4.  For, example, the complement of $L1$ will be the set of all strings in $\\Sigma$  except the strings in $L$. in other words,");
    // av.step();
    av.umsg(injector.injectQuestion("q16", "Sets common symbols: i) P∩Q:  Intersection: all elements appearing in P AND Q"));
    av.step();

    //17th frame
    // av.umsg("Sets concatenation. Concatenating two sets $L1$, and $L2$ means concatenating every string in $L1$ with each string in $L2$.");
    // av.step();
    av.umsg(injector.injectQuestion("q17", "Sets common symbols: k) P - Q: difference: all elements of set P NOT in set Q"));
    av.step();

    //18th frame
    // av.umsg("Sets concatenation. Concatenating a set zero times will give the set of the empty string $\\lambda$.");
    // av.step();
    av.umsg(injector.injectQuestion("q18", "Sets common symbols: k) P - Q: difference: all elements of set P NOT in set Q"));
    av.step();

    //19th frame
    // av.umsg("Sets concatenation. Concatenating a set n times means concatenating every string in L with each string in $L$ n times");
    // av.step();
    av.umsg(injector.injectQuestion("q19", "Sets common symbols: k) P - Q: difference: all elements of set P NOT in set Q"));
    av.step();
    
    //20th
    av.umsg(injector.injectQuestion("q20", "Sets common symbols: k) P x Q: Set (Cartesian) Product: yields a set of ordered pairs"));
    av.step();
    //21st
    av.umsg(injector.injectQuestion("q21", "Sets common symbols: k) P x Q: Set (Cartesian) Product: yields a set of ordered pairs"));
    av.step();

    //22nd
    av.umsg(injector.injectQuestion("q22", "The powerset of a set S (denoted 2S ) is the set of all possible subsets for S."));
    av.step();



    av.recorded();
    // $(".jsavforward").css("pointer-events", "none");  
    // $(".jsavend").css("pointer-events", "none");  
    // var currnet = 0;
    // var index = 0;
    // $('.jsavforward').click(function() {
    //     if(index === currnet)
    //     $(".jsavforward").css("pointer-events", "none");  
    //     else{
    //     $(".jsavforward").css("pointer-events", "auto");  
    //     index++;
    //     }
    //     });

    // $('.jsavbackward').click(function() {
          
    //     if(index>0){
    //     index--;
    //     $(".jsavforward").css("pointer-events", "auto");
    //     }
    //     });
    // $('.jsavbegin').click(function() {
    //     $(".jsavforward").css("pointer-events", "auto");  
    //     index=0;
    //     });
    // $('.jsavend').click(function() {
    //     $(".jsavforward").css("pointer-events", "none");  
    //     });
});
    
  
