// CÓMO EJECUTARLO EN GOOGLE CHROME
// 1. INSTAGRAMA ABIERTO
// 2. LISTA ABIERTA DE SEGUIDORES
// 3. HERRAMIENTAS DE DESARROLLADOR ABIERTAS
// 4. COPIE TODO AQUÍ CTRL + A
// 5. PEGAR TODO EN HERRAMIENTAS PARA DESARROLLADORES CONSOLA
// 6. HAGA CLIC ENTRAR
// NO TENDRÁS PRONTO AMIGOS

const FOLLOWING_BUTTON_TEXT = 'Siguiendo' // CAMBIAR ESTO A SU IDIOMA
const UNFOLLOW_BUTTON_TEXT = 'Dejar de seguir' // Este también
const MAX_ATTEMPTS_PER_UNFOLLOW = 3 // Si estás desde el PC estás bien

const unfollowSomebody = () => {
    const followingButton = document
        .evaluate(`//button[text()="${FOLLOWING_BUTTON_TEXT}"]`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
        .singleNodeValue
    if (followingButton) {
        console.log('Encontrado el siguiente botón. Haciendo clic ...')
        followingButton.click()
        console.log('Haga clic en el siguiente botón.')
        let unfollowButton = document.evaluate(`//button[text()="${UNFOLLOW_BUTTON_TEXT}"]`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
        let attempts = 1
        while (attempts < MAX_ATTEMPTS_PER_UNFOLLOW && !unfollowButton) {
            console.log(`Se Intentó encontrar Botón de dejar de seguir pero no se pudo. Número de reintento #${attempts++}`)
            unfollowButton = document.evaluate(`//button[text()="${UNFOLLOW_BUTTON_TEXT}"]`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
        }
        if (attempts < MAX_ATTEMPTS_PER_UNFOLLOW) {
            console.log('Botón de dejar de seguir encontrado. Haciendo scrolling y dejando de seguir ...')
            unfollowButton.scrollIntoView(true)
            unfollowButton.click()
        } else {
            console.log(`Se ha intentado ${MAX_ATTEMPTS_PER_UNFOLLOW} veces y no tuvo éxito`)
        }
        return false
    }
    return true
}

const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const randomTimeout = () => (Math.floor((Math.random() * 30) + 30) * 300) + 300

const unfollowEveryone = async () => {
    let shouldStop = false
    while (!shouldStop) {
        shouldStop = unfollowSomebody()
        const unfollowTimeout = randomTimeout()
        console.log(`Esperando ${unfollowTimeout} segundo. podría parar: ${shouldStop}.`)
        await timeout(unfollowTimeout)
    }
    console.log('No sigues a nadie.')
}

unfollowEveryone()