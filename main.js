 let maso = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
 let icons = ['<i class="fa-solid fa-heart text-danger"></i>', '<i class="fa-solid fa-heart text-danger"></i>','<i class="fa-solid fa-clover"></i>','<i class="fa-solid fa-diamond text-danger"></i>',]


 
 const excuseGenerator = () => {
     document.getElementById('change').addEventListener('click', () => {
        let uniqueIcon = icons[randomExcuse(icons)];
         document.getElementById('cardNumber').innerText = maso[randomExcuse(maso)];
         document.querySelectorAll('.icon')[0].innerHTML = uniqueIcon;
         document.querySelectorAll('.icon')[1].innerHTML = uniqueIcon;
     })
 };

 
 const randomExcuse = (array) => {
     let min = 0;
     let max = array.length - 1;
     let random = Math.floor(Math.random() * (max - min + 1));
     return random;
 };
 
 
 excuseGenerator();