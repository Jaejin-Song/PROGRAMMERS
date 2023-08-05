SELECT b.TITLE, b.BOARD_ID, r.REPLY_ID, r.WRITER_ID, r.CONTENTS, DATE_FORMAT(r.created_date,'%Y-%m-%d')as CREATED_DATE
    FROM USED_GOODS_BOARD b INNER JOIN USED_GOODS_REPLY r
        ON b.board_id = r.board_id
    WHERE b.created_date LIKE '2022-10%'
    ORDER BY r.created_date ASC, b.title ASC;
    