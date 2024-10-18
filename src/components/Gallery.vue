<template>
    <div>
      <!-- Thumbnails -->
      <div class="gallery">
        <a
          v-for="(image, index) in images"
          :key="index"
          :href="image.src" 
          :data-pswp-width="image.width"
          :data-pswp-height="image.height"
          target="_blank"
        >
          <img
           :src="require(`../assets/${image.thumbnail}`)" :alt="image.alt" class="gallery-item" />
        </a>
      </div>
  
      <!-- PhotoSwipe container -->
      <div id="gallery" class="pswp"></div>
    </div>
  </template>
  
  <script>
  import PhotoSwipeLightbox from 'photoswipe/lightbox';
  import 'photoswipe/style.css';
  
  export default {
    name: 'GalleryComp',
    props: {
      images: {
        type: Array,
        required: true,
      },
    },
    mounted() {
      // Initialize PhotoSwipeLightbox
      const lightbox = new PhotoSwipeLightbox({
        gallery: '.gallery', // Target the gallery container
        children: 'a', // Each <a> tag represents a slide
        pswpModule: () => import('photoswipe'),
      });
  
      // Initialize the gallery
      lightbox.init();
    },
  };
  </script>
  
  <style scoped>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    
  }
  
  .gallery-item {
    width: 250px;
    height: auto;
    margin: 10px;
    cursor: pointer;
  }
  </style>
  