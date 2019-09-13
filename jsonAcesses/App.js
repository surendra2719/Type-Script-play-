import React, { Component } from "react";
// import CSVReader from "react-csv-reader";
import { ExcelRenderer } from 'react-excel-renderer';
import { Table, Upload, message, Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      finalData: [],
      selectedRowKeys: [],
      invalidHeder: false,
      dataFound: false,
      filteredInfo: null,
    sortedInfo: null,
    };
    this.editedData = params => {
      console.log(params);
    };
  }
  // handleForce = data => {
  //    var keys = data.shift(),
  //     i = 0, k = 0,
  //     obj = null,
  //     output = [];
  //   var keyData = keys.includes("")
  //   if (keyData === false) {
  //     for (i = 0; i < data.length; i++) {
  //       obj = {};
  //      for (k = 0; k < keys.length; k++) {
  //         if (data[i][k] !== undefined && data[i][k] !== '') {
  //           obj[keys[k]] = data[i][k];
  //         }
  //       }
  //       if (Object.values(obj).length !== 0) {
  //         output.push(obj);
  //       }
  //     }
  //     var datas = output
  //     console.log("Final output data _______ array of objects", datas);
  //     if (datas.length > 0) {
  //       this.setState({
  //         finalData: datas,
  //         dataFound:true,
  //         invalidHeder: false
  //       })
  //     }
  //   }
  //   else if (keyData === true) {
  //     this.setState({
  //       invalidHeder: true,
  //       dataFound:false
  //     }
  //     )
  //   }
  // };
  fileHandler = (event) => {



    let fileObj = event.target.files[0];
    //just pass the fileObj as parameter

    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log(resp.rows);


        var keys = resp.rows.shift(),
          i = 0, k = 0,
          obj = null,
          output = [];
        var keyData = keys.includes("")
        console.log('keyData', keyData);

        if (keyData === false) {
          for (i = 0; i < resp.rows.length; i++) {
            obj = {};
            for (k = 0; k < keys.length; k++) {
              if (resp.rows[i][k] !== undefined && resp.rows[i][k] !== '') {
                obj[keys[k]] = resp.rows[i][k];
              }
            }
            if (Object.values(obj).length !== 0) {
              output.push(obj);
            }
          }
          var datas = output
          console.log("Final output data _______ array of objects", datas);
          this.setState({
            invalidHeder: true

          })
          if (datas.length > 0) {
            console.log("hjsdsh", datas)
            this.setState({
              finalData: datas,
              dataFound: true,
              invalidHeder: false
            })
          }
        }
        else if (keyData === true) {
          console.log("TRUE PART");
          this.setState({
            dataFound: false
          }
          )
        }
      }
    });
  }


  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
   



    const props = {

      name: 'file',
      accept: ".xlsx",
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',

      },

      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file.data, info.fileList);

        }
        if (info.file.status === 'done' && info.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {

          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };


    var columns = []
    const data = this.state.finalData;
    data.forEach(function (rec, index) {
      Object.keys(rec).forEach(function (key, keyIndex) {
        var obj = {};
        obj.title = key.toLocaleUpperCase();
        obj.dataIndex = key;
        obj.key = key;
        obj.editable = true
        var duplicate = chekDuplicate(key, columns);
        if (duplicate && Object.keys(duplicate).length > 0) {
          // do nothing
        } else {
          columns.push(obj);
        }
      })
    })
    function chekDuplicate(key, columns) {
      var found = columns.find(function (red) {
        return red.key === key;
      })
      return found;
    }


    var columns1 = [
      {
        title: 'CANDIDATE_NUMBER',
        dataIndex: 'CANDIDATE_NUMBER',
        key: 'CANDIDATE_NUMBER',
      },

      {
        title: 'START_TIME',
        dataIndex: 'START_TIME',
        key: 'START_TIME',
     
      },
      {
        title: 'END_TIME',
        dataIndex: 'END_TIME',
        key: 'END_TIME',
      },
      {
        title: 'SESSION_ID',
        dataIndex: 'SESSION_ID',
        key: 'SESSION_ID',
      },
      {
        title: 'SESSION_DATE',
        dataIndex: 'SESSION_DATE',
        key: 'SESSION_DATE',
      },
      {
        title: 'ORAL_SESSION',
        dataIndex: 'ORAL_SESSION',
        key: 'ORAL_SESSION',
      },
      {
        title: 'EXAMINER_NUMBER',
        dataIndex: 'EXAMINER_NUMBER',
        key: 'EXAMINER_NUMBER',
      },
      {
        title: 'EXAMINER_NAME',
        dataIndex: 'EXAMINER_NAME',
        key: 'EXAMINER_NAME',
      },
      {
        title: 'VENUE_ID',
        dataIndex: 'VENUE_ID',
        key: 'VENUE_ID',
      },
      {
        title: 'VENUE_NAME',
        dataIndex: 'VENUE_NAME',
        key: 'VENUE_NAME',
      },
      {
        title: 'VENUE_ID',
        dataIndex: 'VENUE_ID',
        key: 'VENUE_ID',
      },
      {
        title: 'CENTRE_ID',
        dataIndex: 'CENTRE_ID',
        key: 'CENTRE_ID',
      },
      {
        title: 'GIVEN_NAME',
        dataIndex: 'GIVEN_NAME',
        key: 'GIVEN_NAME',
      },
      {
        title: 'FAMILY_NAME',
        dataIndex: 'FAMILY_NAME',
        key: 'FAMILY_NAME',
      },
      {
        title: 'CANDIDATE_ID',
        dataIndex: 'CANDIDATE_ID',
        key: 'CANDIDATE_ID',
      },
      {
        title: 'DATE_OF_BIRTH',
        dataIndex: 'DATE_OF_BIRTH',
        key: 'DATE_OF_BIRTH',
      }, {
        title: 'FAMILY_NAME',
        dataIndex: 'FAMILY_NAME',
        key: 'FAMILY_NAME',
      }, {
        title: 'MODULE_TYPE',
        dataIndex: 'MODULE_TYPE',
        key: 'MODULE_TYPE',
      },
      {
        title: 'VENUE_ADD_1',
        dataIndex: 'VENUE_ADD_1',
        key: 'VENUE_ADD_1',
      },
      {
        title: 'VENUE_ADD_2',
        dataIndex: 'VENUE_ADD_2',
        key: 'VENUE_ADD_2',
      },
      {
        title: 'VENUE_ADD_3',
        dataIndex: 'VENUE_ADD_3',
        key: 'VENUE_ADD_3',
      },
      {
        title: 'VENUE_ADD_4',
        dataIndex: 'VENUE_ADD_4',
        key: 'VENUE_ADD_4',
      },
      {
        title: 'VENUE_ADD_5',
        dataIndex: 'VENUE_ADD_5',
        key: 'VENUE_ADD_5',
      },
      {
        title: 'VENUE_ADD_6',
        dataIndex: 'VENUE_ADD_6',
        key: 'VENUE_ADD_6',
      },
      {
        title: 'REFERNCE_NUMBER',
        dataIndex: 'REFERNCE_NUMBER',
        key: 'REFERNCE_NUMBER',
      }, {
        title: 'REGISTRATION',
        dataIndex: 'REGISTRATION',
        key: 'REGISTRATION',
      },

      //  var values ='CANDIDATE_NUMBER	START_TIME	END_TIME	SESSION_ID	SESSION_DATE	ORAL_SESSION	EXAMINER_NUMBER	EXAMINER_NAME	VENUE_ID	VENUE_NAME	CENTRE_ID	GIVEN_NAME	FAMILY_NAME	CANDIDATE_ID	DATE_OF_BIRTH	MODULE_TYPE	VENUE_ADD_1	VENUE_ADD_2	VENUE_ADD_3	VENUE_ADD_4	VENUE_ADD_5	VENUE_ADD_6	REFERNCE_NUMBER	REGISTRATION

    ]
    let { selectedRowKeys } = this.state;
    let rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
      <div>
        <h1>EXCEL DATA</h1>
        {this.state.dataFound === true &&
          <div className="form-section-content" style={{ display: "block" }}>
            <div style={{ marginBottom: 16 }}>
              <span style={{ marginLeft: 8 }}>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
              </span>
            </div>
            <Table rowKey="uid" rowSelection={rowSelection} columns={columns1} dataSource={data} />
          </div>
        }
        {/* <CSVReader
          cssClass={'react-csv-input'}
          onFileLoaded={this.handleForce}props
        //  label={'Upload csv'}
        >
        </CSVReader> */}
        <input type="file" onChange={this.fileHandler.bind(this)}
          ref={input => this.input = input} />
        <div>
           <Upload {...props}>
            <Button   >
              <Icon type="upload" /> Click to Upload
          </Button>
          </Upload>,</div>
        {
          this.state.invalidHeder === true &&
          <div style={{ color: "red" }}>Please provide valid data</div>
        }
      </div>
    );
  }
}

// background:#fff;
// width:300px;
// height:180px;
// font-size:20px;
// font-style:italic;
// border-radius:18px;
// border:2px dashed #444;
// }
// ,
// #uploadImage{
// visibility: hidden;
// height:0px;
// width: 0px;
// }
