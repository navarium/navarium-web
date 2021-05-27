<template>
  <section id="introduction" class="w-full bg-gray-800 text-gray-50 py-12">
    <div class="w-12">
      <h1 class="h1 text-2xl">{{$t('section.introduction.title')}}</h1>
      <div>
        {{$t('section.introduction.description')}}
      </div>
      <ul class="text-left">
        <li v-for="(item, ix) in Array(4)" :key="`listItem-${ix}`" >{{$t(`section.introduction.listItems[${ix}]`)}}</li>
      </ul>
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
