<template>
  <section id="introduction" class="w-full bg-gray-800 text-gray-50 py-12">
    <div class="">
      <h1 class="h1 text-2xl">{{$t('section.introduction.title')}}</h1>
      <div>
        {{$t('section.introduction.description')}}
      </div>
      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-2 col-span-4">
          <ul class="text-left">
            <li v-for="(item, ix) in Array(4)" :key="`listItem-${ix}`" >{{$t(`section.introduction.listItems[${ix}]`)}}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>export default {
  name: 'introduction',
  data () {
    return {

    }
  }
}
</script>
