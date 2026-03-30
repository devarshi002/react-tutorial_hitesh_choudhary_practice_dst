function greeting(city) {
    console.log(`Hello ${this.name} from ${city}`);
    
}

const user = {name:"dev"};

greeting.call(user,"pune")