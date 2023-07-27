SELECT DR_NAME, DR_ID, MCDP_CD, SUBSTRING(HIRE_YMD, 1, 10) as HIRE_YMD 
    FROM DOCTOR
    WHERE MCDP_CD = 'CS' OR MCDP_CD = 'GS'
    ORDER BY HIRE_YMD DESC, DR_NAME ASC;