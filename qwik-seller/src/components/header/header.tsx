import { component$, useClientEffect$, useContext, useStore, useTask$, useWatch$ } from '@builder.io/qwik';
import { MyContext } from '~/root';
import Modal from '../modal/modal';

export default component$(() => {
  const store = useStore({
    scrolled: false,
    numItems: 0,
    modal: false,
    cart: []
  })

  const contextState = useContext(MyContext)

  // useClientEffect$(() => {
  //   if (localStorage.getItem("cartData")) {
  //     const currCart = JSON.parse(localStorage.getItem("cartData"))
  //     const numItemsInCart = currCart.items.length

  //     store.numItems = numItemsInCart
  //     store.cart = currCart.items
  //   }
  // })

  useWatch$(({track})=>{
    const tmpCart = track (()=> contextState.items)
    store.numItems = tmpCart.length
    store.cart = tmpCart
  })

  return (
    <header class={"fixed top-0 left-0 w-full flex justify-between items-center p-4 text-white text-xl sm:text-4xl sm:p-8 z-40" + (store.scrolled ? ' bg-zinc-900 shadow' : ' bg-transparent')}
      document:onScroll$=
      {() => {
        if (window.scrollY > 0) {
          store.scrolled = true
        } else {
          store.scrolled = false
        }
      }}>
      <a href="/">Qweller- Qwik Seller</a>
      <div class="text-xl sm:text-2xl relative cursor-pointer" onClick$={() => {
        store.modal = true
      }}>
        <i class="fa-solid fa-cart-shopping"></i>
        {store.numItems > 0 && <><div class="absolute -top-2 -right-2 bg-slate-900 rounded-full h-5 w-5 text-xs grid place-items-center">{store.numItems}</div></>}
      </div>
      {store.modal && <>
        <div id="modal" class="shadow absolute top-0 right-0 w-full h-screen bg-white z-50 flex flex-col gap-4 p-4 text-slate-900 sm:w-[500px] overflow-scroll">
          <div class="flex items-center justify-between pb-4 border-b">
            <h3 class="font-bold text-4xl">CART</h3>
            <i onClick$={() => {
              store.modal = false
            }} class="fa-solid fa-xmark cursor-pointer hover:rotate-45"></i>
          </div>
          {store.cart.length > 0 ?
            <>
              <div class="bg-slate-900 flex flex-col gap-[1px]">
                {store.cart.map((item, i) => {
                  return (
                    <div class="bg-white p-4 flex items-center justify-between text-slate-900">
                      <div class="flex flex-col gap-1">
                        <h2>{item.name}</h2>
                        <p class="text-xs">${item.price}</p>
                      </div>
                      <i onClick$={()=>{
                        contextState.items = contextState.items.reduce(
                          (acc,curr,index)=>{
                        if(index!=i){
                          return [...acc,curr]
                        }  
                        return acc
                        },[])
                      }} class="fa-solid fa-xmark text-sm cursor-pointer hover:opacity-40"> </i>
                    </div>
                  )
                })}
              </div>
              <button class=" bg-white border border-slate-900 py-8 text-xl">Checkout</button>
            </>
            : <div>
              <h3 class="text-sm">No items in the cart</h3>
            </div>}
        </div></>}
    </header>
  );
});
