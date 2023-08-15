WITH favorite_rest AS (
    SELECT food_type, max(favorites) AS favorites
    FROM rest_info
    GROUP BY food_type
)

SELECT
    i.food_type,
    i.rest_id,
    i.rest_name,
    i.favorites
FROM rest_info i
INNER JOIN favorite_rest f
    ON i.favorites = f.favorites
        AND i.food_type = f.food_type
ORDER BY i.food_type DESC