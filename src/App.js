import React from 'react';

class App extends React.Component {
  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      image: 'https://restcountries.eu/data/ind.svg',
      text: 'India'
    }
  }

  componentDidMount = () => {
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then((response) => response.json())
    .then((data) => { this.setState({ data }) })
    .catch((e) => { console.log(e) })
  }

  handleOnClick = (e) => {
    console.log(e);
    console.log(e.target.children[0].src);
    this.setState({ image: e.target.children[0].src });
    console.log(e.target.innerText);
    this.setState({ text: e.target.innerText })
    document.getElementById('countries').style.display = "none";
  }

  onClick = (e) => {
    console.log(e);
    document.getElementById('countries').style.display = "";
  }

  render() {

    const ulStyle = {
      overflowY: 'scroll',
      width: '346px',
      height: '68px',
      padding: '6px',
      margin: '0px',
      border: '1px solid #ddd',
      display:'none',
      top: '0px',
      position: 'relative',
      borderRadius: '6px',
      background: 'rgb(249, 247, 247)'
    };

    const divStyle = {
      border: '1px solid #ddd',
      width: '342px',
      padding: '6px',
      borderRadius: '6px',
      position: 'absolute',
    };

    const fontStyle = {
      fontSize:'18px',
      fontStyle: 'normal',
      float:'right'
    };

    const imageStyle = {
      marginRight:'8px'
    };

    return (
      <div>
        <div onClick={this.onClick} style={divStyle}>
          <img alt="" style={imageStyle} src={this.state.image} height="10" width="14" />
          <span>{this.state.text}</span>
          <i class="fa fa-angle-down" style={fontStyle}></i>
        </div>
        <ul id="countries" style={ulStyle}>
        {
          this.state.data.map((item, index) => {
            return (
              <li key={index} style={{ listStyleType: "none",padding:'4px' }} onClick={this.handleOnClick}>
                <img style={imageStyle} alt="" src={item.flag} height="10" width="14" />
                 {item.name}
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}

export default App;
