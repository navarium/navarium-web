<template>
  <footer id="contact" class="w-full bg-primary text-gray-50 py-12">
    <h1 class="text-xl font-medium mb-10">{{$t('menu.contact')}}</h1>
    <div class="flex justify-center">
      <a href="/me.vcf">
        <img src="@/assets/images/qr-code.svg" alt="Contact QR">
      </a>
    </div>
  </footer>
</template>

<script>export default {
  name: 'contact',
  data () {
    return {

    }
  }
}
</script>
