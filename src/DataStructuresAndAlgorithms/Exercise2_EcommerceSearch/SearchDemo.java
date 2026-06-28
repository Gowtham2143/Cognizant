package DataStructuresAndAlgorithms.Exercise2_EcommerceSearch;

public class SearchDemo {

    public static int linearSearch(Product[] products, String key) {

        for (int i = 0; i < products.length; i++) {
            if (products[i].productName.equalsIgnoreCase(key)) {
                return i;
            }
        }
        return -1;
    }

    public static int binarySearch(Product[] products, String key) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            int result = products[mid].productName.compareToIgnoreCase(key);

            if (result == 0) {
                return mid;
            } else if (result < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return -1;
    }

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Tablet", "Electronics")
        };

        int linearResult = linearSearch(products, "Mobile");

        if (linearResult != -1) {
            System.out.println("Linear Search: Product found at index " + linearResult);
        } else {
            System.out.println("Linear Search: Product not found");
        }

        int binaryResult = binarySearch(products, "Mobile");

        if (binaryResult != -1) {
            System.out.println("Binary Search: Product found at index " + binaryResult);
        } else {
            System.out.println("Binary Search: Product not found");
        }
    }
}