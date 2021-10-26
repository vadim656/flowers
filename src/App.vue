<template>
  <div class="app mx-auto w-full h-full">
    <FHeader/>
    <section class="">
      <div class="bg-red-800 w-full h-screen cc">
        Slider
      </div>
    </section>
    <section>
      <div class="mx-auto flex-col justify-center">
        <span class="text-2xl w-full  h-20 cc">Новинки товаров</span>
        <div class="flex justify-between items-center">
          <FProduct />
        </div>
        <div
          class="cc h-20 border-b text-2xl uppercase hover:bg-yellow-100 cursor-pointer"
        >
          Перейти в каталог
        </div>
      </div>
    </section>
    <section class="w-full flex h-screen">
      <div class="w-1/2 cc bg-red-800">
        <div class="w-3/5 flex-col text-white">
          <h3 class="text-4xl text-center mb-16">Matté Wood Chair</h3>
          <p>
            Refinement Chair with Ripped Seat, made of retro Eucalyptus wood, of
            great resistance, Kiln dried, made with a spike system and painted
            with P.U. (Polyurethane) With its entire structure painted in wood,
            it offers a lot of elegance to your environment and when cleaning is
            very easy, as it is washable and light for movement. Enough of
            receiving visitors and not having a place to accommodate them. With
            the chair, your days as a host will be marked by a lot of elegance
            and sophistication.
          </p>
          <button class="mt-4 pr-4 py-2 border-b">Посмотреть композицию</button>
        </div>
      </div>
      <div class="w-1/2 cc bg-red-100">
        <img
          class="w-full h-full object-center object-cover"
          src="./assets/img/prod2.jpg"
          alt=""
        />
      </div>
    </section>
    <section>
      <div>
        <span>
          Preview
        </span>
      </div>
    </section>
  </div>
  <!-- /.app -->
</template>

<script>
import FProduct from './components/f-product.vue'
import FHeader from './components/f-header.vue'
export default {
  components: {
    FProduct,
    FHeader
}
}
</script>

<style></style>
