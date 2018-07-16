# swiperjs

swiperjs is a custom event that gives you the direction of a swipe if it is longer than 50 pixels.

just include the script in your html and listen for the 'swipe' event
```
<script src="swiper.js"></script>
<script>
    window.addEventListener('swipe', (swipeEvent)=>{
        console.log(swipeEvent.detail)
    })
</script>
```
and enjoy the fun !

PS: swiper.js is listening for the event, to disable the log message comment the 19th line in the file.
