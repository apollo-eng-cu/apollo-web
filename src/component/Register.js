import React, { Component } from 'react'

export default class Register extends Component {
  state =
    { data:
      { firstName: ''
      , lastName: ''
      , email: ''
      , telNum: ''
      , year: ''
      , sex: ''
      , sid: ''
      , plan: ''
      , howDoYouKnowUs: ''
      }
    , submission:
      { status: 'init' // init, error, requesting, success
      , errorMsg: []
      }
    }

  validation =
    { firstName:
      { pattern: /^.+$/
      , msg: 'ห้ามเว้นชื่อ'
      }
    , lastName:
      { pattern: /^.+$/
      , msg: 'ห้ามเว้นนามสกุล'
      }
    , email:
      { pattern: /^.+@.+\..+$/
      , msg: 'รูปแบบอีเมลไม่ถูกต้อง'
      }
    , telNum:
      { pattern: /^0\d{9}$/
      , msg: 'ต้องใส่เบอร์โทรศัพท์เป็นเลข 10 หลัก'
      }
    , year:
      { pattern: /^.+$/
      , msg: 'ห้ามเว้นชั้นปี'
      }
    , sex:
      { pattern: /^.+$/
      , msg: 'ห้ามเว้นเพศ'
      }
    , sid:
      { pattern: /^\d{10}$/
      , msg: 'ต้องใส่รหัสนิสิตเป็นเลข 10 หลัก'
      }
    , plan:
      { pattern: /^.+$/
      , msg: 'ห้ามเว้นแผนหลังจบปริญญาตรี'
      }
    , howDoYouKnowUs:
      { pattern: /^.+$/
      , msg: 'ห้ามเว้นสาเหตุที่คุณรู้จักเรา'
      }
    }

  submit() {
    const inputId =
      { firstName: 'entry.1547297553'
      , lastName: 'entry.1913925643'
      , email: 'entry.1501382030'
      , telNum: 'entry.1308805906'
      , year: 'entry.186170165'
      , sex: 'entry.616671974'
      , sid: 'entry.993297866'
      , plan: 'entry.1351716155'
      , howDoYouKnowUs: 'entry.270307210'
      }

    const data = this.state.data;

    const errorMsg =
      Object.keys(this.validation)
        .filter(target =>
          !this.validation[target].pattern.test(data[target]))
        .map(target => this.validation[target].msg );

    const status = errorMsg.length === 0 ? 'requesting' : 'error';

    this.setState({ submission: { status, errorMsg } });

    if(status === 'requesting') {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/form', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');

      const mappedData = Object.keys(data)
        .map(key => `${inputId[key]}=${encodeURI(data[key])}`)
        .join('&');

      xhr.send(mappedData);

      xhr.onreadystatechange = function() {
          if(xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200) {
              this.setState({ submission: { status: 'success', errorMsg } });
            } else {
              this.setState({ submission:
                { status: 'error', errorMsg: ['ระบบขัดข้อง'] }});
            }
          }
      }.bind(this);
    }
  }

  update(ref, event) {
    const updatedData =
      Object.assign({}, this.state.data, { [ref]: event.target.value });
    this.setState({ data: updatedData });
  }

  render() {
    return (
      <section className="hero is-fullheight" id="register">
      <div className="hero-body">
        <div className="container">
          <div className="content">
            <h1>ลงทะเบียน</h1>
          </div>

          <div className="columns">
            <TextInput
              label="ชื่อ"
              update={this.update.bind(this, 'firstName')} />
            <TextInput
              label="นามสกุล"
              update={this.update.bind(this, 'lastName')} />
          </div>

          <div className="columns">
            <TextInput
              label="อีเมล"
              update={this.update.bind(this, 'email')} />
            <TextInput
              label="เบอร์โทรศัพท์"
              update={this.update.bind(this, 'telNum')} />
          </div>

          <div className="columns">
            <SelectInput
              label="ชั้นปี" options={[1,2,3,4,5,6,7]}
              update={this.update.bind(this, 'year')} />
            <SelectInput
              label="เพศ"
              options={['ชาย', 'หญิง']}
              update={this.update.bind(this, 'sex')} />
            <TextInput
              label="รหัสนิสิต"
              update={this.update.bind(this, 'sid')} />
          </div>

          <div className="columns">
            <SelectInput
              label="คุณวางแผนจะทำอะไรหลังเรียนจบระดับปริญญาตรี" options={['ทำงาน', 'เรียนต่อ', 'ยังไม่แน่ใจ']}
              update={this.update.bind(this, 'plan')} />
            <SelectInput
              label="คุณรู้จักเราจากไหน"
              options={
                [ 'Facebook เพจ Apollo'
                , 'Facebook เพจ กวศ'
                , 'Facebook เพจ Chula Engineering'
                , 'Line Chula Engineering'
                , 'โปสเตอร์ในคณะ'
                , 'กรุ๊ป Facebook ของรุ่น'
                , 'เพื่อน']}
              update={this.update.bind(this, 'howDoYouKnowUs')} />
          </div>

          {(() => {
            if(this.state.submission.status === 'error') {
              return (
                <div className="notification is-danger">
                  <p>{this.state.submission.errorMsg.join(', ')}</p>
                </div>
              );
            } else if(this.state.submission.status === 'success') {
              return (
                <div className="notification is-success">
                  <p>ลงทะเบียนเรียบร้อย โปรดรอการติดต่อกลับเพื่อยืนยันจากทีมงาน</p>
                </div>
              );
            } else {
              return (<div></div>);
            }
          })()
          }

          <div className="has-text-centered">
              <br />
              <button
                className={'button is-primary is-medium ' + (
                  () => {
                    switch (this.state.submission.status) {
                      case 'success': return 'is-disabled'
                      case 'requesting': return 'is-loading'
                      default: return ''
                    }
                  })()}
                onClick={this.submit.bind(this)} >
                ลงทะเบียน
              </button>
          </div>

        </div>
        </div>
      </section>
    );
  }
}

class TextInput extends Component {
  render() {
    return (
      <div className="column">
        <label className="label">{this.props.label}</label>
        <p className="control">
          <input
            className="input"
            type="text"
            onChange={this.props.update}/>
        </p>
      </div>
    );
  }
}

class SelectInput extends Component {
  render() {
    return (
      <div className="column">
        <label className="label">{this.props.label}</label>
        <span className="select">
          <select onChange={this.props.update}>
            {[null].concat(this.props.options).map(val =>
              <option key={val} value={val}>{val}</option> )}
          </select>
        </span>
      </div>
    );
  }
}
