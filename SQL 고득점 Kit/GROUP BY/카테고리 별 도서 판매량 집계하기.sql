SELECT
    category,
    SUM(s.sales) AS total_sales
FROM book b
INNER JOIN book_sales s
    ON b.book_id = s.book_id
WHERE DATE_FORMAT(s.sales_date, '%Y-%m-%d') LIKE '2022-01%'
GROUP BY category
ORDER BY category ASC