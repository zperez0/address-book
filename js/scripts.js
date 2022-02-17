// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
};

AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

function Address(emailAddress, workEmail, physicalAddress, workAddress){
this.emailAddress = emailAddress;
this.workEmail = workEmail;
this.physicalAddress = physicalAddress;
this.workAddress = workAddress;
}


Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

// User Interface Logic ---------
let addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
    const contact = addressBookToDisplay.findContact(key);
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}

function showContact(contactId) {
  const contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  $(".email-address").html(contact.address.emailAddress);
  $(".work-email").html(contact.address.workEmail);
  $(".physical-address").html(contact.address.physicalAddress);
  $(".work-address").html(contact.address.workAddress);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
}

function removeInput(){
   // var element = document.getElementById("show-contact")
  var child = document.getElementById("workEmail");
    if($(child).val().length === 0){
        child.remove(child);
      }
    };
  window.onload = function(){
      removeInput();
};


$(document).ready(function() {
  attachContactListeners();
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var inputtedEmailAddress = $("input#email-address").val();
    var inputtedWorkEmail = $("input#work-email").val();
    var inputtedPhysicalAddress = $("input#physical-address").val();
    var inputtedWorkAddress = $("input#work-address").val();
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    $("input#email-address").val("");
    $("input#work-email").val("");
    $("input#physical-address").val("");
    $("input#work-address").val("");

    // var child = document.getElementById("workEmail");
    // if($("input#work-email").val()=== ''){
    //   inputtedWorkEmail.remove();
    // };


    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);

    var newAddress = new Address(inputtedEmailAddress, inputtedWorkEmail, inputtedPhysicalAddress, inputtedWorkAddress);
    
    
    
    addressBook.addContact(newContact);
    newContact.address = newAddress;
    displayContactDetails(addressBook);


    // // var r = document.getElementById("workEmail");
    // // for (let i=0; i < r; i++)
    // // if (inputtedWorkEmail === r[i]){
    // //   return r.remove();
    // }
    
    });
  });

  // var r = document.getElementById("workEmail").val=null;
  // for (let i=0; i < workEmail.length; i++)
  // r.remove();

  // $( "p" ).not(document.getElementById( "workEmail" ) )

    // $("newAddress").remove("workEmail");


//for (const key in obj) {
 // if (obj[key] === '') {
 //   delete obj[key];
 // }
//}

// function showContact() {
// div.remove('input#work-email');
// }


// function removeInput(){
//   // var element = document.getElementById("show-contact")
// var child = document.getElementById("workEmail");
// if (child != "undefined" && child != null){
//     child.remove(child);
//   }
// };
//   window.onload = function(){
//     removeInput();
//   };


// function removeInput(){
//   // var element = document.getElementById("show-contact")
// var child = document.getElementById("workEmail");
// if($(child).val().length === 0){
//   child.remove();
// // }else{
// //   return true;
// }
//   window.onload = function(){
//     removeInput();
//   }
// };