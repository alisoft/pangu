<script setup lang="ts">
import IconArrow from "~icons/feather/arrow-right"

import { Medium } from "~/interface/medium";
import { store } from "@/store"

const { data, pending, error } = useLazyAsyncData("medium", () => $fetch<Medium>("/api/medium"))
const latestPost = computed(() => data.value?.data?.items[0])
const otherPost = computed(() => data.value?.data?.items.slice(1))
const tagList = computed(() => {
  let tags: string[] = []
  data.value?.data?.items.forEach((post) => tags.push(...post.categories))
  return [...new Set(tags)]
})

definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
})

watch(
    pending,
    () => {
      store.loading = pending.value
    },
    { immediate: true }
)

const { setMeta } = useCustomMeta()
setMeta("My Medium 📒 - Kimmy ")
</script>

<template>
  <div class="w-full">
    <transition name="fade" mode="out-in">
      <h1 v-if="!data?.data && !error" class="font-bold text-5xl md:text-7xl text-center font-space">Medium</h1>
      <h1 v-else-if="error" class="font-bold text-5xl md:text-7xl text-center font-space">Error</h1>
      <div v-else>
        <h1 class="font-bold text-5xl md:text-7xl text-center font-space">Medium</h1>
        <div
            v-if="latestPost"
            class="mt-6 md:mt-12 mb-8 md:mb-20 rounded-4xl p-4 md:p-8 shadow-inset-white dark:shadow-none transform hover:scale-102 transition duration-300"
        >
          <a :href="`${latestPost.guid}`" target="_blank">
            <img
                class="rounded-2xl md:rounded-4xl aspect-video object-cover"
                :src="latestPost.thumbnail"
                :alt="latestPost.title"
            />
            <div class="p-4 md:p-6">
              <p class="text-sm text-warm-gray-400">{{ latestPost.pubDate }}</p>
              <h3 class="font-bold text-2xl md:text-4xl font-space tracking-tight">{{ latestPost.title }}</h3>
              <p class="mt-4 md:text-xl" v-html="latestPost.description"/>

              <ul class="mt-4 flex flex-wrap flex-row">
                <li class="tag mr-2" v-for="tag in latestPost.categories">#{{ tag }}</li>
              </ul>
            </div>
          </a>
        </div>
        <ul class="md:grid grid-cols-2 gap-6">
          <li
              class="w-full mb-8 md:mb-12 rounded-4xl p-4 md:p-6 shadow-inset-white dark:shadow-none transform hover:scale-102 transition duration-300"
              v-for="post in otherPost"
          >
            <a :href="`${post.guid}`" target="_blank">
              <img
                  class="w-full h-auto rounded-2xl md:rounded-3xl aspect-video object-cover"
                  :src="post.thumbnail"
                  :alt="post.title"
              />
              <div class="p-4 md:p-6 flex flex-col justify-between">
                <div>
                  <p class="text-sm text-warm-gray-400">{{ post.pubDate }}</p>
                  <h3 class="font-bold text-2xl font-space tracking-tight">{{ post.title }}</h3>
                  <p class="mt-2" v-html="post.description"/>
                </div>
                <ul class="mt-4 flex flex-wrap flex-row">
                  <li class="tag mr-2" v-for="tag in post.categories">#{{ tag }}</li>
                </ul>
              </div>
            </a>
          </li>
        </ul>
        <div class="flex justify-center">
          <NuxtLink to="/blog" class="button-next group my-12">
            Blog <IconArrow class="w-6 h-6 duration transition-all ml-2 group-hover:ml-3" />
          </NuxtLink>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="postcss">
.tag {
  @apply px-1 md:py-1 rounded-xl text-sm opacity-50;
}
</style>
