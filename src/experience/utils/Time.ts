import EventEmitter from "./EventEmitter"

export default class Time extends EventEmitter {
    start: number
    current: number
    elapsed: number
    delta: number
    playing: boolean
    ticker: number = 0

    constructor() {
        super()

        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16 // Default to 60fps
        this.playing = true

        this.tick = this.tick.bind(this)
        window.requestAnimationFrame(() => {
            this.tick()
        })
    }

    tick(): void {
        const currentTime = Date.now()
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = this.current - this.start

        if (this.delta > 60) this.delta = 60
        if (this.playing) this.trigger("tick")

        window.requestAnimationFrame(() => {
            this.tick()
        })
    }

    // stop
    stop(): void {
        window.cancelAnimationFrame(this.ticker)
    }
}
