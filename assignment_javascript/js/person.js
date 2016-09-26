var personArray=[];



function addPerson(e){

    e.preventDefault();
    var gender = "";

    var radios = document.getElementsByName('gender');
    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) {
            gender = radios[i].value;
            break;
        }
    }

    var person={
        'first':document.getElementById('fname').value,
        'lname':document.getElementById('lname').value,
        'gender': gender,
        'address': document.getElementById('address').value,
        'city':   document.getElementById('cities').value,
        'country':document.getElementById('countries').value,
        'phone':document.getElementById('phone').value
        
           
    };
    personArray.push(person);
    document.contact.reset();
}

console.log(personArray);

function traverseArray(e) {

    e.preventDefault();
    var htmlContents='<table class="table table-bordered table-hover" ><tr><th>Name</th>'
                               +'<th>Gender</th>'
                               +'<th>Address</th>'
                               +'<th> city</th>'
                               +'<th>Country</th>'
                               +'<th>Phone Number</th>' +'</tr>';
    for (var i=0; i<personArray.length; i++){
        htmlContents+='<tr><td>'+ personArray[i].lname+','+personArray[i].first+'</td>';
        htmlContents+='<td>'+personArray[i].gender+'</td>';
        htmlContents+='<td>'+personArray[i].addres+'</td>';
        htmlContents+='<td>'+personArray[i].city +'</td>';
        htmlContents+='<td>'+personArray[i].country +'</td>';
        htmlContents+='<td>'+personArray[i].phone +'</td>';
        htmlContents+='</tr>'
    }
    htmlContents+='</table>';
    document.getElementById('display').innerHTML=htmlContents 
    $('#display').html(htmlContents); //jquery code replaces the JS code

}


 $(document).ready(function(){
     $('#first').hide();
     $('#second').hide();
    // $('#btn1').click(function () {
    //    addPerson(e));
     $('#btn1').on('click ',function () {
        alert("Hello World");
     });

     $('#frstbtn').on('click',function () {

         $('#first').show();
     });
     $('#scndbtn').on('click',function () {
         $('#second').show();
     });

     $('#thrdbtn').on('click',function () {
         $('#frstbtn').trigger('click');
         $('#scndbtn').trigger('click');
     });

});
$("frthbtn").click(function(){
    $("#firstname").addClass("error");
  
});
$("fthbtn").click(function(){
    $("#lastname").removeClass("error");
});
  $('#firstname')val(drona);
var firstname=$('fname').val();
var lastname=$('lname').val();
var address=$('address').val();
var phone=$('phone').val();
if(firstname.length===0){
    $('#firstname').addClass('error');
    $('#fnameerr').html("first name can't be empty");
    $('#firstname').addClass('error').addClass('error');
}
else{
    $("#firstname").removeClass('error');
    $('#fnameerr').html("");
}


