var Greeter = React.createClass({

  getDefaultProps: function(){
    return{
      name:'React',
      message: 'Something Something Something Something Something '
    };
  },
  render: function(){
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var firstName = "Chetan";
var message = "Hello Every one this is React"
ReactDOM.render(
    <Greeter name={firstName} message={message}/>,
     document.getElementById('app')
);
