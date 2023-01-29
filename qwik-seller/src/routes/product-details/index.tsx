import { component$, useClientEffect$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const loc = useLocation();

  const state = useStore({
    name: '',
    price: '',
    url: ''
  });

  useClientEffect$(({ }) => {
    const data = JSON.parse(localStorage.getItem('productDetails'))
    state.name = data.name
    state.price = data.price
    state.url = data.url

  });

  return (
    <div class="flex flex-col gap-4">
      <img src={state.url} alt={state.name} class="object-cover w-[400px]  " />
      <div class="flex flex-col gap-4">
        <h2 class="text-xl">{state.name}</h2> 
        <p>${state.price}</p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Flower',
};
