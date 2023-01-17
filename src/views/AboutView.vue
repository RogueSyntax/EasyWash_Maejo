<template>
  <br />
  <div class="container-about">
    <div class="container header w3-animate-right">
      <h2 style="text-transform: uppercase; padding: 20px">About</h2>
    </div>
    <div class="about">
      <div class="container card w3-animate-zoom" id="about">
        <h3 style="text-align: center">ขั้นตอนการใช้งานเครื่องซักผ้า</h3>
        <p style="text-align: center; margin:10px;">สแกน QR Code เพื่อเข้ากลุ่มไลน์ <br>หรือคลิกลิงค์</p><a href="https://line.me/R/ti/g/VNAix5mHOg">https://line.me/R/ti/g/VNAix5mHOg</a>
        <div><img src="../assets/Qrcode.jpg" ></div>
        
        <br />
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-howto1-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-howto1"
              type="button"
              role="tab"
              aria-controls="nav-howto1"
              aria-selected="true"
            >
              ขั้นตอนที่ 1
            </button>

            <button
              class="nav-link"
              id="nav-howto2-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-howto2"
              type="button"
              role="tab"
              aria-controls="nav-howto2"
              aria-selected="false"
            >
              ขั้นตอนที่ 2
            </button>

            <button
              class="nav-link"
              id="nav-howto3-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-howto3"
              type="button"
              role="tab"
              aria-controls="nav-howto3"
              aria-selected="false"
            >
              ขั้นตอนที่ 3
            </button>
            <button
              class="nav-link"
              id="nav-howto4-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-howto4"
              type="button"
              role="tab"
              aria-controls="nav-howto4"
              aria-selected="false"
            >
              ขั้นตอนที่ 4
            </button>
            <button
              class="nav-link"
              id="nav-howto5-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-howto5"
              type="button"
              role="tab"
              aria-controls="nav-howto5"
              aria-selected="false"
            >
              ขั้นตอนที่ 5
            </button>
          </div>
        </nav>

        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-howto1"
            role="tabpanel"
            aria-labelledby="nav-howto1-tab"
            tabindex="0"
          >
            <div>
              <h5>ขั้นตอนที่ 1</h5>
              <p>
                เลือกเครื่องที่จะใช้งาน โดยทางร้านมีเครื่อง อยู่ 4 เครื่อง |
                เครื่องหมายเลข 001 | เครื่องหมายเลข 002 | เครื่องหมายเลข 003 |
                เครื่องหมายเลข 004
              </p>
              <div>
                <img id="howto1" src="../assets/Howto1.jpg" />
                <img id="howto1" src="../assets/Howto1.2.jpg" />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-howto2"
            role="tabpanel"
            aria-labelledby="nav-howto2-tab"
            tabindex="0"
          >
            <div style="text-align: center">
              <h5>ขั้นตอนที่ 2</h5>

              <p>
                กดหยอดเหรียญ โดย 1 เหรียญจะเท่ากับ 5 นาที | 
              </p><p style="color:red;">หมายเหตุ:(1 เหรียญเท่ากับ 10 บาท) หยอดได้สูงสุด 6 เหรียญ</p>
              <div><img id="howto2" src="../assets/HowTo222.png" /></div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-howto3"
            role="tabpanel"
            aria-labelledby="nav-howto3-tab"
            tabindex="0"
          >
            <div>
              <h5>ขั้นตอนที่ 3</h5>
              <p>กดปุ่ม กดใช้งาน เพื่อทำการเริ่มซักผ้าได้เลย</p>
              <div><img id="howto3" src="../assets/HowTo33.jpg" /></div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-howto4"
            role="tabpanel"
            aria-labelledby="nav-howto4-tab"
            tabindex="0"
          >
            <div>
              <h5>ขั้นตอนที่ 4</h5>
              <p>กรุณารอ... เครื่องกำลังทำการซักผ้าให้คุณ</p>
              <div><img id="howto4" src="../assets/Howto44.jpg" /></div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-howto5"
            role="tabpanel"
            aria-labelledby="nav-howto5-tab"
            tabindex="0"
          >
            <div>
              <h5>ขั้นตอนที่ 5</h5>
              <p>
                หลังจากเวลาเหลือไม่ถึง 1 นาที ระบบจะทำการแจ้งเตือนเข้ากลุ่ม Line
                Group ของทางร้าน
              </p>
              <div><img id="howto5" src="../assets/Howto5.jpg" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br /><br />
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
.qrCode{
  width: 10vw;
  justify-content: center;
  align-items: center;
  display: flex;

}
#howto1 {
  width: 60vw;
  height: auto;
  justify-content: center;
  align-items: center;
}
#howto2 {
  width: 75%;
  justify-content: center;
  align-items: center;
}
#howto3 {
  width: 27vw;
  justify-content: center;
  align-items: center;
}

#howto4 {
  width: 27vw;
  justify-content: center;
  align-items: center;
}

#howto5 {
  width: 25vw;
  margin: 10px;
}

@media screen and (max-width: 415px) {
  #howto1 {
    width: 100vw;
    height: auto;
    justify-content: center;
    align-items: center;
  }
  #howto2 {
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
  #howto3 {
    width: 80vw;
    justify-content: center;
    align-items: center;
  }

  #howto4 {
    width: 80vw;
    justify-content: center;
    align-items: center;
  }
  #howto5 {
    width: 60vw;
  }
}

@media screen and (max-height: 412px) {
  #howto1 {
    width: 30vw;
    height: auto;
    justify-content: center;
    align-items: center;
  }
}
.container-about {
  background-color: rgb(255, 255, 255);
  width: 100%;
}

#nav-tab {
  justify-content: center;
}

#nav-tabContent {
  display: flex;
  justify-content: center;
}
h5 {
  text-align: center;
  padding: 10px;
}
</style>
