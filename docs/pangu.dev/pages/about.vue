<script setup lang="ts">
import Avatar from "@/assets/avatar.png"
import { Github } from "@/interface"
import IconVue from "~icons/simple-icons/vuedotjs"
import IconNuxt from "~icons/simple-icons/nuxtdotjs"
import IconTypescript from "~icons/simple-icons/typescript"
import IconVite from "~icons/simple-icons/vite"
import IconTailwind from "~icons/simple-icons/tailwindcss"
import IconGithub from "~icons/simple-icons/github"

import IconStar from "~icons/feather/star"
import IconCommit from "~icons/feather/git-commit"
import IconTrendUp from "~icons/feather/trending-up"

import IconArrow from "~icons/feather/arrow-right"

const { data, pending } = useLazyAsyncData("github", () => $fetch<Github>("/api/github"))

definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
})

const { setMeta } = useCustomMeta()
setMeta("Wanna know more about me? ☺️ - Kimmy")
</script>

<template>
  <section class="w-full flex flex-col items-center">
    <div
      class="w-full max-w-screen-md px-6 sm:px-8 md:px-16 py-6 md:py-12 shadow-inset-white dark:shadow-none rounded-4xl flex flex-col items-center"
    >
      <h1 class="font-bold text-5xl md:text-7xl text-center font-space tracking-tight">Kimmy</h1>
      <h2 class="mt-4 text-xl md:text-2xl text-center text-gray-500 dark:text-gray-300">
        Frontend Developer <br />
      </h2>
      <div class="mt-12 flex flex-col items-center">
        <img :src="Avatar" alt="Kimmy" class="rounded-4xl w-full max-w-96" />
        <div class="info mt-12">
          <div>
            <h5>Basic</h5>
            <p>
              I graduated from the College of Computer and Communication Engineering of China University of Petroleum 🏛. I'm a passionate learner who's always willing to learn and work across technologies and domains 💡. I love to explore new technologies and leverage them to solve real-life problems ✨. Apart from that I also love to guide and mentor newbies 👨🏻‍💻. I'm currently into Web Development 🕸️ and working on my Data Structures and Algorithms 🤓.
            </p>
          </div>

          <div class="flex flex-col md:flex-row w-full">
            <div class="md:w-1/2">
              <h5>Language/Framework</h5>
              <p class="framework text-gray-300 flex flex-wrap text-3xl">
                <IconVue /><IconNuxt /><IconTypescript /><IconVite /><IconTailwind />
              </p>
            </div>
            <div class="mt-12 md:mt-0 md:ml-16 md:w-1/2">
              <h5>Github Stats</h5>
              <ul>
                <li class="flex mb-2 items-center">
                  <IconStar class="text-gray-300 text-xl mr-2" /> Stars: {{ data?.total_stars ?? 0 }}
                </li>
                <li class="flex mb-2 items-center">
                  <IconCommit class="text-gray-300 text-xl mr-2" /> Commit: {{ data?.total_commits ?? 0 }}
                </li>
                <li class="flex mb-2 items-center">
                  <IconTrendUp class="text-gray-300 text-xl mr-2" /> Followers: {{ data?.followers ?? 0 }}
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h5>Contact</h5>
            <ul>
              <li>Qingdao, China</li>
              <li>hi@kimmy.me</li>
              <li class="text-gray-300 gap-4 text-3xl flex mt-4">
                <a href="https://github.com/see" target="_blank">
                  <IconGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
<!--      <NuxtLink to="/project" class="button-next group mt-12">-->
<!--        Project <IconArrow class="w-6 h-6 duration transition-all ml-2 group-hover:ml-3" />-->
<!--      </NuxtLink>-->
      <NuxtLink to="/medium" class="button-next group my-12">
        Medium <IconArrow class="w-6 h-6 duration transition-all ml-2 group-hover:ml-3" />
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="postcss">
.info {
  @apply flex flex-col justify-center;
}
.info h5 {
  @apply text-lg md:text-xl font-bold text-gray-500 dark:text-warm-gray-500 mb-4;
}
.info > div {
  @apply mb-12;
}

.framework > svg {
  @apply mb-2 mr-2;
}
</style>
