
var UserName = React.createClass({

    render: function(){
       var name = this.props.name;
       var message = this.props.message;
        return(
            <div>
                <h1>Hello {name} !!</h1>
                <h4>{message}</h4>
            </div>
        );
    }
});

var MyForm = React.createClass({
   
    onButtonClicked: function(event){
      event.preventDefault();
       
        var update = {}
        //Name
        var nameRef = this.refs.name;
        var name    = nameRef.value;
        nameRef.value = '';
        
        if(typeof name === 'string' && name.length > 0){
           update.name = name
        }
        
        //Message
        var messageRef = this.refs.message;
        var message    = messageRef.value;
        
        messageRef.value = '';
        
        if( typeof message === 'string' && message.length > 0){
           update.message = message
        }
        
        this.props.onHandle(update)
        
    },
    
    render: function(){
        return(
            
            <div>
                <form onSubmit={this.onButtonClicked}>
                    <input type="text" ref="name" placeholder="Enter Name"></input><br></br>
                    <textarea ref="message" placeholder="Enter Message"></textarea>
                    <button>Click</button>
                </form>
            </div>
        );
    }
    
});  
      
var Main = React.createClass({
    
    getDefaultProps: function(){
      
        return{
            name: "Vijay",
            message:"Something Something"
        };
    },
    
    getInitialState: function(){
      
        return{
            name : this.props.name ,
            message : this.props.message
        };
    },
    
    onButtonHandle : function(update){
        this.setState(update)
    },
    render: function(){
       var name = this.state.name;
       var message = this.state.message;
        return(
           <div>
                <UserName name={name} message={message}/> 
                <MyForm onHandle={this.onButtonHandle}/>
           </div>
        );
    }
});

var firstName = "Chetan";
var message = "Hello Every one this is React"

ReactDOM.render(
    <Main  name={firstName} message={message}/>,
     document.getElementById('app')
);
