import React, { Component } from 'react'

//Buradaki state sadece bu component'e özeldir. Buradaki bilgileri, ayrı bir redux state içerisinde oluşturduğumuz ve bütün component'lerin kullanabilecek olduğu state bilgilerinden bağımsız olarak çalışacağı için redux state içerisinde tanımlamaya gerek yoktur. 
export default class BlogForm extends Component {
  state = {
    title: '',
    description: ''
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  render() {
    return (
      <div>
        <form>
          <div>
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
            <button>Save Changes</button>
          </div>
        </form>
      </div>
    )
  }
}
