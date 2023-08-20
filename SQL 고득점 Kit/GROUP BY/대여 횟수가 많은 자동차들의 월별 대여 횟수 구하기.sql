WITH car AS(
    SELECT car_id
    FROM car_rental_company_rental_history
    WHERE start_date BETWEEN '2022-08-01' AND '2022-10-31'
    GROUP BY car_id
    HAVING COUNT(*) >= 5
)

SELECT
    MONTH(h.start_date) AS month,
    h.car_id,
    COUNT(*) AS records
FROM car_rental_company_rental_history h
INNER JOIN car c
    ON h.car_id = c.car_id
WHERE h.start_date BETWEEN '2022-08-01' AND '2022-10-31'
GROUP BY car_id, MONTH(start_date)
HAVING COUNT(*) >0
ORDER BY month ASC, car_id DESC