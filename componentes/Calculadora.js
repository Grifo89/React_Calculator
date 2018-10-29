import React, { Component } from 'react';

class Calculadora extends Component{
  state = {
    res:''
  }
  onDigit = (digit)=>{
    const expresion = this.state.res + digit;
    this.setState({res: expresion});
  }
  //<a className='waves-effect waves-light btn-large' onClick={()=> this.setState({res:"0"})}>0</a>
  ejecutar = () =>{
    const resultados = eval(this.state.res)
    this.setState({res:resultados})
  }
  render(){
    return(
      <div>
        <div className='resultado z-depth-3 light-blue lighten-2 white-text center-align'>
          {this.state.res || '0'}
        </div>
        <div className='calc-container  hoverable z-depth-2  col s12 m6'>
          <div>
            {
              ['0','1','2','3','4','5','6','7','8','9','.'].map(digit =>{
                return (
                  <a
                    key={digit}
                    className='waves-effect waves-light btn-large'
                    onClick={()=> this.onDigit(digit)}>
                    {digit}
                  </a>
                )
              })
            }
          </div>
          <div className='operadores center-align'>
            {
              ['+','-','/','*'].map(digit => {
                return(
                  <a
                    key={digit}
                    className='waves-effect waves-light amber darken-4 btn-large'
                    onClick={()=> this.onDigit(digit)}>
                    {digit}
                  </a>
                )
              })
            }
            <a
              className='waves-effect waves-light amber darken-4 btn-large'
              onClick={()=> this.setState({res:''})}>
              C
            </a>
          </div>
          <a
            className='waves-effect waves-light amber darken-4 btn-large enter'
            onClick={this.ejecutar}>
            =
          </a>
        </div>
        <style jsx>{
          `
            .resultado{
              width:300px;
              margin: 0 auto;
              font-size: 32px;
              margin-bottom: 10px;
              border-radius: 25px;
            }
            .calc-container{
              width: 20em;
              text-align: center;
              margin: 0 auto;
              border: 2px;
              border-radius: 25px;

            }
            .calc-container a{
              margin: 5px;
              font-size: 20px;
              border-radius: 25px;
            }
            .operadores{
              padding: 10px;
              border:3px solid #ccc;
              margin-top:20px;
              border-radius: 25px;
            }
            .enter{
              width:250px;
              font-size: 32px;
              border-radius: 25px;
            }
          `
        }
        </style>
      </div>
    )
  }
}

export default Calculadora;
