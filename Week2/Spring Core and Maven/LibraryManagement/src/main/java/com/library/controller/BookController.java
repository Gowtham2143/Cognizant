package com.library.controller;

import com.library.service.BookService;

public class BookController {

    private BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    public void execute() {
        System.out.println("Book Controller: Processing request...");
        bookService.issueBook();
    }
}