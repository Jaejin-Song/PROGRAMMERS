-- 첫번째 답안
SELECT 
    history_id, 
    CASE
        WHEN dc.discount_rate IS NOT NULL THEN
            ROUND((car.daily_fee - car.daily_fee * dc.discount_rate / 100) * (DATEDIFF(history.end_date, history.start_date) + 1))
        ELSE ROUND(car.daily_fee * (DATEDIFF(history.end_date, history.start_date) + 1))     END AS fee
    FROM car_rental_company_car car
        INNER JOIN car_rental_company_rental_history history
            ON car.car_id = history.car_id
        LEFT JOIN car_rental_company_discount_plan dc
            ON car.car_type = dc.car_type
            AND (
                (DATEDIFF(history.end_date, history.start_date) + 1 < 7
                    AND dc.duration_type = 'none')
                OR (7 <= DATEDIFF(history.end_date, history.start_date) + 1 
                    AND DATEDIFF(history.end_date, history.start_date) + 1 < 30
                    AND dc.duration_type = '7일 이상')
                OR (30 <= DATEDIFF(history.end_date, history.start_date) + 1
                   AND DATEDIFF(history.end_date, history.start_date) + 1 < 90
                   AND dc.duration_type = '30일 이상')
                OR (90 <= DATEDIFF(history.end_date, history.start_date) + 1
                   AND dc.duration_type = '90일 이상')
            )
    WHERE car.car_type = '트럭'
    ORDER BY fee DESC, history_id DESC;

-- 두번째 답안
SELECT
    history_id, 
    ROUND(car.daily_fee * (1 - COALESCE(dc.discount_rate, 0) / 100) * (DATEDIFF(history.end_date, history.start_date) + 1)) AS fee
FROM car_rental_company_car car
    INNER JOIN car_rental_company_rental_history history
        ON car.car_id = history.car_id
    LEFT JOIN car_rental_company_discount_plan dc
        ON car.car_type = dc.car_type
            AND dc.duration_type = 
                CASE WHEN DATEDIFF(history.end_date, history.start_date) + 1 BETWEEN 7 AND 29
                    THEN '7일 이상'
                WHEN DATEDIFF(history.end_date, history.start_date) + 1 BETWEEN 30 AND 89
                    THEN '30일 이상'
                WHEN DATEDIFF(history.end_date, history.start_date) + 1 >= 90
                    THEN '90일 이상'
                END
WHERE car.car_type = '트럭'
ORDER BY fee DESC, history_id DESC;