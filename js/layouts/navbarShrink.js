<<<<<<< HEAD
import { navigationState } from "../utils.js";

export const navbarShrink = {
  navbarDom: document.querySelector(".navbar-container"),
  leftAsideDom: document.querySelector(".page-aside"),
  isnavbarShrink: false,
  navbarHeight: 0,

  init() {
    this.navbarHeight = this.navbarDom.getBoundingClientRect().height;
    this.shrink();
    this.togglenavbarDrawerShow();
    window.addEventListener("scroll", () => {
      this.shrink();
    });
  },

  shrink() {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (!this.isnavbarShrink && scrollTop > this.navbarHeight) {
      this.isnavbarShrink = true;
      document.body.classList.add("navbar-shrink");
    } else if (this.isnavbarShrink && scrollTop <= this.navbarHeight) {
      this.isnavbarShrink = false;
      document.body.classList.remove("navbar-shrink");
    }
  },

  togglenavbarDrawerShow() {
    const domList = [
      document.querySelector(".window-mask"),
      document.querySelector(".navbar-bar"),
    ];

    if (document.querySelector(".navbar-drawer")) {
      domList.push(
        ...document.querySelectorAll(
          ".navbar-drawer .drawer-navbar-list .drawer-navbar-item",
        ),
      );
    }

    domList.forEach((v) => {
      if (!v.dataset.navbarInitialized) {
        v.dataset.navbarInitialized = 1;
        v.addEventListener("click", () => {
          document.body.classList.toggle("navbar-drawer-show");
        });
      }
    });

    const logoTitleDom = document.querySelector(
      ".navbar-container .navbar-content .logo-title",
    );
    if (logoTitleDom && !logoTitleDom.dataset.navbarInitialized) {
      logoTitleDom.dataset.navbarInitialized = 1;
      logoTitleDom.addEventListener("click", () => {
        document.body.classList.remove("navbar-drawer-show");
      });
    }
  },
};

try {
  swup.hooks.on("page:view", () => {
    navbarShrink.init();
    navigationState.isNavigating = false;
  });

  swup.hooks.on("visit:start", () => {
    navigationState.isNavigating = true;
    document.body.classList.remove("navbar-shrink");
  });
} catch (error) {}

document.addEventListener("DOMContentLoaded", () => {
  navbarShrink.init();
});
=======
import{navigationState}from"../utils.js";let navbarShrink={navbarDom:document.querySelector(".navbar-container"),leftAsideDom:document.querySelector(".page-aside"),isnavbarShrink:!1,navbarHeight:0,init(){this.navbarHeight=this.navbarDom.getBoundingClientRect().height,this.shrink(),this.togglenavbarDrawerShow(),this.toggleSubmenu(),window.addEventListener("scroll",()=>{this.shrink()})},shrink(){var a=document.documentElement.scrollTop||document.body.scrollTop;!this.isnavbarShrink&&a>this.navbarHeight?(this.isnavbarShrink=!0,document.body.classList.add("navbar-shrink")):this.isnavbarShrink&&a<=this.navbarHeight&&(this.isnavbarShrink=!1,document.body.classList.remove("navbar-shrink"))},togglenavbarDrawerShow(){var a=[document.querySelector(".window-mask"),document.querySelector(".navbar-bar")],a=(document.querySelector(".navbar-drawer")&&a.push(...document.querySelectorAll(".navbar-drawer .drawer-navbar-list .drawer-navbar-item"),...document.querySelectorAll(".navbar-drawer .tag-count-item")),a.forEach(a=>{a.dataset.navbarInitialized||(a.dataset.navbarInitialized=1,a.addEventListener("click",()=>{document.body.classList.toggle("navbar-drawer-show")}))}),document.querySelector(".navbar-container .navbar-content .logo-title"));a&&!a.dataset.navbarInitialized&&(a.dataset.navbarInitialized=1,a.addEventListener("click",()=>{document.body.classList.remove("navbar-drawer-show")}))},toggleSubmenu(){document.querySelectorAll("[navbar-data-toggle]").forEach(a=>{a.dataset.eventListenerAdded||(a.dataset.eventListenerAdded="true",a.addEventListener("click",function(){let a=document.querySelector('[data-target="'+this.getAttribute("navbar-data-toggle")+'"]');var e,t=a.children,n=this.querySelector(".fa-chevron-right");a&&(e=!a.classList.contains("hidden"),n&&n.classList.toggle("icon-rotated",!e),e?anime({targets:t,opacity:0,translateY:-10,duration:300,easing:"easeInQuart",delay:anime.stagger(80,{start:20,direction:"reverse"}),complete:function(){a.classList.add("hidden")}}):(a.classList.remove("hidden"),anime({targets:t,opacity:[0,1],translateY:[10,0],duration:300,easing:"easeOutQuart",delay:anime.stagger(80,{start:20})})))}))})}};try{swup.hooks.on("page:view",()=>{navbarShrink.init(),navigationState.isNavigating=!1}),swup.hooks.on("visit:start",()=>{navigationState.isNavigating=!0,document.body.classList.remove("navbar-shrink")})}catch(a){}document.addEventListener("DOMContentLoaded",()=>{navbarShrink.init()});export{navbarShrink};
>>>>>>> main1
