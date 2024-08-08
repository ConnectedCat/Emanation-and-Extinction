window.addEventListener('load', function() {
    const gallery = document.querySelector('.gallery')
    if(gallery){
        const gallery_scroller = gallery.querySelector('.gallery_scroller')
        const gallery_item_size = gallery_scroller.querySelector('div').clientWidth
        const gallery_items_number = gallery_scroller.children.length
        let scroll_counter = 0
        const btn_next = gallery.querySelector('.btn.next')
        const btn_prev = gallery.querySelector('.btn.prev')
    
        btn_prev.style.display = 'none'
    
        btn_next.addEventListener('click', scrollToNextPage)
        btn_prev.addEventListener('click', scrollToPrevPage)
    
        // For paginated scrolling, simply scroll the gallery one item in the given
        // direction and let css scroll snaping handle the specific alignment.
        function scrollToNextPage() {
            if(scroll_counter < gallery_items_number - 1) {
                gallery_scroller.scrollBy(gallery_item_size, 0)
                scroll_counter++
                if(scroll_counter === gallery_items_number - 1) {
                    btn_next.style.display = 'none'
                }
                if(scroll_counter > 0) {
                    btn_prev.style.display = 'block'
                }
            }
        }
        function scrollToPrevPage() {
            if(scroll_counter > 0) {
                gallery_scroller.scrollBy(-gallery_item_size, 0)
                scroll_counter--
                if(scroll_counter === 0) {
                    btn_prev.style.display = 'none'
                }
                if(scroll_counter < gallery_items_number - 1) {
                    btn_next.style.display = 'block'
                }
            }
        }
    }

})