<template>
  <div class="Resume" style="font-family: 'Open Sans', sans-serif;">
    {{lang}}
    <div style="text-align: left" v-if="lang == 'EN'">
      <div class="container">
        <div class="row">
          <div class="col-10">
            <font size="80">Resume</font>
          </div>
          <div class="col-1" style="text-align: right"><br>
             <select class="form-control" v-model="lang" style="width: 150px;height: 35px">
              <optgroup label="Language">
              <option value="TH">Thai</option>
              <option value="EN">English</option>
              </optgroup>
            </select>
          </div>
        </div>
        <br><hr>
        <div class="row">
          <div class="col-lg-auto">
            <div class="row">
              <div class="col-2">
                <center><button type="button" class="btn btn-info btn-circle btn-xl"><i class="fa fa-user fa-lg"></i></button><font size="4">Personal Info</font></center>
              </div>
              <div class="col">
                <font size="5">Nuttapat Panong (Nut)</font><br>
                <font size="3">
                  Personal ID : 1103702037541<br>
                  Address : 177/2 m.7 Samrongklang Prapradaeng Samutprakarn 10130<br>
                  Telephone : 086-096-0850<br>
                  E-mail : nutpat2539@hotmail.com<br>
                  Birthday : 13 May 1996<br>
                  Military Status : Exempted by finishing Reserv Officier ‘Training Corps Course’<br>
                </font>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-2">
                 <center><button type="button" class="btn btn-info btn-circle btn-xl"><i class="fa fa-briefcase fa-lg"></i></button><font size="4">Experience</font></center>
              </div>
              <div class="col">
                <font size="3">
                  Internship at IT System<br><br>
                  Attended 24 Hours Hacking Hospital Services Development<br><br>
                  IoT Seminar Assistant lecturer<br><br>
                </font>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-2">
                 <center><button type="button" class="btn btn-info btn-circle btn-xl"><i class="fa fa-book fa-lg"></i></button><font size="4">Education</font></center>
              </div>
              <div class="col">
                <font size="3">
                  <font size="5">High School<br></font>
                  Art-Math<br>
                  2011 - 2014<br>
                  Assumption College Samutprakarn<br><br>
                  <font size="5">University<br></font>
                  Information Technology (Network)<br>
                  2015 - 2018<br>
                  King Mongkut's University of Technology North Bangkok<br><br>
                </font>
              </div>
            </div>
            <hr>
          </div>
          <div class="col-md-auto" style="padding-bottom: 20px;">
            <div class="row">
              <div class="col">
                <button type="button" class="btn btn-warning btn-circle btn-lg"><i class="fa fa-cog fa-md"></i></button><br><font size="2">Programming Skills</font>
                <hr>
                <font size="2">
                Vue.JS <br>
                React-Native <br>
                Backend with Node.js <br>
                html/css <br>
                </font>
              </div>
            </div>
            <br><br>
            <div class="row">
              <div class="col">
                <button type="button" class="btn btn-warning btn-circle btn-lg"><i class="fa fa-language fa-md"></i></button><br><font size="2">Language Skills</font>
                <hr>
                <font size="2">
                  <div class="row">
                    <div class="col-5">
                      Listening <br>
                      Speaking  <br>
                      Reading   <br>
                      Writing   <br>
                    </div>
                    <div class="col">
                      <i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star-o fa-md"></i><br>
                      <i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star-o fa-md"></i><i class="fa fa-star-o fa-md"></i><br>
                      <i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star-o fa-md"></i><br>
                      <i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star-o fa-md"></i><br>
                    </div><br>
                  </div>
                </font>
              </div>
            </div>
            <br><br>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align: left;font-family: 'Kanit', sans-serif;" v-else >
      <div class="container">
        <div class="row">
          <div class="col-10">
            <font size="80">Resume Thai</font>
          </div>
          <div class="col-1" style="text-align: right"><br>
             <select class="form-control" v-model="lang" style="width: 150px;height: 35px">
              <optgroup label="Language">
              <option value="TH">Thai</option>
              <option value="EN">English</option>
              </optgroup>
            </select>
          </div>
        </div>
        <br><hr>
        <div class="row">
          <div class="col-lg-auto">
            <div class="row">
              <div class="col-3">
                <center><button type="button" class="btn btn-info btn-circle btn-xl"><i class="fa fa-user fa-lg"></i></button><br><font size="4">ข้อมูลส่วนตัว</font></center>
              </div>
              <div class="col">
                <font size="5">ณัฐภัทร แป้นอ่อง (นัท)</font><br>
                <font size="3">
                  ที่อยู่ : 177/2 ม.7 ต.สำโรงกลาง อ.พระประแดง จ.สมุทรปราการ 10130<br>
                  โทร : 086-096-0850<br>
                  E-mail : nutpat2539@hotmail.com<br>
                  วันเกิด : 13 พฤษภาคม 1996<br>
                  สถานภาพทางการทหาร : สำเร็จหลักสูตรรักษาดินแดน<br>
                </font>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-3">
                 <center><button type="button" class="btn btn-info btn-circle btn-xl"><i class="fa fa-briefcase fa-lg"></i></button><br><font size="4">ประสบการณ์</font></center>
              </div>
              <div class="col">
                <font size="3">
                  นักศึกษาฝึกงาน แผนก Network Engineer บริษัท ไอทีซิซเต็ม<br><br>
                  เข้าร่วมงาน 24 Hours Hacking Hospital Services Development<br><br>
                  เป็นผู้ช่วยวิทยากร ในหัวข้อเรื่อง พัฒนาศักยภาพทุนมนุษย์ (IoT)<br><br>
                </font>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-3">
                 <center><button type="button" class="btn btn-info btn-circle btn-xl"><i class="fa fa-book fa-lg"></i></button><br><font size="4">การศึกษา</font></center>
              </div>
              <div class="col">
                <font size="3">
                  <font size="5">ระดับมัธยม<br></font>
                  ศิลป์-คำนวน<br>
                  2011 - 2014<br>
                  โรงเรียนอัสสัมชัญสมุทรปราการ<br><br>
                  <font size="5">ระดับมหาวิทยาลัย<br></font>
                  เทคโนโลยีสารสนเทศ แขนง เน็ตเวิร์ค<br>
                  2015 - 2018<br>
                  มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ<br><br>
                </font>
              </div>
            </div>
            <hr>
          </div>
          <div class="col-md-auto" style="padding-bottom: 20px;">
            <div class="row">
              <div class="col">
                <button type="button" class="btn btn-warning btn-circle btn-lg"><i class="fa fa-cog fa-md"></i></button><br><font size="2">ทักศะทางด้าน โปรแกรมมิ่ง</font>
                <hr>
                <font size="2">
                Vue.JS <br>
                React-Native <br>
                Backend with Node.js <br>
                html/css <br>
                </font>
              </div>
            </div>
            <br><br>
            <div class="row">
              <div class="col">
                <button type="button" class="btn btn-warning btn-circle btn-lg"><i class="fa fa-language fa-md"></i></button><br><font size="2">ทักศะทางด้าน ภาษา</font>
                <hr>
                <font size="2">
                  <div class="row">
                    <div class="col-5">
                      Listening <br>
                      Speaking  <br>
                      Reading   <br>
                      Writing   <br>
                    </div>
                    <div class="col">
                      <i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star-o fa-md"></i><br>
                      <i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star-o fa-md"></i><i class="fa fa-star-o fa-md"></i><br>
                      <i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star-o fa-md"></i><br>
                      <i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star fa-md"></i><i class="fa fa-star-o fa-md"></i><br>
                    </div><br>
                  </div>
                </font>
              </div>
            </div>
            <br><br>
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
  name: 'Resume',
  components: {

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lang: 'EN'
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
@import url('https://fonts.googleapis.com/css?family=Kanit:700i');
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
  width: 100px;
  height: 100px;
  padding: 10px 16px;
  font-size: 30px;
  line-height: 1.33;
  border-radius: 200px;
  margin-bottom: 20px;
  margin-right: 20px;
}

</style>
