import React, { Component } from "react";
import CSVReader from "react-csv-reader";
import { Table, Divider, Tag } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      finalData: []
    };
    this.editedData = params => {
      console.log(params);
    };
  }
  // componentDidMount() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/photos")
  //     .then(res => {
  //       console.log(this.setState({ data: res.data }));
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }
handleForce = data => {
    console.log(data);
    var keys = data.shift(),
    i = 0, k = 0,
    obj = null,
    output = [];
    for (i = 0; i < data.length; i++) {
      obj = {};
      for (k = 0; k < keys.length; k++) {
          obj[keys[k]] = data[i][k];
      }

      output.push(obj);
      
  }
    this.setState({ finalData: output })
  };
  
  render() {
    const columns = [
      {
        title: 'First Name',
        dataIndex: 'firstname',
        key: 'firstname',
      
      },
      {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
      },
      {
        title: 'Mail',
        dataIndex: 'mail',
        key: 'mail',
      },
    
    
    ];
    const data = this.state.finalData    
    return (
      <div>
        <h1>React Table</h1>

        <Table columns={columns} dataSource={data} />
        <CSVReader
        cssClass="react-csv-input"
        label="Upload csv"
        onFileLoaded={this.handleForce}
      />
      </div>
    );
  }
}