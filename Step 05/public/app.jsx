var GreeterMessage = React.createClass({
  
    render : function(){
       var name = this.props.name;
       var message = this.props.message;
       
        return(
        <div>
            <h1>Hello {name}!!</h1>
            <p>{message}</p>
        </div>
       );
   }
    
});

var GreeterForm = React.createClass({
   
    onButtonClicked: function(event){
       
        event.preventDefault(); 
        
        var nameRef = this.refs.name;
        var name = nameRef.value;
        nameRef.value = '';
        
        if(typeof name === 'string' && name.length > 0){
            
            this.props.onHandle(name)
        
        }
    },
    
    render: function(){
        
        return (
            <div>
                <form onSubmit={this.onButtonClicked}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
            </div>
        );
    }
});

var Greeter = React.createClass({

  getDefaultProps: function(){
    return{
      name:'React',
      message: 'Something Something Something Something Something '
    };
  },

  getInitialState : function(){
    
      return{
          name: this.props.name
      };
  },

  onhandleName: function(name){
    this.setState({
       name: name 
    });
  },
  
   render: function(){
    
    var name = this.state.name;
    var message = this.props.message;
    
    return (
     
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onHandle={this.onhandleName}/> 
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
