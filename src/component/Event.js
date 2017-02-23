import React from 'react'

const Event = () => (
  <section id="event">
    <div className="container content">
      <h2>Apollo Event #3</h2>
      <h1>"งานแรกต้องทำไง...งานไหนถึงจะดี ?"</h1>
      <h3>วันศุกร์ที่ 10 มีนาคม 2560</h3>
      <h3>เวลา 16.15 ถึง 19.00 น. ณ ห้อง 202 อาคาร วิศวฯ 100 ปี</h3>
      <ul>
        <li>ร่วมฟังประสบการณ์จริงของรุ่นพี่จากบริษัทหลากหลายประเภท</li>
        <li>เหตุผลเบื้องหลังในการตัดสินใจเลือกทางเดินชีวิตคืออะไร?</li>
        <li>ความสำคัญของงานแรก และสิ่งที่ควรเตรียมพร้อม</li>
        <li>Career Value Worksheet ฉบับประยุกต์จาก Workshop ของ <br/>
            Richard Knowdell เพื่อค้นหารูปแบบการทำงานที่เหมาะสมกับตัวตนของคุณ !</li>
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
