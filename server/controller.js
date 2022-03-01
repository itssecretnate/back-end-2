let houses = require('./db.json');

let houseID = houses[houses.length-1].id + 1; // With the default houses this should be 4.

module.exports = {

    getHouses: (req, res) => {
        res.status(200).send(houses);
    },
    
    deleteHouse: (req, res) => {
        let removeHouse = houses.findIndex(house => +house.id === +req.params.id)
        houses.splice(removeHouse ,1);
        res.status(200).send(houses);
    },
    
    createHouse: (req, res) => {
        house = {
            id: houseID,
            ...req.body
        }
        houseID++ // Make sure to increment by 1.

        houses.push(house)
        res.status(200).send(houses);
    },

    updateHouse: (req, res) => {       
        houses.forEach( (house,index) => {
            if(+house.id === +req.params.id)
            {
                if(req.body.type === "minus" && houses[index].price > 0) house.price -= 10000;
                else if(req.body.type === "plus") houses[index].price += 10000;
            }
            if(houses[index].price < 0) houses[index].price = 0;
        })
        
        res.status(200).send(houses);
    },

}