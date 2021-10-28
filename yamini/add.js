
var btn=document.getElementById('btn');

btn.addEventListener('click',()=>{
 var name=document.getElementById('name').value;
 var cmt=document.getElementById('a').value;
 if(name==""){
    alert("please provide Name!");
    return false;
}
else if(cmt==""){
    alert("please provide comments");
    return false;
}
  months=['January','Feburary','March','April','May','June','Jully','August','September','October','November','December']
  let today=new Date();
  let month =today.getMonth()+1;
  let year=today.getFullYear();
  let date=today.getDate();
  let currentdate=`${months[month]},${date},${year}`;
  document.getElementById('b2').innerHTML=currentdate;
  display(name);
  displayed(cmt);
});

function display(name){
        let htmltemplated=`<h3><i>comments<i></h3>
                           <h5> <i class="fas fa-user-circle"></i>  ${name}</h5>`;
        console.log(htmltemplated)
        document.getElementById("b").innerHTML=htmltemplated;
};

function displayed(cmt){
    let htmltemplate=`<p>${cmt}<p>`;
    console.log(htmltemplate)
    document.getElementById("c").innerHTML=htmltemplate;
};