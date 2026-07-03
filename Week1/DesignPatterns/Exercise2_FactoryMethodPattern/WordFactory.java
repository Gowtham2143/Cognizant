package DesignPatterns.Exercise2_FactoryMethodPattern;

public class WordFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new WordDocument();
    }
}