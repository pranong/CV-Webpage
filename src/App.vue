<template>
  <div id="app">
    <div class="hello" style="font-family: 'Open Sans', sans-serif;">
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #007C8C;color: white">
          <div class="container">
              <a class="navbar-brand logo-font" href="#" id="brand">
                  Nuttapat
              </a>
              <!-- links toggle -->
              <button class="navbar-toggler order-first" type="button" data-toggle="collapse" data-target="#links" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="fa fa-bars"></i>
              </button>
              <!-- account toggle -->
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#account" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="fa fa-home fa-1x" aria-hidden="true"></i>
                  <!-- <span class="badge badge-light">88</span> -->
              </button>
              <div class="collapse navbar-collapse" id="links">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link"><router-link to="/"><font color="white">Home </font><span class="sr-only">(current)</span></router-link></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link"><router-link to="/Resume"><font color="white">Resume</font></router-link></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link"><router-link to="/Curriculum"><font color="white">CV</font></router-link></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link"><router-link to="/Grade"><font color="white">Grade</font></router-link></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link"><router-link to="/Contact"><font color="white">Contact</font></router-link></a>
                    </li>
                  </ul>
              </div>
          </div>
      </nav>
      <body>
        <router-view/>
      </body>
      <!-- Footer -->
      <footer style="font-family: Quicksand, sans-serif;background-color: #007C8C;color: white;">
          <!-- Footer Elements -->
          <div class="container">
            <!-- Grid row-->
            <div class="row">
              <!-- Grid column -->
              <div class="col-md-12 py-5">
                <div class="mb-0 flex-center">
                  <!-- Facebook -->
                  <a class="fb-ic white-link" href="http://www.facebook.com/PranongOi">
                    <i class="fab fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <!--Instagram-->
                  <a class="ins-ic white-link" href="https://www.facebook.com/messages/t/PranongOi">
                    <i class="fab fa-facebook-messenger fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a class="ins-ic white-link" href="https://www.instagram.com/p.punkrawk/">
                    <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <!--Pinterest-->
                  <a class="pin-ic white-link" href="https://github.com/pranong/">
                    <i class="fab fa-github fa-lg white-text fa-2x"> </i>
                  </a>
                </div>
              </div>
              <!-- Grid column -->
            </div>
            <!-- Grid row-->
          </div>
          <!-- Footer Elements -->
          <!-- Copyright -->
          <div class="footer-copyright text-center py-2" style="font-family: Quicksand, sans-serif;background-color: #005A66;">© 2018 Nuttapat Dev By
                    <i class="fab fa-vuejs fa-xl white-link fa-2x"> </i>
                  Vue.js
          </div>
          <!-- Copyright -->
        </footer>
    </div>
  </div>
</template>

<script>
import JQuery from 'jquery'
let $ = JQuery
export default {
  name: 'App',
  mounted () {

  },
  methods: {
    closeMenu ($event) {
      $($event.currentTarget).closest('.navbar-collapse').collapse('hide')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li a {
  text-decoration: none;
}
.white-link{color:#fff;}
.green-link{color:rgb(34, 240, 120);background-color: #fff;border-radius: 1000px;font-size: 100px}
a:hover {
    color: rgb(93, 185, 238);
}
vr {
    border:         none;
    border-left:    2px solid hsla(200, 10%, 50%,100);
    border-color: #fff;
    height:         300px;
    width:          1px;
}
</style>
