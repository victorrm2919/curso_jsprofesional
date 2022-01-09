class AutoPause {
    constructor() {
        this.threshold = 0.25,
        this.handlerIntersection = this.handlerIntersection.bind(this) //Cada que se llame this.handlerIntersection se refiere a this de la clase
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this)
    }

    run(player) {
        this.player = player
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold:  this.threshold  //Porcentaje de observador del elemento
        })

        observer.observe(this.player.media)

        document.addEventListener('visibilitychange', this.handlerVisibilityChange)  //Dectecta el cambio en el tab
    }


    handlerIntersection(entries) {
        const entry = entries[0]

        const isVisible = entry.intersectionRatio > this.threshold

        if (isVisible) {
            this.player.play()
        }else {
            this.player.pause()
        }
        // console.log(entry);
    }

    handlerVisibilityChange() {
        const isVisible = document.visibilityState === 'visible'

        if (isVisible) {
            this.player.play()
        }else {
            this.player.pause()
        }
    }
}

export default AutoPause