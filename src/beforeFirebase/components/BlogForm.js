import React, { Component } from 'react'

//Buradaki state sadece bu component'e özeldir. Buradaki bilgileri, ayrı bir redux state içerisinde oluşturduğumuz ve bütün component'lerin kullanabilecek olduğu state bilgilerinden bağımsız olarak çalışacağı için redux state içerisinde tanımlamaya gerek yoktur. 
export default class BlogForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: props.blog ? props.blog.title : '',
      description: props.blog ? props.blog.description : '',
      error: ''
    }
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.description) {
      this.setState({ error: 'Bilgileri tam giriniz...' });
      setTimeout(() => {
        this.setState({ error: '' });
      }, 3000)

    } else {
      this.setState({ error: '' });
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        dateAdded: Date.now()
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p className='error'>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <div className='input'>
            <input
              placeholder="Enter title"
              value={this.state.title}
              onChange={this.onTitleChange}
            />
          </div>
          <div>
            <textarea
              placeholder="Enter description"
              value={this.state.description}
              onChange={this.onDescriptionChange}
            ></textarea>
          </div>
          <div>
            <button type="submit" className='saveButton'>Save Changes</button>
          </div>
        </form>
      </div>
    )
  }
}
