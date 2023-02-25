const btn = document.querySelector('.btn')
const coupon = document.querySelector('.coupon')

const copyText = (e) => {
   e.preventDefault()
   let couponLen = coupon.value.length
  //  coupon.select()
  //  coupon.setSelectionRange(0, couponLen)
   
   navigator.clipboard.writeText(coupon.value)
     .then(() => {
        btn.textContent = "Copied!!!"
        setTimeout(() => {
           btn.textContent = "Copy"
        }, 1500)
     })
   
   //document.execCommand('copy')
   
}
btn.addEventListener('click', copyText)