export const useCustomMeta = () => {
  let defaultDesc =
    "Kimmy - Frontend Developer. I love building fun projects during my free time!"

  const setMeta = (title: string, desc = defaultDesc) => {
    useMeta({
      title,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: desc },
        { name: "og:title", content: title },
        { name: "og:site_name", content: "Kimmy" },
        { name: "og:description", content: desc },
        { name: "og:type", content: "website" },
        { name: "og:url", content: "https://kimmy.me/" },
        // { name: "og:image", content: image },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    })
  }

  return {
    setMeta,
  }
}
