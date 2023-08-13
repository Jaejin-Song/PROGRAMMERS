SELECT
    TRUNCATE(price, -4) price_group,
    COUNT(*)
FROM product
GROUP BY price_group
ORDER BY price_group