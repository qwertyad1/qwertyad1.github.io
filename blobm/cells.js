import { BACKWARD, BEAT, BREAK, cell, DIRECTIONAL, DOWN, FORWARD, LEFT, TICK, RIGHT, sound, UP, texture } from 'https://blob-machine.pages.dev/simulation.js'

const redColors = ['#600', '#700', '#800', '#900', '#a00', '#b00', '#c00', '#d00']
const breadColors = ['#cb8', '#ca7', '#c96']

const firemoveCols = ['#4c78d7','#114aa2']

cell({
name: 'Firework Mover',
tx: 0, ty: 3,
update: TICK,
atlas: extensionAtlas,

clicked() {
this.data++
},
tick() {
this.go(FORWARD)
if (!this.data) this.data = 6
if (--this.data == 0) {
this.explode([
firemoveCols[random()*firemoveCols.length|0],
firemoveCols[random()*firemoveCols.length|0],
])
sound(BREAK)
this.pop()
}
},
})
