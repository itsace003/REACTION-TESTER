            var start =new Date().getTime();

            function animalNumber() {
                
                var animalNo = Math.floor((Math.random() * 10));
                return animalNo
                
            }

            function makeShape() {
                
                var top = Math.random() * 425;
                var left = Math.random() * 1050;
                var width = (Math.random() *75) + 25;
                
                if(Math.random() > 0.5) {
                    
                    document.getElementById("shape").style.borderRadius = "50%";
                    //document.getElementById("shape").style.backgroundColor = "red";
                    document.getElementById("cats").src = "animal" + animalNumber() + ".png";
                    
                } else {
                  
                    document.getElementById("shape").style.borderRadius = "0";
                    //document.getElementById("shape").style.backgroundColor = "blue";
                    document.getElementById("cats").style.src = "animal" + animalNumber() + ".png";
                    
                }
                
                document.getElementById("shape").style.width = width + "px";
                document.getElementById("cats").style.width = width + "px";
                
                document.getElementById("shape").style.height = width + "px";
                document.getElementById("cats").style.height = width + "px";
                
                document.getElementById("shape").style.top = top + "px";
                //document.getElementById("cats").style.top = top + "px";
                
                document.getElementById("shape").style.left = left + "px";
                //document.getElementById("cats").style.left = left + "px";
                
                document.getElementById("shape").style.display = "block";
                
                start = new Date().getTime();
                
            }
            
            function appearAfterSomeTime() {
                
                setTimeout(makeShape, Math.random() * 200);
                
            }
            
            appearAfterSomeTime();
            
            document.getElementById("shape").onclick = function() {
                
                document.getElementById("shape").style.display = "none";
                
                var end = new Date().getTime();
                
                var timeTaken = (end - start) / 1000;
                
                document.getElementById("timeTaken").innerHTML = timeTaken + "s";
                
                appearAfterSomeTime();
                
            }