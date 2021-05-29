<template>
  <section id="introduction" class="w-full bg-gray-800 text-gray-50 py-20">
    <div class="">
      <h1 class="h1 text-4xl font-medium mb-8">{{$t('section.introduction.title')}}</h1>
      <div class="mb-4">
        {{$t('section.introduction.description')}}
      </div>
      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-2 col-span-4">
          <ul class="text-left list-disc">
            <li v-for="(item, ix) in Array(4)" :key="`listItem-${ix}`" >{{$t(`section.introduction.listItems[${ix}]`)}}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>export default {
  name: 'introduction'
}
</script>

<style lang="scss" scoped>
#introduction {
  background-color: #000049;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%233e636b' fill-opacity='0.4' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
