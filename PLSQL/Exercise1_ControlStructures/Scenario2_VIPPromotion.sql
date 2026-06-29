-- Exercise 1: Control Structures
-- Scenario 2: VIP Promotion
-- Name: Gopisetti Gowtham

ALTER TABLE Customers
ADD IsVIP VARCHAR2(5);

SET SERVEROUTPUT ON;

BEGIN
    FOR customer_rec IN (
        SELECT CustomerID, Balance
        FROM Customers
    )
    LOOP
        IF customer_rec.Balance > 10000 THEN

            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = customer_rec.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Customer ID '
                || customer_rec.CustomerID
                || ' promoted to VIP.'
            );

        ELSE

            UPDATE Customers
            SET IsVIP = 'FALSE'
            WHERE CustomerID = customer_rec.CustomerID;

        END IF;
    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('VIP promotion process completed.');

END;
/