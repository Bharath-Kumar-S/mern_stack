class er{
    r = 'Bharath' // instead of constructor

    display = () => { //E6 syntax for methods
        console.log(this.r);
    }
}

let r = new er();
r.display();