package DesignPatterns.Exercise2_FactoryMethodPattern;

public class ExcelFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new ExcelDocument();
    }
}