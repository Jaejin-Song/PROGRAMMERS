WITH high_price AS (
    SELECT category, MAX(price) AS price
    FROM food_product
    GROUP BY category
)

SELECT
    f.category,
    f.price,
    f.product_name
FROM food_product f
INNER JOIN high_price h
    ON f.category = h.category
        AND f.price = h.price
WHERE f.category IN ('과자', '국', '김치', '식용유')
ORDER BY f.price DESC