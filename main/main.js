module.exports = function main(inputs) {
    // write your code here...
    var dis=inputs.distance;
    var parkTime=inputs.parkTime;
    var extra= 0.25*parkTime;
    var price;
    if (dis <=2 ) {
      price = 6 ;
    } else if(dis <= 8 ) {
      price = 6 + (dis-2)*0.8;
    }else {
      price = 6 + 0.8*6 + (dis -8)*1.2 ;
    }
    price += extra;
    return Math.round(price);
    //return "price";
};
