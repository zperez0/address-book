function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

//to define a new prototype function
// method created to return contacts first & last name concat together
Contact.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

