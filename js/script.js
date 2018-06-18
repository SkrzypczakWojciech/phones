function Phone(brand, price, color, size) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.size = size;
}

Phone.prototype.printinfo = function () {
	console.log ('Marka to ' + this.brand + ' kolor to ' + this.color +' rozmiar ekranu to '+ this.size + ' a cena to ' + this.price + '.')
}


var iPhone6S = new Phone('Apple', 3000, 'gold', 3.8);
var OnePlus6 = new Phone('OnePlus', 2500, 'black', 5.2)
var GalaxyS9 = new Phone('Samsung', 4999,'silver', 5.8)


iPhone6S.printinfo();
OnePlus6.printinfo();
GalaxyS9.printinfo();

