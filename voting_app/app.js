// React.createClass is the function to create components 
// render is the key and it's value is an anonymous function that vanilla JS
const ProductList = React.createClass({ render: function () {
return (
<div className='ui items'>
        Hello, friend! I am a basic React component.
      </div>
); },
});

ReactDOM.render(<ProductList />, document.getElementById('content'));
