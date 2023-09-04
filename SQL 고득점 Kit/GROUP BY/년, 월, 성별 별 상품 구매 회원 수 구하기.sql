SELECT
    YEAR(sale.sales_date) AS year,
    MONTH(sale.sales_date) AS month,
    info.gender AS gender,
    COUNT(DISTINCT(info.user_id)) AS users
FROM user_info info
INNER JOIN online_sale sale
    ON info.user_id = sale.user_id
WHERE info.gender IS NOT NULL
GROUP BY YEAR(sale.sales_date), MONTH(sale.sales_date), info.gender
ORDER BY YEAR(sale.sales_date), MONTH(sale.sales_date), info.gender ASC;