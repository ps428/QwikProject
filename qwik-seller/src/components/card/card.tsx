import { component$, useStore } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$((props) => {
  const { url, name, price } = props
  // console.log(props);
  
  return (
    <Link href="/product-details">
      <div class="flex flex-col gap-2 cursor-pointer border border-solid border-transparent hover:border-zinc-100 w-[240px] min-h-[240px] max-w-auto"

        onClick$={() => {
          console.log("clicked on item,");
          const itemData = JSON.stringify({ ...props })
          console.log(itemData);
          
          localStorage.setItem('productDetails', itemData)
        }}
      >
        <img src={url} alt="name" class="sm:h-[300px] object-cover max-w-full" />
        <div class="flex flex-col gap-2 p-4 shadow">
          <h2 class="text-2xl text-white">{name}</h2>
          <p class="text-white">$ {price}</p>
        </div>
      </div>
    </Link>
  );
});
