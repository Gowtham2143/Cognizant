package DesignPatterns.Exercise2_FactoryMethodPattern;

public class PdfFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new PdfDocument();
    }
}