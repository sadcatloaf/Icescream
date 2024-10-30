const Cones = [
    {
        name: 'Waffle Cones',
        price: 3.20,
        quantity: 0
    },
    {
        name: 'Cake Cone',
        price: 1.25,
        quantity: 0
    },
    {
        name: 'Mini Cone',
        price: 0.75,
        quantity: 0
    }
]
const Icescream = [
    {
        name: 'Cake Batter',
        price: 3.25,
        quantity: 0
    },
    {
        name: 'Blue Moon',
        price: 3.25,
        quantity: 0
    },
    {
        name: 'Cotton Candy',
        price: 3.25,
        quantity: 0
    }
]
const Toppings = [
    {
        name: 'Gummy Bears',
        price: 0.50,
        quantity: 0
    },
    {
        name: 'Worms',
        price: 0.50,
        quantity: 0
    },
    {
        name: 'Sprinkles',
        price: 0.50,
        quantity: 0
    }
]


function orderCone(name) {
    for (let i = 0; i < Cones.length; i++) {
        let cone = Cones[i]
        if (cone.name == name) {
            console.log(cone);
            cone.quantity += 1

        }
    }
}

function orderIceScream(name) {
    for (let i = 0; i < Icescream.length; i++) {
        let IceScream = Icescream[i]
        if (IceScream.name == name) {
            console.log(IceScream);
            IceScream.quantity += 1

        }
    }
}

function orderToppings(name) {
    for (let i = 0; i < Toppings.length; i++) {
        let Topping = Toppings[i]
        if (Topping.name == name) {
            console.log(Topping);
            Topping.quantity += 1

        }
    }
}

function calculateCone() {
    let total = 0
    for (let i = 0; i < Cones.length; i++) {
        let cone = Cones[i]
        cone += cone.price * cone.quantity
    }
    console.log('total', total)
    return total // give the value of the variable BACK to the "Caller" of the function
}

