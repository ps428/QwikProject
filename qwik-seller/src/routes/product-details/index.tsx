import { component$, useClientEffect$, useContext, useStore, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { MyContext } from '~/root';

export default component$(() => {
  const loc = useLocation();

  const state = useStore({
    name: '',
    price: '',
    url: ''
  });

  const contextState = useContext(MyContext)

  useClientEffect$(() => {
    const data = JSON.parse(localStorage.getItem('productDetails'))
    state.name = data.name
    state.price = data.price
    state.url = data.url

  });

  useClientEffect$(() => {
    if (localStorage.getItem('cartData')) {
      contextState.items = [...JSON.parse(localStorage.getItem('cartData')).items]
    }
  })

  return (
    <div class="flex flex-col gap-4">
      <div class="">
        <img src={state.url} alt={state.name} class="object-cover w-full  " />
      </div>
      <div class="flex justify-between p-4">
        <h2 class="text-xl">{state.name}</h2>
        <p>${state.price}</p>
      </div>
      <button onClick$={() => {
        let currentCart = { items: [] }
        if (localStorage.getItem('cartData')) {
          currentCart = JSON.parse(localStorage.getItem('cartData'))
        }
        currentCart.items.push(state)
        console.log(contextState.items)
        contextState.items = [...contextState.items, state]
        localStorage.setItem('cartData', JSON.stringify(currentCart))
      }} class="border py-4 border-slate-900 border-solid px-8 mx-auto hover:opacity-50">Buy Now</button>
      
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Flower',
};
