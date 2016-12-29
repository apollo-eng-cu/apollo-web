import React from 'react'

const Event = () => (
  <section id="event">
    <div className="container content">
      <h2>Apollo Event #2</h2>
      <h1>"จบแล้ว...ไงต่อ ?"</h1>
      <h3>วันที่ 12 มกราคม 2560</h3>
      <h3>เวลา 16.15 ถึง 18.30 น. ณ คณะวิศวกรรมศาสตร์ จุฬาฯ</h3>
      <ul>
        <li>เปิดประสบการณ์จริงจากรุ่นพี่หลากหลายวิชาชีพ</li>
        <li>จบวิศวฯ ทำอะไรได้บ้าง ?</li>
        <li>ก้าวแรกหลังจากรั้วมหาลัยเป็นอย่างไร ?</li>
        <li>เหตุผลเบื้องหลังในการตัดสินใจเลือกทางเดินชีวิตคืออะไร ?</li>
        <li>ร่วมหาคำตอบที่ใช่ให้กับตัวคุณ!</li>
      </ul>

      <a href="#register" data-scroll>
        <h2 className="is-yellow">
          <b>ลงทะเบียนได้แล้ววันนี้ ด่วน! เปิดรับจำนวนจำกัด</b>
        </h2>
      </a>
    </div>
  </section>
);

export default Event
