class Parent {
    assets = 50000000;
    get_Details() {
        console.log("Parent Class get_Details");
    }
}
class Child extends Parent {
    get_Details() {
        console.log("Child Class get_Details");
        super.get_Details();  // using super object we can access the parent class methods
    }
}
let c1 = new Child()
console.log(c1)
console.log("----------------------")
console.log("Assets are inherited from the parent class : " + c1.assets)
console.log("----------------------")
console.log(c1.get_Details())