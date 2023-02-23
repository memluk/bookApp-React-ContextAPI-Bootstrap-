import "./book.css";
import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Book extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(contextTheme) => {
          const { isDarkTheme, dark, light } = contextTheme;
          const theme = isDarkTheme ? dark : light;

          return (
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="book-item">

                <a className="book-link" data-bs-toggle="modal" href="#bookshelf" >
                  <div className="book-hover" style={{background:theme.hover}}>
                    <div className="book-hover-content"> <i className="fas fa-plus fa-3x"></i> </div>
                  </div>
                  <img className="img-fluid" src={`${this.props.book.imageURL}`} alt="Book Cover" style={{width:'100%'}} />
                </a>

                <div className="book-caption">
                  <div className="book-caption-heading">
                    <p><b>{this.props.book.title}</b></p>
                  </div>

                  <div className="book-caption-subheading text-muted">
                    <p><b>{this.props.book.author}</b></p>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Book;
