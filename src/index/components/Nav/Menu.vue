<template>
  <div class="menu">
    <!-- Hamburger Menu Button -->
    <span class="nav-slideout-opener" v-on:click="toggle">
      <font-awesome-icon
        v-if="isOpen === false"
        icon="bars"
      ></font-awesome-icon>
      <transition enter-active-class="animated rotateIn">
        <font-awesome-icon v-if="isOpen" icon="bars"></font-awesome-icon>
      </transition>
    </span>
    <transition name="slide" type="animation">
      <div class="sidenav" v-if="isOpen">
        <!-- Close Icon -->
        <span class="x-icon" v-on:click="toggle">
          <transition appear enter-active-class="animated rotateIn">
            <font-awesome-icon icon="times"></font-awesome-icon>
          </transition>
        </span>
        <!-- Nav Menu Items -->
        <ul>
          <li class="nav-slideout-item" v-for="item in menu" :key="item">
            <a href="#">
              {{ item }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
    <!-- BG Mask Component-->
    <bg-mask v-show="isOpen" @click="close"></bg-mask>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BGMask from "./../Mask.vue";

export default defineComponent({
  setup() {
    const isOpen = ref(false);

    const open = () => {
      isOpen.value = true;
    };

    const close = () => {
      isOpen.value = false;
    };

    const toggle = () => {
      // console.log('button clicked');
      if (isOpen.value) {
        close();
      } else {
        open();
      }
    };

    return {
      isOpen,
      toggle,
    };
  },
  data: function () {
    return {
      menu: [
        "NEWS",
        "NEW INVENTORY",
        "USED INVENTORY",
        "CHARGING",
        "FIND US",
        "SEMI",
        "CARBON IMPACT",
        "SUPPORT",
      ],
    };
  },
  components: {
    BgMask: BGMask,
  },
});
</script>

<style scoped>
/* Side Menu Animation */
.slide-enter {
  opacity: 0;
  /* transform: translateY(20px) */
}
.slide-enter-active {
  animation: slide-in 0.35s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave {
  /* opacity: 1; */
}
.slide-leave-active {
  animation: slide-out 0.25s ease-out forwards;
  transition: opacity 3s;
  opacity: 0;
}
@keyframes slide-in {
  from {
    width: 0;
  }
  to {
    width: 200px;
  }
}
@keyframes slide-out {
  from {
    width: 200px;
  }
  to {
    width: 0;
  }
}

/* Side Menu Navigation */
.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);
  border-left: 1px solid #f2f2f2;
  overflow-x: hidden;
  padding-top: 1%;
}
.sidenav ul {
  transition: right 300ms ease-in-out;
}
.sidenav li {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidenav a {
  margin: 0;
  padding: 20px 10px;
  color: #141414;
  font-size: 13px;
  font-weight: 400;
  border-bottom: 1px solid #ddd;
  text-decoration: none;
  display: block;
  transition: 0.3s;
}

/* Icon */
.menu {
  background: transparent;
}
.x-icon {
  margin: 0 0 0 67%;
  color: #141414;
}
svg {
  width: 25px;
  height: 20px;
}
svg.fa-icon {
  /* fill: white; */
  padding: 5px 0 0 0;
}
</style>
