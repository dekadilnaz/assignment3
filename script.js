var education_level = new Array();
education_level["bachelor"] = 1.5;
education_level["college"] = 1.2;
education_level["high_school"] = 1.05;
education_level["middle_school"] = 0.9;
 //*
var family_networth = new Array();
family_networth["upper_class"] = 2;
family_networth["middle_class"] = 1.5;
family_networth["lower_class"] = 1.2;
 //*
var caste = new Array();
caste["brahmin"] = 100;
caste["kshatriya"] = 50;
caste["vaishya"] = 20;
caste["shudra"] = 10;
caste["varna"] = -50;
 //+
var skills = new Array();
skills["music"] = 10;
skills["cook"] = 20;
skills["easygoin"] = 15;
skills["sings"] = 10;
 //+
var age = new Array();
age["young"] = 1.5;
age["middle"] = 1.2;
age["old"] = 0.95;
 //*
var rep = new Array();
rep["parent"] = 0.85;
rep["character"] = 0.9;
rep["person"] = -20;

function getTotal()
{

    var form = document.forms["calc"]

    for (var i = form.elements.length - 1; i >= 0; i--) {
        if(form.elements[i].value == "blank"){
            alert("Not all fields are choosen!");
            break;
        }
    }
    var total = 100;
    console.log(total);

    var selectedEdu = form.elements["education"].value;
    var edu_price = education_level[ selectedEdu ];
    total *= edu_price;
    console.log(edu_price);
    
    var selectedFamily = form.elements["networth"].value;
    var family_price = family_networth[ selectedFamily ];
    total *= family_price;
    console.log(total);

    var selectedCaste = form.elements["caste"].value;
    var caste_price = caste[ selectedCaste ];
    total += caste_price;
    console.log(total);

    for (var i = 3; i < 7; i++) {
        if(form.elements[i].checked == true){
            total += skills[ form.elements[i].value ];
        }
    }
    console.log(total);

    var selectedAge = form.elements["age"].value;
    if (selectedAge != '') {
        total *= age[ selectedAge ];
    }
    console.log(total);

    for (var i = 10; i < 12; i++) {
        if(form.elements[i].checked == true){
            total *= rep[ form.elements[i].value ];
        }
    }
    console.log(total);
    if (form.elements[12].checked == true) {
        total += rep[ form.elements[12].value ];
    }
    console.log(total);

    return total;
}

function myFunction() {
    var price = getTotal();
    document.getElementById('results').innerHTML = "<h1>" + price + "$" + "</h1>"; 
  }