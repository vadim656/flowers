<template>
  <div
    class="product flex-col cursor-pointer md:border-l  lg:border-l border-t border-b border-gray-600  p-4 w-full  md:w-1/2  2xl:w-1/4 h-full hover:bg-yellow-100"
    v-for="product in products"
    :key="product.id"
  >
    <div class="aspect-w-4 aspect-h-5 max-h-24">
      <img class="rounded-xl object-center object-cover transition-opacity hover:opacity-90 " 
      :src="product.imglink" 
      alt="" />
    </div>

    <div class="flex-col flex-wrap flex justify-between h-20 px-4 pt-4">
      <span class="name font-bold text-xl"> {{ product.name }}</span
      ><!-- /.name -->
      <span class="price text-xl">
        {{ product.price }} ₽</span
      ><!-- /.price -->
    </div>
  </div>
  <!-- /.product -->
</template>

<script>
export default {
  data () {
    return {
      products: [
        {
          name: 'Цветок из сухоцвета',
          price: '4000',
          imglink: 'src/assets/img/prod1.jpg',
          id: 'Art:001'
        },
        {
          name: 'Цветок из сухоцвета2',
          price: '4000',
          imglink: 'src/assets/img/prod2.jpg',
          id: 'Art:002'
        },
        {
          name: 'Цветок из сухоцвета3',
          price: '4000',
          imglink: 'src/assets/img/prod3.jpg',
          id: 'Art:003'
        },
        {
          name: 'Цветок из сухоцвета4',
          price: '4000',
          imglink: 'src/assets/img/prod4.jpg',
          id: 'Art:004'
        }
      ]
    }
  }
}
</script>

<style></style>
