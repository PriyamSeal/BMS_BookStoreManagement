package com.bootcamp.bookstoremanagement.exception;

public class BookNotFoundException extends RuntimeException {

	public BookNotFoundException(String message) {
		super(message);
	}

}
