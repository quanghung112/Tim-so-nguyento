function Prime(a) {
    if (a<2){
        return false;
    }
    for (let i=2; i<a;i++){
        if (a%i==0){
            return false;
        }
    }
    return true;
}
function Show() {
    let num=parseInt(document.getElementById('Input').value);
    for (let i=1;i<=num;i++){
        let isPrime=Prime(i);
        if (isPrime){
            document.getElementById('Prime1').innerHTML +=i + ', ';
        }
    }
}
