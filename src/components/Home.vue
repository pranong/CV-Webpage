<template>
  <div class="hello" style="font-family: 'Open Sans', sans-serif;">
    <div style="text-align: left">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div style="width:350px;border-radius: 1000px;margin: auto;padding: 10px;">
              <img src="./assets/profile2CROPPED2.jpg" style="width:350px;border-radius: 1000px;display: block;margin-left: auto;margin-right: auto;margin-top: auto;margin-bottom: auto;">
            </div>
          </div>
          <div class="col-lg-6">
            <h1>Hello,</h1><br>
            <h2>I'm Nuttapat Panong</h2><br>
            <router-link to="/Resume"><button type="button" class="btn btn-info btn-circle btn-xl"><i class="far fa-address-book fa-lg"></i><br><font size="4">Resume</font></button></router-link>
            <router-link to="/Curriculum"><button type="button" class="btn btn-warning btn-circle btn-xl"><i class="far fa-file-pdf fa-lg"></i><br><font size="4">CV</font></button></router-link>
            <router-link to="/Grade"><button type="button" class="btn btn-danger btn-circle btn-xl"><i class="fas fa-list-ol fa-lg"></i><br><font size="4">Grade</font></button></router-link><br>
            <a style="font-family: Quicksand, sans-serif;padding-bottom: 20px;">
              I am interested in Web / App Development career.
              I am a productive team player, fast
              learning and hard working, Able to work
              under pressure and I am good in English
            </a><br><br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import JQuery from 'jquery'
// let $ = JQuery
export default {
  name: 'HelloWorld',
  components: {

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    // $(document).ready(function () {
    //   $('.material-button-toggle').on('click', function () {
    //     $(this).toggleClass('open')
    //     $('.option').toggleClass('scale-on')
    //   })
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:800i');
@import url('https://fonts.googleapis.com/css?family=Quicksand:700');
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.btn-circle {
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 15px;
}
.btn-circle.btn-lg {
  width: 50px;
  height: 50px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 25px;
}
.btn-circle.btn-xl {
  width: 150px;
  height: 150px;
  padding: 10px 16px;
  font-size: 40px;
  line-height: 1.33;
  border-radius: 200px;
  margin-bottom: 20px;
  margin-right: 20px;
}

</style>
