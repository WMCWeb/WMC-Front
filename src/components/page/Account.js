import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }  
  
  
  state = {
        maxNo: 1,
        TTM: [],
        boards: [
          
        ],
        selectBoard:{}
    }
    
    handleSaveData = (data) => {
      if (!data.ID) {
          this.setState({
              maxNo: this.state.maxNo+1,
              TTM: this.state.TTM * 1 + data.Input * 1 - data.Output * 1,
              boards: this.state.boards.concat({ID: this.state.maxNo, Date: new Date(), Category: data.Category, Input: data.Input, Output: data.Output, Script: data.Script, Total: this.state.TTM * 1}),
              selectedBoard: {}
          });
      } else {
          this.setState({
              boards: this.state.boards.map(row => data.ID === row.ID ? {...data }: row),
              selectedBoard: {}
          })            
      }
    }


    handleSelectRow = (row) => {
      this.setState({selectedBoard:row});
    }
  
    render() {
        const { boards, selectedBoard } = this.state;
        
        return(
          <div>
            <BoardForm selectedBoard={selectedBoard} onSaveData={this.handleSaveData} ref={this.child} />
            <table>
              <tbody>
              <tr align="center">
                <td width="50">ID</td>
                <td width="100">Date</td>
                <td width="200">Category</td>
                <td width="100">Input</td>
                <td width="100">Output</td>
                <td width="500">Script</td>
                <td width="100">Total</td>
              </tr>
              {
                boards.map(row =>
                  (<BoardItem key={row.ID} row={row} onSelectRow={this.handleSelectRow}/>)
                  )
              }
              </tbody>
            </table>
          </div>
        );
    }
}


/* 내용추가 */
class BoardForm extends Component {
  state = {
    Category:'',
    Input:'',
    Output:'',
    Script:'',
    Total:''
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSelectRow = (row) => {
    this.setState(row);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSaveData(this.state);
    this.setState({
      ID:'',
      Category:'',
      Input:'',
      Output:'',
      Total: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="카테고리" name="Category" onChange={this.handleChange}/>
        <input placeholder="입금" name="Input" onChange={this.handleChange}/>
        <input placeholder="출금" name="Output" onChange={this.handleChange}/>
        <input placeholder="설명" name="Script" onChange={this.handleChange}/>
        <button type="submit">저장</button>
      </form>
    )
  }

}


/* 내용 */
class BoardItem extends React.Component {
  handleSelectRow = () => {
    const { row, onSelectRow } = this.props;
    onSelectRow(row);
  }
  render() {
    console.log(this.props.row.ID);
    return(
      <tr>
        <td>{this.props.row.ID}</td>
        <td>{this.props.row.Date.toLocaleDateString('ko-KR')}</td>
        <td>{this.props.row.Category}</td>
        <td>{this.props.row.Input}</td>
        <td>{this.props.row.Output}</td>
        <td>{this.props.row.Script}</td>
        <td>{this.props.row.Total}</td>
      </tr>
    );
  }
}

export default App;
