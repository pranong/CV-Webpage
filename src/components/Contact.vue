<template>
  <div class="Curriculum" style="font-family: 'Open Sans', sans-serif;">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <img src="./assets/Happy Mail.gif" style="width:350px;display: block;margin-left: auto;margin-right: auto;margin-top: 100px;margin-bottom: auto;">
        </div>
        <div class="col-md-6 col-md-offset-3" id="form_container">
          <h2>Contact Us</h2>
          <p>
            Please send your message below. We will get back to you at the earliest!
          </p>
              <div class="row">
                <div class="col-sm-12 form-group">
                      <label for="message">
                          Message:</label>
                      <textarea class="form-control" type="textarea" name="message" id="message" maxlength="6000" rows="7" v-model="message"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6 form-group">
                      <label for="name">
                          Your Name:</label>
                      <input type="text" class="form-control" id="name" name="name" required v-model="from">
                </div>
                <div class="col-sm-6 form-group">
                      <label for="email">
                          Email:</label>
                      <input type="email" class="form-control" id="email" name="email" required v-model="from_email">
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 form-group">
                      <button type="submit" class="btn btn-lg btn-default pull-right" @click="email()">Send</button>
                </div>
              </div>
            <div id="success_message" style="width:100%; height:100%; display:none; ">
              <h3>Posted your message successfully!</h3>
            </div>
            <div id="error_message"
                  style="width:100%; height:100%; display:none; ">
                      <h3>Error</h3>
                      Sorry there was an error sending your form.

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Curriculum',
  components: {

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      from: '',
      message: '',
      from_email: ''
    }
  },
  mounted () {
    // $(document).ready(function () {
    //   $('.material-button-toggle').on('click', function () {
    //     $(this).toggleClass('open')
    //     $('.option').toggleClass('scale-on')
    //   })
    // })
  },
  methods: {
    email () {
      fetch('https://mailing-services.herokuapp.com/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: this.from,
          message: this.message,
          from_email: this.from_email
        })
      })
    }
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
