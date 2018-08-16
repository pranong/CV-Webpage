<template>
  <div class="Grade" style="font-family: 'Open Sans', sans-serif;margin-bottom: 50px;">
    <div style="text-align: left">
      <div class="container">
        <div class="row">
          <div class="col" style="font-family: 'Kanit', sans-serif;">
          <h3>Grade & Transcript</h3><br>
          <center>
            <p>เกรดเฉลี่ย 2.49</p>
            <p><font size="3" color="red">*หมายเหตุ Thranscript ทางมหาวิทยาลัยยังไม่ออกให้</font></p>
          </center>
          <img src="./assets/1.png" style="width:600px;display: block;margin-left: auto;margin-right: auto;margin-top: auto;">
          <img src="./assets/2.png" style="width:600px;display: block;margin-left: auto;margin-right: auto;">
          <img src="./assets/3.png" style="width:600px;display: block;margin-left: auto;margin-right: auto;">
          <img src="./assets/4.png" style="width:600px;display: block;margin-left: auto;margin-right: auto;">
          <img src="./assets/5.png" style="width:600px;display: block;margin-left: auto;margin-right: auto;margin-bottom: auto;"><br>
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
  name: 'Grade',
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
