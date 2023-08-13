SELECT 
    DATE_FORMAT(datetime,'%H') AS hour,
    COUNT(*) AS count
FROM animal_outs
WHERE HOUR(datetime) BETWEEN 9 AND 20
GROUP BY DATE_FORMAT(datetime,'%H')
ORDER BY hour