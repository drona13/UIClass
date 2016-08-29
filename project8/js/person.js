var person={
    'firstName':'joe',
    'lastName':'moe',
        'dob':'12/12/2019',
            'Age':'102',
                'Address':'1234 4th Ave',
                    'email':'ui@cubicit.net'
        
};
console.log(person);
function loadPerson(){
 // alert('hello World');
     //document.getElementById('person').innerHTML='<h1>Updated </h1>';
   // var htmlcontents='<h1> Updated </h1>';
    
    var htmlContents="<table class='table table-striped table-hover'>"+
         "<tr>"+
                 "<th>First Name</th>"+
                 "<td>"+person.firstName+"</td>"+
                 "</tr>"+
         "<tr>"+
                 "<th>Last Name</th>"+
                 "<td>" +person.lastName+"</td>"+
                 "</tr>"+
         "<tr>"+
                 "<th>Address</th>"+
                 "<td>" +person.Address+"</td>"+
                 "</tr>"+
         "<tr>"+
                 "<th>D.O.B</th>"+
                 "<td>" +person.dob+"</td>"+
                 "</tr>"+
         "<tr>"+
                 "<th>Age</th>"+
                 "<td>" +person.Age+"</td>"+
                 "</tr>"+
         "<tr>"+
                 "<th>E-mail</th>"+
                 "<td>" +person.email+"</td>"+
                 "</tr>"+
                 "</table>";
    document.getElementById('person').innerHTML= htmlContents;
}
  //loadPerson();  
//console.log(person.firstName);
//console.log(person.lastName);
//console.log(person.Address);
 