import sal from "sal.js"

export const onRouteUpdate = () => {
    const idle = window.requestIdleCallback || requestAnimationFrame
    idle(() => {
        sal()
    })
}
