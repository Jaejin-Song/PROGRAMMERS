-- TIMESTAMPDIFF는 DATEDIFF와 계산 순서가 다른점 주의

SELECT
    ins.animal_id,
    ins.name
FROM animal_ins ins
INNER JOIN animal_outs outs
    ON ins.animal_id = outs.animal_id
ORDER BY TIMESTAMPDIFF(MINUTE, ins.datetime, outs.datetime) + 1 DESC
LIMIT 2;