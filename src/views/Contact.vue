<template>
  <br />
  <div class="container-contact">
    <div class="container">
      <div class="container header w3-animate-bottom">
        <h2 style="text-transform: uppercase; padding: 20px" id="title-c">
          CONTACT
        </h2>
      </div>

      <div class="w3-container w3-center w3-animate-left">
        <div class="fifa" id="fd-mo">
          <h4 id="title-name">Akarin Sangyor | Back End Developer</h4>
          <ul id="list-1">
            <li>
              <img id="img-fifa" src="../assets/fifa.png" />
              <h4
                style="
                  text-decoration: underline;
                  text-underline-offset: 2px;
                  color: deepskyblue;
                "
              >
                ข้อมูลส่วนตัว
              </h4>
              <h5>นายเอกรินทร์ แสงยอ</h5>
              <h5>อายุ 21 ปี นักศึกษาชั้นปีที่ 3</h5>
              <h5>สาขาวิทยาการคอมพิวเตอร์</h5>
              <h5>มหาวิทยาลัยแม่โจ้เชียงใหม่</h5>
              
            </li>
            <div></div>

            <div>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100012605943726"
                  ><i
                    class="fa fa-facebook-square"
                    style="font-size: 2vw; color: #282828"
                  ></i>
                  <p>Facebook</p></a
                >
                <a href="https://github.com/fainwza007"
                  ><i
                    class="fa fa-github"
                    style="font-size: 2vw; color: #282828"
                  ></i>
                  <p>Github</p></a
                >

                <a
                  ><i class="fa fa-phone" style="font-size: 2vw"></i>
                  <p>095-5492016</p></a
                >
                <a href="https://www.linkedin.com/in/akarin-sangyor-112282258/"
                  ><i class="fa fa-linkedin-square" style="font-size: 2vw"></i>
                  <p>Linkedin</p></a
                >

                <a href="mailto:akarin.sangyor@gmail.com"
                  ><i class="fa fa-google" style="font-size: 2vw"></i>
                  <p>Gmail</p></a
                >
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div class="w3-container w3-center w3-animate-right">
        <div class="fifa" id="fd-mo">
          <h4 id="title-name">Suphachai Rotrit | Font End Developer</h4>
          <ul id="list-1">
            <div>
              <li>
                <div>
                  <a href="https://www.facebook.com/SuppachaiRodrid.username/"
                    ><i
                      class="fa fa-facebook-square"
                      style="font-size: 2vw; color: #282828"
                    ></i>
                    <p>Facebook</p></a
                  >

                  <a href="https://github.com/RogueSyntax"
                    ><i
                      class="fa fa-github"
                      style="font-size: 2vw; color: #282828"
                    ></i>
                    <p>Github</p></a
                  >

                  <a
                    ><i class="fa fa-phone" style="font-size: 2vw"></i>
                    <p>095-2058894</p></a
                  >
                  <a
                    href="https://www.linkedin.com/in/suphachai-rotrit-ba5b16258/"
                    ><i
                      class="fa fa-linkedin-square"
                      style="font-size: 2vw"
                    ></i>
                    <p>linkedin</p></a
                  >
                  <a href="mailto:suphachairotrit@gmail.com"
                    ><i class="fa fa-google" style="font-size: 2vw"></i>
                    <p>Gmail</p></a
                  >
                </div>
              </li>
            </div>

            <div>
              <li>
                <div>
                  <h4
                    style="
                      text-decoration: underline;
                      text-underline-offset: 2px;
                      color: deepskyblue;
                    "
                  >
                    ข้อมูลส่วนตัว
                  </h4>
                  <h5>นายศุภชัย รอดฤทธิ์</h5>
                  <h5>อายุ 21 ปี นักศึกษาชั้นปีที่ 3</h5>
                  <h5>สาขาวิทยาการคอมพิวเตอร์</h5>
                  <h5>มหาวิทยาลัยแม่โจ้เชียงใหม่</h5>
                  <img id="img-fifa" src="../assets/dew.png" />
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  text-decoration: none;
  color: #000;
}
@media screen and (max-width: 991px) {
  #img-fifa {
    width: 20vw;
    padding: 20px;
  }
  
}
@media screen and (max-width: 476px) {

  li h5 {
    font-size: 1vw;
  }

  li p {
    font-size: 1vw;
  }

  li h4 {
    font-size: 1vw;
  }

  a i {
    font-size: 15px;
  }

  #fd-mo {
    margin: 0;
  }

  #title-name {
    font-size: 12px;
  }

  #title-c {
    font-size: 20px;
  }
}

#list-1 {
  columns: 3;
  column-gap: 1px;
  text-decoration: none;
  list-style-type: none;
  padding: 30px;
}

.fifa {
  box-shadow: 0px 4px 15px rgba(71, 74, 74, 0.385);
  text-decoration: none;
  list-style-type: none;
  border-radius: 50px;
  margin: 30px;
}
.fifa h4 {
  padding: 20px;
}
#img-fifa {
  width: 24vw;
  padding: 20px;
}
#img-dew {
  width: 15vw;
  padding: 20px;
}

.dew h4 {
  padding: 20px;
}

.dew {
  padding: 20px;
  box-shadow: 0px 4px 15px rgba(71, 74, 74, 0.385);
  text-decoration: none;
  list-style-type: none;
  border-radius: 50px;
  margin: 30px;
}
</style>