SELECT f.flavor
    FROM FIRST_HALF f INNER JOIN ICECREAM_INFO i
        ON f.flavor = i.flavor
    WHERE f.total_order > 3000 AND i.ingredient_type = 'fruit_based';