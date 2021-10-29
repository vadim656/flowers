<template>
  <transition name="fade" appear>
    <div
      v-if="showModal"
      @click="showModal = false"
      class="modal-overlay fixed "
    ></div>
  </transition>

  <transition name="slide" appear>
    <div v-if="showModal" class="modal fixed ">
      <header
        class="border-b flex justify-center sticky top-0 z-50 border-b bg-yellow-100"
      >
        <div
          class="px-4 2xl:px-0 container flex justify-between h-20 items-center"
        >
          <div
            @click="showModal = false"
            class="items-center w-auto lg:w-60 flex justify-start cursor-pointer"
          >
            <div class="flex-col w-8 h-8 cc">
              <div class="w-8 h-0.5 bg-black transform rotate-45"></div>
              <div class="w-8 h-0.5 bg-black transform -rotate-45"></div>
            </div>
            <div class="ml-4 hidden md:block">
              ЗАКРЫТЬ
            </div>
          </div>
          <div>
            <img src="../assets/logo.png" alt="" />
          </div>
          <div class="w-auto lg:w-60 flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#212121"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
        </div>
      </header>
      <div>
        <ul class="pt-8">
          <li class="text-xl mt-4 border-b pb-2 h-full cc">ddd</li>
          <li class="text-xl mt-4 border-b pb-2 h-full cc">ddd</li>
          <li class="text-xl mt-4 border-b pb-2 h-full cc">ddd</li>
          <li class="text-xl mt-4 border-b pb-2 h-full cc">ddd</li>
          <li class="text-xl mt-4 border-b pb-2 h-full cc">ddd</li>
        </ul>
      </div>
    </div>
  </transition>

  <header
    class="border-b flex justify-center sticky top-0 z-50 drop-shadow-md filter"
  >
    <div class="px-4 2xl:px-0 container flex justify-between h-20 items-center">
      <div
        @click="showModal = true"
        class="items-center  w-auto lg:w-60 flex justify-start cursor-pointer"
      >
        <div class="flex-col ">
          <div class="w-8 h-0.5 bg-black "></div>
          <div class="w-8 h-0.5 bg-black  mt-1"></div>
          <div class="w-8 h-0.5 bg-black  mt-1"></div>
        </div>
        <div class="ml-4 hidden md:block">
          МЕНЮ
        </div>
      </div>
      <div>
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="w-auto lg:w-60 flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#212121"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      showModal: false
    }
  }
}
</script>

<style lang="sass">
.fade-enter-active
  transition: all .3s ease-out
.fade-leave-active
  transition: all .8s cubic-bezier(.45,-0.58,.67,1.51)

.fade-enter-from
  transform: translateY(-10px)
  opacity: 0
.fade-leave-to
  transform: translateY(-10px)
  opacity: 0

.slide-enter-active
  transition: opacity 1s cubic-bezier(.45,-0.58,.67,1.51)
.slide-leave-active
  transition: opacity .1s cubic-bezier(.45,-0.58,.67,1.51)

.slide-enter-from
  opacity: 0
.slide-leave-to
  opacity: 0

.modal-overlay
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    width: 100vw
    height: 100vh
    background-color: rgba(254, 243, 199, 1)
    z-index: 98
    overflow: hidden

.modal
  width: 100%
  height: 100vh
  z-index: 99
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
</style>
