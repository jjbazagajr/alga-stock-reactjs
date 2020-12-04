import React from 'react';

class ClassComponent extends React.Component<{ name: string }> {
  constructor(props: any) {
    super(props);
    console.log('Contructor!');
  }

  state = {
    name: 'Mundo',
    teste: 'teste'
  }

  componentDidMount() {
    console.log('did mount')
  }

  componentDidUpdate() {
    console.log('did update')
  }

  render() {
    console.log('render!')
    return (
      <div>
        <p>name: {this.state.name}</p>
        <p>teste: {this.state.teste}</p>
        <button onClick={() => {
          this.setState({name: 'Jorge'});
        }}>Click-me</button>
      </div>
    );
  }
}

export default ClassComponent;