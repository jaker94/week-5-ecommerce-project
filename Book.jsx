import React from 'react';
import { books } from '../../data';

const Book = ({ book}) => {
    return (
        <div>
            <div className="book">
                            <a href="">
                                <figure className="book__img--wrapper">
                                    <img src={book.url} alt="" />
                                </figure>
                            </a>
                            <div className="book__title">
                                <a href="/" className="book__title--link">
                                   {book.title}
                                </a>
                            </div>
                            <div className="book__ratings"> 
                               {book.rating}
                            </div>
                            <div className="book__price">
                                {
                                    book.salePrice ? (
                                    <>
                                    <span className="book__price--normal">${book.originalPrice.toFixed(2)}</span>
                                    ${book.salePrice.toFixed(2)}
                                    </>
                                    ) : (
                                        <>${book.originalPrice}</>
                                    )}
                                
                            </div>
                        </div>
        </div>
    );
}

export default Book;
