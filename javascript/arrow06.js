//6단계: this 바인딩의 차이점 이해
var age =100;

function Person() {
    this.age = 0;

    setInterval(function() {
        this.age++;
        console.log(this.age);
    }, 1000);
}

function Person1() {
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000)
}

new Person();