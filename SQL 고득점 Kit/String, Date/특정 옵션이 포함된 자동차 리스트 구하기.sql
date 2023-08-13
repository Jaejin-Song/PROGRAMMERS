SELECT *
    FROM car_rental_company_car
    WHERE INSTR(options, '네비게이션') != 0
    ORDER BY car_id DESC