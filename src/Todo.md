
## Nice to do's :

Pass along if mouse enter a div and propgate that to hide player :

React allows to add / remove elements from the virtual DOM. Use the onMouseEnter and onMouseLeave to set show / hide state.

<img 
  onMouseEnter={() => this.setState({ show: true })}
  onMouseLeave={() => this.setState({ show: false })} 
/>
Then show / hide details based on the state:

{this.state.show ? 
    <div ref= "productDetails" id ="portfolio-product-item-details"   
         dangerouslySetInnerHTML={{__html: this.props.data[i].content.rendered}}
    />
: null}