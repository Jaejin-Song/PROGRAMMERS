SELECT 
    u.user_id,
    u.nickname,
    SUM(b.price) AS total_sales
FROM used_goods_board b
INNER JOIN used_goods_user u
    ON b.writer_id = u.user_id
        AND b.status = 'DONE'
GROUP BY b.writer_id
HAVING SUM(b.price) >= 700000
ORDER BY total_sales ASC
