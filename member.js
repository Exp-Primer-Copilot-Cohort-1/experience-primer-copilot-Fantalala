function skillmember() {
    var member = {
        name: "John",
        age: 30,
        sayHi: function () {
            console.log("Hi, I am " + this.name);
        }
    };
    member.sayHi(); // Hi, I am John
}