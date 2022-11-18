
const inputPrice = document.querySelector('#price')
const presult = document.querySelector('#result')
const inputCoupon = document.querySelector('#discount')
const btn = document.querySelector('#calcular')
btn.addEventListener('click', calcularPrecioConDescuento)

function calcularPrecioConDescuento(){
    const price = Number(inputPrice.value)
    const coupon = inputCoupon.value

    if(!price || ! coupon){
        presult.innerText = 'llene el cupon'
        return;
    }
    const cuponList =[]
    cuponList.push({
        name: 'cupon100',
        discount: 30
    })
    cuponList.push({
        name: 'cupon500',
        discount: 25
    })
    let discount

    function isCouponInArray(cuponElement){
        return cuponElement.name == coupon
    }
    const couponInArray = cuponList.find(isCouponInArray)  // find busca el elemento en el array , aplicando la condicion que en este caso el una funcion
                                                            // filter busca los elementos el el arrays y lo devuelve en un nuevo array
    if(couponInArray){
        let discount = couponInArray.discount
        const newPrice = (price * (100-discount))/100
        presult.innerText = 'el nuevo precio es $' + newPrice
    }
    else{
        presult.innerText = 'el cupon no es valido'
        return
    }

/* ------------------------------------------objeto
    const cuponObj = {
        'cupon100': 30,
        'cyber500': 25,
        'cyber900': 45
    }
    if(cuponObj[coupon]){
        let discount = cuponObj[coupon]
        const newPrice = (price * (100-discount))/100
        presult.innerText = 'el nuevo precio es $' + newPrice
    }
    else{
        presult.innerText = 'el cupon no es valido'
    } 
    -------------------------------------------------------------
*/ 

/*    let discount
    switch (coupon) {
        case 'cupo-riszart':
            discount = 30
            break;
        case 'cyber100':
            discount = 25
            break
        default:
            presult.innerText = 'el cupon no es valido'
            return;
    }*/

//    if(coupon == 'cupon de riszart'){
//        discount = 30
//   } else if(coupon == 'sbkasdas'){
//        discount = 25
//    }else{
//        presult.innerText = 'el cupon no es valido'
//        return
//    }   




}