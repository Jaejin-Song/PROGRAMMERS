-- 취소된 예약을 제거해야 할 것 같은데 채점과정에서는 해당 부분이 고려가 되지 않은 듯

SELECT 
    mcdp_cd AS '진료과 코드',
    COUNT(*) AS '5월예약건수'
FROM appointment
WHERE DATE_FORMAT(apnt_ymd, '%Y-%m') = '2022-05'
    -- AND apnt_cncl_yn = 'N'
GROUP BY mcdp_cd
ORDER BY COUNT(*) ASC, mcdp_cd ASC