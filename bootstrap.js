//delete the default name field but not the user input
function clearName() {
  if (document.getElementById('nameField').value == 'Example: Tony Stark') {
    document.getElementById('nameField').value = '';
  }
}
//bring back the default text if name field is empty
function resetName() {
  if (document.getElementById('nameField').value == '') {
    document.getElementById('nameField').value = 'Example: Tony Stark';
  }
}
//delete the default address field but not the user input
function clearAddress() {
  if (document.getElementById('addressField').value == 'Example: 805 W Manchester Blvd, Inglewood, CA 90301, USA') {
    document.getElementById('addressField').value = '';
  }
}
//bring back the default text if address field is empty
function resetAddress() {
  if (document.getElementById('addressField').value == '') {
    document.getElementById('addressField').value = 'Example: 805 W Manchester Blvd, Inglewood, CA 90301, USA';
  }
}
//delete the default email field but not the user input
function clearEmail() {
  if (document.getElementById('emailField').value == 'Example: tonystark3000@starkindustries.com') {
    document.getElementById('emailField').value = '';
  }
}
//bring back the default text if email field is empty
function resetEmail() {
  if (document.getElementById('emailField').value == '') {
    document.getElementById('emailField').value = 'Example: tonystark3000@starkindustries.com';
  }
}

//to reference the select menu easier later
var toys = document.getElementById('toys');
var desIndex = toys.selectedIndex;
//to do this when the selection changes
toys.onchange = function() {
  //toys array; logging information
  console.log('toy: ' + toys.selectedIndex);
  console.log('toy: ' + toys.options[toys.selectedIndex].text);
  console.log(toys.value + '.jpg');
  var desIndex = toys.selectedIndex;
  //change background to toy
  document.getElementById('toy-pic').style.backgroundImage = 'url(' + toys.value + '.jpg)';
  //document.getElementById('toy-desc').style.text = toys.selectedIndex;

  document.getElementById('toy-desc').textContent = descArray[desIndex-1];
}
var descArray = [
  'On the coast of Maine, "Lobstah" boats like this one are a common sight.This new wooden toy model really floats and makes a great bath toy.The safe and simple design encourages a child to use his or her own imagination. Batteries not required! Built of solid Maine white pine and sturdy enough to withstand years of use before being passed down to the next generation.Boat comes with two peg lobster- people.',

  'A beautiful handmade wooden train set - Engine and three interchangeable cars Handmade detailed artwork made of real beech wood. Wonderful Christmas gift! Large size - 84 cm length, 11 height and 13 width Moving wheel mechanism. Fully ecological product, only natural materials. High quality and durable. Suitable for children from 3 years old Lots of fun guaranteed at any age!This set can be painted using wood paint.',

  'Highly durable set for indoor or outdoor use including: lawns, patios, living rooms, preschools, kindergartens & anywhere else. Make your own dream castle anywhere.  Block play helps promote creativity, independent play, cooperative play, fine motor skills and hand-eye coordination. When building, children must consider proportions, symmetry, size and more, which benefit early cultivation of concepts.',

  'Beautifully handcrafted wooden car. One-of-a-kind - (the photos included for this item may not be the actual car that you will receive. All cars are the same size and construction).Great toy that will inspire imaginative and active play. This car will be in your family for generations to come - think heirloom or keepsake.  andcrafted from a variety of domestic and exotic hardwoods including maple, oak, mahogany, cherry woods, etc., coated with clear lacquer to enhance and hold the natural wood color. All edges are rounded over and sanded for a silky smooth finish.',

  ' Defying gravity and soaring in the sky is every boys dream. Keep him dreaming big with this classic wooden airplane made by us, here at Little Bird Toys in Bound Brook, NJ. The airplane comes ready to fly with a kid-safe Natural Harvest Finish and a propeller that spins.'
];
