-- Exercise 1: Control Structures
-- Scenario 3: Loan Reminder
-- Name: Gopisetti Gowtham

SET SERVEROUTPUT ON;

BEGIN
    FOR loan_rec IN (
        SELECT c.CustomerID,
               c.Name,
               l.LoanID,
               l.EndDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND (SYSDATE + 30)
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Dear '
            || loan_rec.Name
            || ', your Loan ID '
            || loan_rec.LoanID
            || ' is due on '
            || TO_CHAR(loan_rec.EndDate, 'DD-MON-YYYY')
        );
    END LOOP;

    DBMS_OUTPUT.PUT_LINE('Reminder process completed.');

END;
/