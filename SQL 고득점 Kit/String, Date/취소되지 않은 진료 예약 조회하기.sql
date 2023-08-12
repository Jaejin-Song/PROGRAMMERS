SELECT apnt.apnt_no, pt.pt_name, pt.pt_no, apnt.mcdp_cd, dr.dr_name, apnt.apnt_ymd
    FROM appointment apnt
        INNER JOIN patient pt
        ON apnt.pt_no = pt.pt_no
        INNER JOIN doctor dr
        ON apnt.mddr_id = dr.dr_id
    WHERE apnt.mcdp_cd = 'CS'
        AND DATE_FORMAT(apnt.apnt_ymd, '%Y-%m-%d') = '2022-04-13'
        AND apnt.apnt_cncl_yn = 'N'
    ORDER BY apnt.apnt_ymd ASC;
    