 const btn = document.querySelector('.btn')
 const coupon = document.querySelector('.coupon')
 
 const copyText = (e) => {
    e.preventDefault()
    let couponLen = coupon.value.length
    coupon.select()
    coupon.setSelectionRange(0, couponLen)
    document.execCommand('copy')

 }

 btn.addEventListener('click', copyText)