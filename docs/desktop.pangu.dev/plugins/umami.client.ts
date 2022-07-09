import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin(() => {
  const moduleOptions = {
    websiteId: "649308a4-d3eb-4b86-b573-4e9ba761e443",
    scriptUrl: "https://umami-tau-topaz.vercel.app/umami.js",
  }
  const options = { ...moduleOptions }

  if (!process.dev) {
    loadScript(options)
  }
})

function loadScript(options: any) {
  const head = document.head || document.getElementsByTagName("head")[0]
  const script = document.createElement("script")

  script.async = true
  script.defer = true
  script.dataset.websiteId = options.websiteId
  script.src = options.scriptUrl

  head.appendChild(script)
}
