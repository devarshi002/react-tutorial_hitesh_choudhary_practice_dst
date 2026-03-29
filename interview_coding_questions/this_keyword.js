const obj = {
    name: "Deva",
    address: {city:"nagpur"},
    getAddress(){
        console.log(this.address.city);
        
    }
}
obj.getAddress()