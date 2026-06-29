-- Exercise 1: Control Structures
-- Scenario 1: Loan Interest Discount
-- Name: Gopisetti Gowtham

SET SERVEROUTPUT ON;

BEGIN
    FOR customer_rec IN (
        SELECT c.CustomerID,
               c.DOB,
               l.LoanID,
               l.InterestRate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
    )
    LOOP
        IF FLOOR(MONTHS_BETWEEN(SYSDATE, customer_rec.DOB) / 12) > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = customer_rec.LoanID;

            DBMS_OUTPUT.PUT_LINE(
                '1% interest discount applied to Customer ID: '
                || customer_rec.CustomerID
            );

        END IF;
    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Processing completed.');

END;
/