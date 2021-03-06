/*global define */
(function() {
  "use strict";
  	var
	  jsav,           // The JSAV object
	  jsavArr,        // The array that the user manipulates (JSAV object)
	  userInput,      // Boolean: Tells us if user ever did anything
	  assigned=[],
	  correctassignment=[],
	  Solution,
	  answer;
	var clauses,mapping,labels,literals,clausecnt,literalcnt;

	var threeSAT_KA = {

		userInput:false,
		// Initialise the exercise
		initJSAV:function (cntc,cntl) {
		  jsav = new JSAV("jsav");
		  jsav.recorded();
		  var i, j;
		  answer = -1;
		  clausecnt = cntc;
		  literalcnt = cntl;
		  literals = [];
		  for(var i=1;i<=literalcnt;i++)
			literals.push("<code>x_"+i+"</code>");
		  clauses = [];
		  mapping=new Array(literalcnt);
		  for(var i=0;i<literalcnt;i++)
		  	assigned[i]=0;
		//mapping[i]=[];
		  labels=new Array(clausecnt);
		  var x=0;
		  var y=35;
		  var ln=0;
		  var str=" ";
		  for(var i=0;i<clausecnt;i++){
			clauses[i]=new Array(3);
			var blacklist=[];
			for(var j=0;j<3;j++){
				var tmp=getRandomInt(1,2*literalcnt,blacklist);
				blacklist.push(tmp);
				if(tmp>literalcnt){
					tmp = literalcnt-tmp;
					blacklist.push(tmp*(-1));
				}
				else
					blacklist.push(literalcnt + tmp);
				clauses[i][j]=tmp;
			}
		        str = "<code>( ";	
			for(var j=0;j<3;j++){
				if(clauses[i][j]<0){
					str=str+"\\overline{";
				        str=str+literals[Math.abs(clauses[i][j])-1];
		                        str+="}";
		                 }
		                 else
				        str=str+literals[Math.abs(clauses[i][j])-1];
				if(j<2)
					str=str+" + ";
			}
			str=str+" )";
			if (i != (clausecnt-1)){
				str=str+"&middot</code>";
			}else{
				str=str+"</code>"
			} 
			labels[i]=jsav.label(str,{top:y,left:x});
			str=" ";
			x = x+95;
			if(x>550){
		        	ln = ln + Math.floor(x/600);
				y = y+25;
				x=5;
			}
			
		  }


		  jsavArr = jsav.ds.array(literals, {indexed: false});
		  Solution=ShowSolution();
		  jsavArr.click(clickHandler);
		  // Set up handler for reset button
		  $("#reset").click(function () { f_reset(); });
		},

		// Check user's answer for correctness: User's array must match answer
		checkAnswer:function () {
		    var cnt=0;
		    if(document.getElementById("noSol").checked==true){
		      if(answer==0)
			return true;
		      else
		        return false;
		    }
		    for(var k=0;k<clausecnt;k++){
		        cnt=0;	
			for(var j=0;j<3;j++){
				if(clauses[k][j]>0){
					if(assigned[clauses[k][j]-1]==1)
						break;
					if(assigned[clauses[k][j]-1]==-1)
						cnt++;
				}
				else if(clauses[k][j]<0){
					if(assigned[Math.abs(clauses[k][j])-1]==-1)
						break;
					if(assigned[Math.abs(clauses[k][j])-1]==1)
						cnt++;
				}
			}
		        if(j>=3)
				return false;
		    }
		  return true;
		},
		// return the solution
		getSolution: function() {
			return Solution;
		},
	};

	// Click event handler on the array
	var clickHandler = function (index, e) {
	    var k,j,cnt;
	    if(assigned[index]==0){
		assigned[index]=1;
		jsavArr.css(index,{"background-color":"green"});
	    }
	    else if(assigned[index]==1){
		assigned[index]=-1;
		jsavArr.css(index,{"background-color":"red"});
	    }
	    else if(assigned[index]==-1){
		assigned[index]=0;
		jsavArr.css(index,{"background-color":"white"});
	    }
	    for(k=0;k<clausecnt;k++){
	        cnt=0;	
		for(j=0;j<3;j++){
			if(clauses[k][j]>0){
				if(assigned[clauses[k][j]-1]==1)
					break;
				if(assigned[clauses[k][j]-1]==-1)
					cnt++;
			}
			else if(clauses[k][j]<0){
				if(assigned[Math.abs(clauses[k][j])-1]==-1)
					break;
				if(assigned[Math.abs(clauses[k][j])-1]==1)
					cnt++;
			}
		}
		if(j<3)
			labels[k].css({"color":"green"});
	        else if(cnt==3)
			labels[k].css({"color":"red"});
		else
			labels[k].css({"color":"black"});
	    }
	   
	  threeSAT_KA.userInput = true;
	};

	// reset function definition
	var f_reset = function () {
	  for(var k=0;k<literalcnt;k++)
	   jsavArr.css(k,{"background-color":"white"});
	  for(var i=0;i<literalcnt;i++)
	  	assigned[i]=0;
	  for(var k=0;k<clausecnt;k++)
		labels[k].css({"color":"black"});
	  threeSAT_KA.userInput = false;
	};

	Array.prototype.contains = function(k) {
	  for(var i=0; i < this.length; i++){
	    if(this[i] === k){
	      return true;
	    }
	  }
	  return false;
	}

	function getRandomInt(min, max , blacklist) {
	  var num;
	  do
	  	num = Math.floor(Math.random() * (max - min)) + min;
	  while (blacklist.contains(num));
	  return num;
	}

	function generateAnswer(){
	        var assignment = new Array(literalcnt);
		var num = Math.pow(2,literalcnt);
	        var correctanswer=0;
	        var cnt;

		for(var n=0; n < num;n++){

	                var m=n;
			for(var i=0;i<literalcnt;i++){
				if(m%2==0)
					assignment[i]=-1;
				else 
					assignment[i]=1;
				m=Math.floor(m/2);
			}

	        	cnt=0;  
	               	for(var k=0;k<clausecnt;k++){
	        		for(var j=0;j<3;j++){
	               			if(clauses[k][j]>0){
	                      			if(assignment[clauses[k][j]-1]==1)
	                               			break;
	               			}
	               			else if(clauses[k][j]<0){
	               				if(assignment[Math.abs(clauses[k][j])-1]==-1)
	                               			break;
	                		}
	        		}
				if(j<3)
					cnt++;
	        		if(j>=3)
	                		break;
	    		}

			if(cnt==clausecnt){
				correctassignment = assignment.slice(0);
				correctanswer=1;
				break;
			}
		
		}

		return correctanswer;
	}

	var ShowSolution = function(){
		if(generateAnswer()==0){
	                answer=0;
			return "The expression is not satisfiable";
	        }
	        var str="A satisfying assignment : <code>";
		for(var i=0;i<literalcnt;i++){
	                if(i>0)
	                     str+=" , ";
	    		if(correctassignment[i]==1){
	        		str+="x_"+(i+1)+" = T ";
	    		}
	    		else if(correctassignment[i]==-1){
	        		str+="x_"+(i+1)+" = F ";
	    		}
	    	        	
		}
	        str+="</code>";
		return str;
	}

  	window.threeSAT_KA = window.threeSAT_KA || threeSAT_KA;

}());