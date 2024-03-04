function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

  //function createInstruction(firstName, lastName){
    //return {
        //firstName,
        //lastName
   // }
 // }

 var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

 //var favoriteNumber = 42;
 //var instructor = {
   // firstName: "Colt"
    //[favoriteNumber]: "That is my favorite!"
 //}

 var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName " + "says bye!";
    }
  }

  //const instructor = {
  //  firstName: "Colt", 
   // sayHi() {
     //   return "HI!";
  //  }
   // sayBye() {
    //    return this.firstName + " saysBye";
   // }
 // }



 //CREATE ANIMAL FUNCTION

 const dog = createAnimal("dog","bark","woooof!")
 dog.bark() //woof

 const sheep = createAnimal("sheep","bleet","baaaaa")
 sheep.bleet() //baaaa

 function createAnimal(species,verb,noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
 }