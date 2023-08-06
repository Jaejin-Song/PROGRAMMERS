SELECT DISTINCT car.car_id
    FROM car_rental_company_car car
        INNER JOIN car_rental_company_rental_history rental
        ON car.car_id = rental.car_id
    WHERE car.car_type = '세단'
        AND MONTH(rental.start_date) = 10
    ORDER BY car.car_id DESC;