
const x =document.querySelector("#info")
const y=document.createElement("IMG")
                
                
                class category{
                    constructor(a,b,c){
                        this.a=a ;
                        this.b=b;
                        this.c=c;

                      } 
                       
                    f(){
                    
                   const m=document.querySelector('#info1')
                   if(this.a){
                    var xc=this.b
                }
                   m.innerHTML=`
                   
                   <h1 style='background=orange'id='hh'>${this.a}</h1>
                   <p>${xc}</p>

                   `
                }
            
            }	
                    
                    
                    function Experience(){
                       const a= new category("EXPERIENCE",'Part Sales Officer Cloud Africa')
                       a.f()
                        
                        
                    }
                    const fx=`<img id='img2' src='Coursera 9VKEBPVKP9WN.png'><br>
                    <caption>Back-End-Development</caption>
                    `	
                    const fxx=`<p>Brian Mudumi@+26377504464<br>Contact:+263774816199</p>
                    <div>Email:partsspares@clouda.co.zw</div>`
                    const fxxx=`Parts Sales Officer on:<br>
                    Email:vicnic75@gmail.com<br>
                    `
                    const skills=`CSS<br>
                    HTML<br>JavaScipt<br>Python For Data Science<br><br>
                    `
                    function personalinfo(){
                       const b= new category('WE DO COMMERCIAL TRUCK SPARES','we provide you the best')
                       b.f()
                        
                    }
                    
                    function certificate(){
                       const c= new category("CALL",fxx)
                       c.f()
                        
                    }
                    
                    function education(){
                       const d= new category("FOR: SHACKMAN HOWO SINOTRUCK",'Including Spares For Yellow machines')
                       d.f()
                        
                    }
                    
                    function contacts(){
                        const e=new category("EMAIL",fxxx)
                        e.f()
                        
                    }
                    function skill(){
                       const g= new category("SKILLS",skills)
                       g.f()
                    
                    }