let viewportWidth = window.innerWidth

export function isBig() {
    if (viewportWidth <= 820) {
        return false
    } else {
        return true
    }
}
