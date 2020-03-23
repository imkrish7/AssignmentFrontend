import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const ModalRoot = document.getElementById('modal-root');
class Modal extends Component{

	constructor(props){
		super(props);
		this.el = document.createElement('div');
	}

	componentDidMount(){
		ModalRoot.appendChild(this.el);
	}

	componentWillUnmount(){
		ModalRoot.removeChild(this.el);
	}

	render(){
		return ReactDOM.createPortal(this.props.children, this.el);
	}
}

export default Modal;