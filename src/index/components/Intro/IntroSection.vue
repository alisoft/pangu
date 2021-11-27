<template>
  <div class="main-content">
    <h1>Vue3 Node Boilerplate.</h1>
    <h2>Welcome to here.</h2>
    <div class="btn-wrapper">
      <action-btn msg="Admin" href="/admin" />
      <action-btn msg="Mobile" href="/mobile" />
    </div>
    <div class="small-wrapper-link">
      <a class="border-right small-link" href="#"
        >GET THE NEWSLETTER
        <span><font-awesome-icon icon="caret-right"></font-awesome-icon></span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import ActionButton from "./ActionButton.vue";

export default {
  name: "app",
  components: {
    ActionBtn: ActionButton,
  },
};
</script>

<style>
@import "./../../assets/CSS/normalize.css";
@import "./../../assets/CSS/webflow.css";

/* Test CSS */
body {
  background-color: grey;
}

h1 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: "Open Sans", sans-serif;
  color: #fff;
  font-size: 38px;
  line-height: 44px;
  font-weight: 400;
}

.main-content {
  position: absolute;
  left: 0;
  top: 15%;
  right: 0;
  bottom: 0;
  display: block;
  width: 68%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

h1 {
  margin-bottom: 25px;
  font-family: Montserrat, sans-serif;
  font-size: 42.5px;
  font-weight: 200;
}

.small-wrapper-link {
  margin-top: 25px;
}

.small-link {
  display: inline-block;
  padding-right: 20px;
  padding-left: 20px;
  border-right: 1px none #fff;
  font-family: Montserrat, sans-serif;
  color: #fff;
  font-weight: 400;
  text-decoration: none;
}

.small-link:hover {
  transition: color 0.25s;
  color: red;
}

.small-link.border-right {
  border-style: none;
  border-right-width: 2px;
  font-weight: 300;
}

.btn-wrapper {
  display: block;
  width: 100%;
  margin-top: 0;
  padding-top: 20px;
  padding-bottom: 5px;
}

/* Icon */
.fa-icon {
  padding: 0.3em 0 0 0;
}
</style>
