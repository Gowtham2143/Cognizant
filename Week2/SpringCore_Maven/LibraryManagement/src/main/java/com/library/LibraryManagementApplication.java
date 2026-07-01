package com.library;

import com.library.controller.BookController;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {

	public static void main(String[] args) {

		ApplicationContext context =
				new ClassPathXmlApplicationContext("applicationContext.xml");

		BookController controller =
				context.getBean("bookController", BookController.class);

		controller.execute();
	}
}