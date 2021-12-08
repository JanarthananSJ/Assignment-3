var request = new XMLHttpRequest();
request.open('GET','http://api.countrylayer.com/v2/currency/USD?access_key=56433b033341eda2c850fe458c911c60')
request.send();
request.onload=function(){
    //console.log(this.response);
    var data = JSON.parse(this.response);
    for (let i=0;i<data.length;i++){
        console.log(data[i]);
    }
    

}
