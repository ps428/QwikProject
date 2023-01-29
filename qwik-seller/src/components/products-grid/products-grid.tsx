import { component$, useStore } from '@builder.io/qwik';
import Card from '../card/card';

export default component$(() => {
  // const store = useStore({
  //   scrolled: false
  // })

  const products = [
    {name:'Jute containers',url:'https://media.istockphoto.com/id/1309646840/photo/handicraft-packaging-from-natural-product.jpg?s=612x612&w=0&k=20&c=lXVQU2xpmr-FrJCM93wQpeGgb-gDFCwSCFiVrOcP6L8=',price:'10'},
    {name:'Handmade containers with lid',url:'https://cdn.shopify.com/s/files/1/2690/0106/files/Handmade_Box2.jpg?v=1632549443',price:'30'},
    {name:'Jute bag',url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQouJYdY_17kETST2L0XOaHkn_8t7_xrwCnyF95-4YYsUfDEtc8i3c34TgEovPMpzJMLA8&usqp=CAU',price:'200'},
    {name:'Terracota Owl Case',url:'https://cdn.kstdc.co/uploads/2021/08/terracota.jpg',price:'250'},
    {name:'Exotic bottle',url:'https://i.pinimg.com/236x/52/e2/02/52e2020e6d38cc4f6954e4c1a28932c5--decorated-bottles-painted-bottles.jpg',price:'150'},
    {name:'Elephants',url:'https://www.holidify.com/images/cmsuploads/compressed/handicrafts_20180222144637.jpg',price:'100'},
    {name:'Fishes on wall',url:'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-002-127_A_400x.jpg?v=1568953176',price:'80'},
  ]
  
  return (
    <div id="products" class="min-h-screen grid place-items-center  py-8">
      <div class="felx flex gap-4 flex-wrap justify-center max-w-[1400px] max-auto items-stretch">
      {products.map((product)=>{
        return  <Card {...product}/> 
      })}
      </div>
    </div>
  );
});
