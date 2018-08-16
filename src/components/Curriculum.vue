<template>
  <div class="Curriculum" style="font-family: 'Kanit', sans-serif;">
    <div class="container">
      <div class="row">
        <div class="col" id="form_container">
          <h2>Curriculum Vitae</h2><br style="line-height: 0%;">
          <h4>ข้อมูลส่วนตัว (Personal information)</h4>
          ชื่อ นายณัฐภัทร แป้นอ่อง<br>
          ที่อยู่ 177/2 ม.7 ต.สำโรงกลาง อ.พระประแดง จ. สมุทรปราการ 10130<br>
          เบอร์โทรติดต่อ 0860960850<br>
          อีเมล์ nutpat2539@gmail.com<br><hr>
          <h4>ประวัติการศึกษา (Education)</h4>
          2011 – 2014 ระดับมัธยม ศิลป์-คำนวณ โรงเรียนอัสสัมชัญสมุทรปราการ<br>
          2015 – 2018 ระดับมหาวิทยาลัย เทคโนโลยีสารสนเทศ แขนง เน็ตเวิร์ค มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ<br><hr>
          <h4>ประสบการณ์ทำงาน (Work experience)</h4>
          นักศึกษาฝึกงาน แผนก Network Engineer บริษัท อินติเกรตเทคโนโลยีซิสเต็ม จำกัด<br><hr>
          <h4>ประสบการณ์การทำวิจัย (Research experience)</h4>
          Safe Life App + IoT AED Cabinet สร้างตู้ AED โดยติด อปกรณ์ IoT เพื่อ ดูค่าความชื้น ค่าอุณหภูมิ ตําแหน่งของตู้ AED ดูสถานะในขณะนั้นของตู้ ว่าถูกใช้งานอยู่หรือไม่โดยใช้ Ultrasonic Sensor ในการตรวจสอบ โดยจะสามารถดูสถานะของตู้แต่ละตู้ได้ที่ web และ Application โดย Application จะสามารถนำทางไปที่ตู้ พร้อมทั้งมี ระบบ Video calling เพื่อไว้ให้หน่วยกู้ภัยใช้เพื่อคุยกับแพทย์ได้<br>
          <a href="https://github.com/pranong/AED-Center">https://github.com/pranong/AED-Center</a><br>
          <div class="container" v-if="selectedImage" max-width="85vw">
            <img :src="selectedImage" alt="" width="70%">
            <div class="top-right"></div>
              <font class="text-danger" style="position: absolute;">
                <i class="fas fa-times-circle fa-xl fa-2x" style="vertical-align: sub;" @click.stop="selectedImage = null"></i>
              </font>
            <hr>
          </div>

          <div v-for="url in images">
            - <img :src="url" width="100px" @click="zoom(url)"><br><br>
          </div>
          <hr>
          <h4>กิจกรรมนอกหลักสูตร (Extracurricular activities)</h4>
          เข้าร่วมงาน 24 Hours Hacking Hospital Services Development<br>
          เป็นผู้ช่วยวิทยากร ในหัวข้อเรื่อง พัฒนาศักยภาพทุนมนุษย์ (IoT)<br><hr>
          <h4>ทักษะ (Skills)</h4>
          •	React-Native<br>
          •	Backend with Node.js<br>
          •	APIs<br>
          •	HTML/CSS<br>
          •	Bootstrap<br>
          •	Vue.JS<br><hr>
          <H4>ทักษะภาษาอังกฤษ (English Skills)</H4>
          •	Listening<br>
          •	Speaking <br>
          •	Reading<br>
          •	Writing<br><hr>

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
      from_email: '',
      selectedImage: null,
      images: [
        'https://i.imgur.com/pGetCY8.png',
        'https://i.imgur.com/ggb02tA.png'
      ]
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
      fetch('http://192.168.1.5:8081/', {
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
    },
    zoom (url) {
      console.log('Zoom', url)
      this.selectedImage = url
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
/* Style the Image Used to Trigger the Modal */
#myImg {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg:hover {opacity: 0.7;}

/* The Modal (background) */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (Image) */
.modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
}

/* Caption of Modal Image (Image Text) - Same Width as the Image */
#caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
}

/* Add Animation - Zoom in the Modal */
.modal-content, #caption {
    animation-name: zoom;
    animation-duration: 0.6s;
}

@keyframes zoom {
    from {transform:scale(0)}
    to {transform:scale(1)}
}

/* The Close Button */
.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
}

.close:hover,
.close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
    .modal-content {
        width: 100%;
    }
}
i:hover {
    color: rgb(93, 185, 238);
}
.top-right {
    position: absolute;
    top: 8px;
    right: 16px;
}
</style>
