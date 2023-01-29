import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import ProductsGrid from '~/components/products-grid/products-grid';

export default component$(() => {
  return (
    <div class="flex flex-1 flex-col bg-zinc-800">
      <section class="min-h-screen flex relative">
        <img src="https://images.pexels.com/photos/186846/pexels-photo-186846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="background home image" class="object-cover w-screen" />
        <a href="#products" class="fixed left-1/2 top-2/3 -translate-y-1/2 -translate-x-1/2 p-4 px-8 border border-2 border-solid border-white text-white hover:text-slate-900 after:absolute after:bg-white after:right-full after:top-0 after:w-full after:h-full hover:after:translate-x-full after:duration-300 overflow-hidden">
          <h3 class="relative z-20 text-center font-bold">
            Buy Now
          </h3>
        </a>
      </section>
      <ProductsGrid />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qweller - Qwik Seller',
  meta: [
    {
      name: 'description',
      content: 'You can buy something',
    },
  ],
};
