// Step 1: Define a constructor function Animal with a property type set to "Animal"
function Animal() {
    this.type = "Animal";
}

// Step 2: Add a method sound to Animal.prototype that logs "Animal sound"
Animal.prototype.sound = function() {
    console.log("Animal sound");
};

// Step 3: Define a constructor function Dog that inherits from Animal
function Dog() {
    Animal.call(this); // Call the Animal constructor to inherit properties
}

// Step 4: Ensure that Dog.prototype inherits from Animal.prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Restore Dog constructor to Dog

// Step 5: Override the sound method in Dog.prototype to log "Bark" instead of "Animal sound"
Dog.prototype.sound = function() {
    console.log("Bark");
};

// Step 6: Create an instance of Dog called myDog
let myDog = new Dog();

// Step 7: Call the sound method on myDog
myDog.sound(); // Output: "Bark"