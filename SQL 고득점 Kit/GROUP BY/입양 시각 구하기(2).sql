WITH RECURSIVE total_hours AS (
    SELECT 0 AS hour
    UNION ALL
    SELECT hour+1 FROM total_hours
    WHERE hour < 23
)

SELECT
    th.hour,
    COUNT(outs.animal_id) AS count
FROM animal_outs outs
RIGHT JOIN total_hours th
    ON th.hour = HOUR(outs.datetime)
GROUP BY th.hour
ORDER BY th.hour;