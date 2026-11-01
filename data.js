// ====================== PAPERS ======================
const papers = [
  {id:"math-p1-2023",title:"Mathematics Paper 1 – Nov 2023",grade:12,subject:"Mathematics",year:2023,type:"Question Paper",link:"https://drive.google.com/file/d/1nO4oYY7ujvfwNTnbFr9iQdRIl72Wu0Uf/view"},
  {id:"math-p2-2023",title:"Mathematics Paper 2 – Nov 2023",grade:12,subject:"Mathematics",year:2023,type:"Question Paper",link:"https://drive.google.com/file/d/1K03UkeWTLOsvGZlHbqCicQO3l0jOAUvr/view"},
  {id:"math-p1-memo-2023",title:"Mathematics Paper 1 Memo – Nov 2023",grade:12,subject:"Mathematics",year:2023,type:"Memo",link:"https://drive.google.com/file/d/1DZqCRAr6jpheuuK1kfDNoKKijMxPRuAf/view"},
  {id:"math-p2-memo-2023",title:"Mathematics Paper 2 Memo – Nov 2023",grade:12,subject:"Mathematics",year:2023,type:"Memo",link:"https://drive.google.com/file/d/1n0aGJjiWFc1KI5NsvwW_8VDkGBjfrYlW/view"},
  {id:"math-p1-mj-2025",title:"Mathematics P1 May-June 2025 Eng",grade:12,subject:"Mathematics",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1FfbhgSqdrojPbjKYyY43nvkp8_FYuf0N/view"},
  {id:"math-p1-nov-2025",title:"Mathematics P1 Nov 2025 Eng",grade:12,subject:"Mathematics",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1YVgISGxev3_ZMRDD2tGc8wPDaKCJ3i0w/view"},
  {id:"math-p2-nov-2025",title:"Mathematics P2 Nov 2025 Eng",grade:12,subject:"Mathematics",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1RKsrBN5dbH1jDcrTezeUcWE9nVkL0VAC/view"},
  {id:"math-p1-mj-2025-mg",title:"Mathematics P1 May-June 2025 MG Afr & Eng",grade:12,subject:"Mathematics",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1Mry8PIIHWN-1Fae6gfqbBUYzZJbkMEpp/view"},
  {id:"math-p2-mj-2025-mg",title:"Mathematics P2 May-June 2025 MG Afr & Eng",grade:12,subject:"Mathematics",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1-ARb6-mx2_3VHfzKpPCxTBkDM-EKfa7s/view"},
  {id:"math-p2-mj-2025-ab",title:"Mathematics P2 May-June 2025 Answer Book Afr & Eng",grade:12,subject:"Mathematics",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1nL-Eijtu5FauecSCZJModTT0DDxiFULL/view"},
  {id:"math-p2-nov-2025-ab",title:"Mathematics P2 Nov 2025 Answer Book Afr & Eng",grade:12,subject:"Mathematics",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1aJg8j3FgNTrNe3kJ-60jMpMMOcYo9lCI/view"},
  {id:"math-p1-nov-2025-mg",title:"Mathematics P1 Nov 2025 MG Afr & Eng",grade:12,subject:"Mathematics",year:2025,type:"Memo",link:"https://drive.google.com/file/d/18LmaFDSF-ewuRNFaRCqc-x2Jw86AuOpl/view"},
  {id:"math-p2-nov-2025-mg",title:"Mathematics P2 Nov 2025 MG Afr & Eng",grade:12,subject:"Mathematics",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1apF53r-juoWxP-EfA_J43y6NKbztJxQA/view"},
  {id:"math-p1-nov-2020",title:"Mathematics P1 Nov 2020 Eng",grade:12,subject:"Mathematics",year:2020,type:"Question Paper",link:"https://drive.google.com/file/d/1yheICIWZVaffmkvsuEfloO1O7Jw3w5om/view"},
  {id:"math-p1-nov-2021",title:"Mathematics P1 Nov 2021 Eng",grade:12,subject:"Mathematics",year:2021,type:"Question Paper",link:"https://drive.google.com/file/d/1Ve4STE21heO_wQxPA3xCpbINRm1L4I2s/view"},
  {id:"math-p1-nov-2020-memo",title:"Mathematics P1 Nov 2020 Memo Afr & Eng",grade:12,subject:"Mathematics",year:2020,type:"Memo",link:"https://drive.google.com/file/d/1TTJB3G_pnqCweroVy-1djsY22W5xaOu0/view"},
  {id:"math-p1-mj-2021",title:"Mathematics P1 May-June 2021 Eng",grade:12,subject:"Mathematics",year:2021,type:"Question Paper",link:"https://drive.google.com/file/d/1RGhwxKjG264lRrKKIbKI04xjhSgClpnT/view"},
  {id:"math-p1-nov-2021-mg",title:"Mathematics P1 Nov 2021 MG Afr & Eng",grade:12,subject:"Mathematics",year:2021,type:"Memo",link:"https://drive.google.com/file/d/1ok730pnYGgJlmB8doeQspmGhCBngkyVH/view"},
  {id:"math-p2-nov-2020-ab",title:"Mathematics P2 Nov 2020 Answer book Eng & Afr",grade:12,subject:"Mathematics",year:2020,type:"Question Paper",link:"https://drive.google.com/file/d/1MstyrtBgiF9I6B_1AjMAi8h4bcjB033b/view"},
  {id:"math-p2-nov-2021",title:"Mathematics P2 Nov 2021 Eng",grade:12,subject:"Mathematics",year:2021,type:"Question Paper",link:"https://drive.google.com/file/d/16Sg0fU7myROFN0jUyt6Ikjmis2SOklUf/view"},
  {id:"math-p2-nov-2021-ab",title:"Mathematics P2 Nov 2021 Answer Book Eng & Afr",grade:12,subject:"Mathematics",year:2021,type:"Question Paper",link:"https://drive.google.com/file/d/1spucGytuhqPP1kd9hSxDK75fZJIdUeb-/view"},
  {id:"math-p2-nov-2020",title:"Mathematics P2 Nov 2020 Eng",grade:12,subject:"Mathematics",year:2020,type:"Question Paper",link:"https://drive.google.com/file/d/1Xv7qm09gGGWvwigFAU51OtVlJiZFXkJ-/view"},
  {id:"math-p2-nov-2020-memo",title:"Mathematics P2 Nov 2020 Memo Afr & Eng",grade:12,subject:"Mathematics",year:2020,type:"Memo",link:"https://drive.google.com/file/d/1ySrdxpp9FFe1oNpV7TocOHvu9xYvv2lR/view"},
  {id:"math-p1-mj-2022-mg",title:"Mathematics P1 May-June 2022 MG Afr & Eng",grade:12,subject:"Mathematics",year:2022,type:"Memo",link:"https://drive.google.com/file/d/1z9l9mhHPV_xv2m8ACyE0WqQV4XnovbPA/view"},
  {id:"math-p2-nov-2021-mg",title:"Mathematics P2 Nov 2021 MG Afr & Eng",grade:12,subject:"Mathematics",year:2021,type:"Memo",link:"https://drive.google.com/file/d/1Oy2XQ9xf6CS8K65vJit-JcAbec0_TSPz/view"},
  {id:"math-p2-mj-2021",title:"Mathematics P2 May-June 2021 Eng",grade:12,subject:"Mathematics",year:2021,type:"Question Paper",link:"https://drive.google.com/file/d/1rkN9QCNf1chlFvmnFua0hK5qxve7R03J/view"},
  {id:"math-p2-mj-2022",title:"Mathematics P2 May-June 2022 Eng",grade:12,subject:"Mathematics",year:2022,type:"Question Paper",link:"https://drive.google.com/file/d/1l0EAEtAMftNTL4oohc__a3RAlfV4vrNy/view"},
  {id:"math-p2-mj-2022-ab",title:"Mathematics P2 May-June 2022 Answer Book Eng & Afr",grade:12,subject:"Mathematics",year:2022,type:"Question Paper",link:"https://drive.google.com/file/d/1Cc_yqLg5OfU_QgSWQWlnzyBixloPAtYN/view"},
  {id:"math-p1-mj-2021-mg",title:"Mathematics P1 May-June 2021 MG Afr & Eng",grade:12,subject:"Mathematics",year:2021,type:"Memo",link:"https://drive.google.com/file/d/1UjP2YpP68RsAm127KjT2EFriejlf_Kqd/view"},
  {id:"geo-p1-nov-2025",title:"Geography P1 Nov 2025 Eng",grade:12,subject:"Geography",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1cyk9dnh6Ztr45C_n8fkOkh6cB0xtw_lG/view"},
  {id:"geo-p1-mj-2025",title:"Geography P1 May-June 2025 Eng",grade:12,subject:"Geography",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1BosDIeUFOHPoUtKQBUDx7hRCJVVJqTxw/view"},
  {id:"geo-p1-mj-2025-mg",title:"Geography P1 May-June 2025 MG Eng",grade:12,subject:"Geography",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1yGgkfabfoUWcnLcURQ0tP7BIz1WBSug3/view"},
  {id:"geo-p2-mj-2025",title:"Geography P2 May-June 2025 Eng",grade:12,subject:"Geography",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1TUostTEGGHHYciNelqsBrAdTIpwaJB5w/view"},
  {id:"geo-p2-mj-2025-mg",title:"Geography P2 May-June 2025 MG Eng",grade:12,subject:"Geography",year:2025,type:"Memo",link:"https://drive.google.com/file/d/18hA-Gjg-Pz2k6fbxecmysb0IcIzjgl_M/view"},
  {id:"geo-p1-nov-2025-mg",title:"Geography P1 Nov 2025 MG Eng",grade:12,subject:"Geography",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1CTKDCM1Sl0GHE2CoaOWmTbKcLhp0uzn8/view"},
  {id:"geo-p2-nov-2025",title:"Geography P2 Nov 2025 Eng",grade:12,subject:"Geography",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1IwtDN5tAsCg5ys0r6eBb8xKx_LBr8SQL/view"},
  {id:"geo-p2-nov-2025-mg",title:"Geography P2 Nov 2025 MG Eng",grade:12,subject:"Geography",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1sMTCjeXcKYUmOlXm3Yqq0SjwLmtLMBA0/view"},
  {id:"geo-p1-nov-2021",title:"Geography P1 Nov 2021 Eng",grade:12,subject:"Geography",year:2021,type:"Question Paper",link:"https://drive.google.com/file/d/1xHY4EyeerMqtmAToWX4oBHPCLoxpeGEN/view"},
  {id:"geo-p1-nov-2020-memo",title:"Geography P1 Nov 2020 Memo Eng",grade:12,subject:"Geography",year:2020,type:"Memo",link:"https://drive.google.com/file/d/1lZeJW7ueJxk8c8MAs27GWJIRKmfYPvdq/view"},
  {id:"geo-p1-mj-2022",title:"Geography P1 May-June 2022 Eng",grade:12,subject:"Geography",year:2022,type:"Question Paper",link:"https://drive.google.com/file/d/1r0usHlWSRlP84O887qDVa3fgge6jHhNl/view"},
  {id:"geo-p1-nov-2020-ann",title:"Geography P1 Nov 2020 Annexure Eng",grade:12,subject:"Geography",year:2020,type:"Question Paper",link:"https://drive.google.com/file/d/1eCgUudM_RXCxUj07t6SuN-YYCEQCwMiU/view"},
  {id:"geo-p1-nov-2020",title:"Geography P1 Nov 2020 Eng",grade:12,subject:"Geography",year:2020,type:"Question Paper",link:"https://drive.google.com/file/d/1qcSuyzhR180AByj6_mr9fOTi-R6GpKGo/view"},
  {id:"geo-p1-nov-2021-mg",title:"Geography P1 Nov 2021 MG Eng",grade:12,subject:"Geography",year:2021,type:"Memo",link:"https://drive.google.com/file/d/189bJro7iXNCn8jG5Q3MWXNUFBRtaKHf_/view"},
  {id:"geo-p2-nov-2020",title:"Geography P2 Nov 2020 Eng",grade:12,subject:"Geography",year:2020,type:"Question Paper",link:"https://drive.google.com/file/d/1HtvNYPqwmphGvSss9XPzyEBZT1jJJKQh/view"},
  {id:"geo-p1-mj-2022-mg",title:"Geography P1 May-June 2022 MG Eng",grade:12,subject:"Geography",year:2022,type:"Memo",link:"https://drive.google.com/file/d/1BC9-faLbbnKm36nVhWnQ-D2x45PEpDbs/view"},
  {id:"geo-p2-nov-2021",title:"Geography P2 Nov 2021 Eng",grade:12,subject:"Geography",year:2021,type:"Question Paper",link:"https://drive.google.com/file/d/15vPrYp2c5yIE_7xVn7-kmWbb2Cx4z4pF/view"},
  {id:"geo-p1-mj-2021-mg",title:"Geography P1 May-June 2021 MG Eng",grade:12,subject:"Geography",year:2021,type:"Memo",link:"https://drive.google.com/file/d/1X9FPUiNVGjSL_F_8Wre1TCvcPrq-qeLq/view"},
  {id:"geo-p2-nov-2021-mg",title:"Geography P2 Nov 2021 MG Eng",grade:12,subject:"Geography",year:2021,type:"Memo",link:"https://drive.google.com/file/d/1uqaXoj1LBIJdZjV6QHbh_mr4wsjI5FDY/view"},
  {id:"geo-p1-mj-2021",title:"Geography P1 May-June 2021 Eng",grade:12,subject:"Geography",year:2021,type:"Question Paper",link:"https://drive.google.com/file/d/1y58iDBEDzGlQZuI-DZPFx8YLXszxyk0V/view"},
  {id:"geo-p2-nov-2020-memo",title:"Geography P2 Nov 2020 Memo Eng",grade:12,subject:"Geography",year:2020,type:"Memo",link:"https://drive.google.com/file/d/19spXpSpRnsQGdP-dUYTrm3DllL2UKxue/view"},
  {id:"geo-p2-mj-2022-mg",title:"Geography P2 May-June 2022 MG Eng",grade:12,subject:"Geography",year:2022,type:"Memo",link:"https://drive.google.com/file/d/1fX7Pg1ckLmrIc5LV8IcxEkpSDFHOj4Lh/view"},
  {id:"geo-p2-mj-2021-mg",title:"Geography P2 May-June 2021 MG Eng",grade:12,subject:"Geography",year:2021,type:"Memo",link:"https://drive.google.com/file/d/1RlOfI70g4kpfaltS0siw_CsWHTGq3ASW/view"},
  {id:"geo-p2-mj-2022",title:"Geography P2 May-June 2022 Eng",grade:12,subject:"Geography",year:2022,type:"Question Paper",link:"https://drive.google.com/file/d/19UBxFd9Po1vUs42x0s1u1JNeuj-CL0P9/view"},
  {id:"life-p1-nov-2025-mg",title:"Life Sciences P1 Nov 2025 MG Eng",grade:12,subject:"Life Sciences",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1gvEBfYZA3idNAOG7xhiXnOlUPyCLiZqs/view"},
  {id:"life-p1-mj-2025-mg",title:"Life Sciences P1 May-June 2025 MG Eng",grade:12,subject:"Life Sciences",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1jA9a-gImhY5o7YsiD-ZsOeQ_RDtvhMzN/view"},
  {id:"life-p2-mj-2025-mg",title:"Life Sciences P2 May-June 2025 MG Eng",grade:12,subject:"Life Sciences",year:2025,type:"Memo",link:"https://drive.google.com/file/d/17qFj44_6txn-z18CeD-fBc7Zherfzzil/view"},
  {id:"life-p1-mj-2025",title:"Life Sciences P1 May-June 2025 Eng",grade:12,subject:"Life Sciences",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1OyBX9IBg0N6uvmukWnAXhpDPJBTf13zg/view"},
  {id:"life-p2-mj-2025",title:"Life Sciences P2 May-June 2025 Eng",grade:12,subject:"Life Sciences",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1BlzWPEOOB1JZB2hd7kdlN46YnEfUIeZI/view"},
  {id:"life-p1-nov-2025",title:"Life Sciences P1 Nov 2025 Eng",grade:12,subject:"Life Sciences",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1SHrS7gcAFDjkUqrk70LoLrxFf8qhX8dK/view"},
  {id:"life-p2-nov-2025",title:"Life Sciences P2 Nov 2025 Eng",grade:12,subject:"Life Sciences",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1xDyhrvxYzsKQZ2BvzLEVkBGQNvuySjYF/view"},
  {id:"life-p2-nov-2025-mg",title:"Life Sciences P2 Nov 2025 MG Eng",grade:12,subject:"Life Sciences",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1J_JPQP9sRrPJ-YZxglyOj_AxPMeF0lFW/view"},
  {id:"life-p1-nov-2021",title:"Life Sciences P1 Nov 2021 Eng",grade:12,subject:"Life Sciences",year:2021,type:"Question Paper",link:"https://drive.google.com/file/d/1d0JJwHII8VpAN2ubfKZSF1A9pLw5q3ma/view"},
  {id:"life-p1-nov-2020-memo",title:"Life Sciences P1 Nov 2020 Memo Eng",grade:12,subject:"Life Sciences",year:2020,type:"Memo",link:"https://drive.google.com/file/d/1DE9RfirRTSka6gTbnPzKKV8GuBM7QljA/view"},
  {id:"life-p1-nov-2020",title:"Life Sciences P1 Nov 2020 Eng",grade:12,subject:"Life Sciences",year:2020,type:"Question Paper",link:"https://drive.google.com/file/d/1kSpBMOxdiYEsIZkS9-mAVXOGjXgHlolg/view"},
  {id:"life-p1-nov-2021-mg",title:"Life Sciences P1 Nov 2021 MG Eng",grade:12,subject:"Life Sciences",year:2021,type:"Memo",link:"https://drive.google.com/file/d/1YV-odwFjd13NO8qZXs8RZ_HmGJryANsJ/view"},
  {id:"life-p1-mj-2021",title:"Life Sciences P1 May-June 2021 Eng",grade:12,subject:"Life Sciences",year:2021,type:"Question Paper",link:"https://drive.google.com/file/d/1z6WPM1zw5lO66XH4VAnQrbFJxfhO0-ug/view"},
  {id:"life-p2-nov-2020",title:"Life Sciences P2 Nov 2020 Eng",grade:12,subject:"Life Sciences",year:2020,type:"Question Paper",link:"https://drive.google.com/file/d/1J5f2ABBwNpR6dS0IHzQaEEudSw2lNgXy/view"},
  {id:"life-p2-nov-2020-memo",title:"Life Sciences P2 Nov 2020 Memo Eng",grade:12,subject:"Life Sciences",year:2020,type:"Memo",link:"https://drive.google.com/file/d/1CVvQsoXU8ktpOmD58eJk8bdr_7_zjYpR/view"},
  {id:"phys-p1-mj-2025-mg",title:"Physical Sciences P1 May-June 2025 MG Afr & Eng",grade:12,subject:"Physical Sciences",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1QI_iN1_Rjfogau4X-arGrLjP2Fq1fhkq/view"},
  {id:"phys-p2-mj-2025-mg",title:"Physical Sciences P2 May-June 2025 MG Afr & Eng",grade:12,subject:"Physical Sciences",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1OFLd3NETsvQgYSqs78niEMavFPl2Zb70/view"},
  {id:"phys-p2-mj-2025",title:"Physical Sciences P2 May-June 2025 Eng",grade:12,subject:"Physical Sciences",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1nxBBEZsteyB78-V1KN5HAuavmmacDa4n/view"},
  {id:"phys-p1-nov-2025",title:"Physical Sciences P1 Nov 2025 Eng",grade:12,subject:"Physical Sciences",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1bJRJeMsF-dZz0cNBpQZW1KoWKMTXvsl5/view"},
  {id:"phys-p1-nov-2025-mg",title:"Physical Sciences P1 Nov 2025 MG Afr & Eng",grade:12,subject:"Physical Sciences",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1ecSSoGqeMJ1gl2tm_5GPbaPwkT4MhA1F/view"},
  {id:"phys-p2-nov-2025",title:"Physical Sciences P2 Nov 2025 Eng",grade:12,subject:"Physical Sciences",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1YwVCmtm4-r6dbIwh3_yDS18e8J6j3Zpv/view"},
  {id:"phys-p2-nov-2025-mg",title:"Physical Sciences P2 Nov 2025 MG Afr & Eng",grade:12,subject:"Physical Sciences",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1TIR7pcaSGooGh4t5QiNcvf3DNOzxTe5G/view"},
  {id:"phys-p1-nov-2023-mg",title:"Physical Sciences P1 Nov 2023 MG Afr & Eng",grade:12,subject:"Physical Sciences",year:2023,type:"Memo",link:"https://drive.google.com/file/d/1qIvZg_c1fJjYFGcrJ4EhqaZHbdMnu5jn/view"},
  {id:"phys-p2-nov-2020-memo",title:"Physical Sciences P2 Nov 2020 Eng & Afr Memo",grade:12,subject:"Physical Sciences",year:2020,type:"Memo",link:"https://drive.google.com/file/d/1CssdHXdOkEYizCy0ruOYZ2AzHLu6KJJF/view"},
  {id:"phys-p1-nov-2020",title:"Physical Sciences P1 Nov 2020 Eng",grade:12,subject:"Physical Sciences",year:2020,type:"Question Paper",link:"https://drive.google.com/file/d/1s8t7f2X8WZ_9a_scwvXSJ7913j3fyluE/view"},
  {id:"phys-p1-nov-2021",title:"Physical Sciences P1 Nov 2021 Eng",grade:12,subject:"Physical Sciences",year:2021,type:"Question Paper",link:"https://drive.google.com/file/d/1DPGatdmIeV2An_q-u4EfwzPW1x8YAhUX/view"},
  {id:"phys-p1-nov-2020-memo",title:"Physical Sciences P1 Nov 2020 Eng & Afr Memo",grade:12,subject:"Physical Sciences",year:2020,type:"Memo",link:"https://drive.google.com/file/d/17ra4rCj97BGMjz3iw_BghDGFUvhaWlIA/view"},
  {id:"phys-p1-nov-2021-mg",title:"Physical Sciences P1 Nov 2021 MG Afr & Eng",grade:12,subject:"Physical Sciences",year:2021,type:"Memo",link:"https://drive.google.com/file/d/1sLHcHbCRHssERVrWYkq5NArwmG3728ZJ/view"},
  {id:"phys-p2-nov-2021",title:"Physical Sciences P2 Nov 2021 Eng",grade:12,subject:"Physical Sciences",year:2021,type:"Question Paper",link:"https://drive.google.com/file/d/1OiGiSU4PUAAb3ckTw5Mst2qcD-ANm59D/view"},
  {id:"phys-p2-nov-2020",title:"Physical Sciences P2 Nov 2020 Eng",grade:12,subject:"Physical Sciences",year:2020,type:"Question Paper",link:"https://drive.google.com/file/d/1CddjFGG_J4rv3EKWPtmQB_6Q5KON4OFM/view"},
  {id:"phys-p1-mj-2021",title:"Physical Sciences P1 May-June 2021 Eng",grade:12,subject:"Physical Sciences",year:2021,type:"Question Paper",link:"https://drive.google.com/file/d/10njQRTE1sLnx6IDWVP8F8s9kZdhp1iL4/view"},
  {id:"phys-p1-mj-2022",title:"Physical Sciences P1 May-June 2022 Eng",grade:12,subject:"Physical Sciences",year:2022,type:"Question Paper",link:"https://drive.google.com/file/d/1grYxA1NJ9G-S47D04HpNoouXMqsAcws0/view"},
  {id:"phys-p1-mj-2022-mg",title:"Physical Sciences P1 May-June 2022 MG Afr & Eng",grade:12,subject:"Physical Sciences",year:2022,type:"Memo",link:"https://drive.google.com/file/d/1d29yjdObxbZPwA_fdMe9St1bO-WMzEHp/view"}
];

// ====================== NOTES ======================
const notes = [
{id:"functions",title:"Functions – Complete Guide",subject:"Mathematics",grade:12,content:`
<h3>1. Introduction to Functions</h3>
<p>A function is a relationship where every input (x) has exactly one output (y). We write this as y = f(x).</p>
<ul>
<li><strong>Domain</strong> – the set of all possible x-values</li>
<li><strong>Range</strong> – the set of all possible y-values</li>
</ul>

<h3>2. Linear Functions</h3>
<div class="formula">y = mx + c</div>
<ul>
<li><strong>m</strong> = gradient (slope)</li>
<li><strong>c</strong> = y-intercept (where the line cuts the y-axis)</li>
</ul>
<div class="example">
<strong>Example 1:</strong> Find the equation of the line that passes through (2, 5) with a gradient of 3.<br><br>
y − y₁ = m(x − x₁)<br>
y − 5 = 3(x − 2)<br>
y − 5 = 3x − 6<br>
y = 3x − 1
</div>
<div class="example">
<strong>Example 2:</strong> Find the equation of the line passing through A(1, 2) and B(4, 8).<br><br>
m = (8 − 2)/(4 − 1) = 6/3 = 2<br>
Using point A: y − 2 = 2(x − 1)<br>
y − 2 = 2x − 2<br>
y = 2x
</div>
<div class="example">
<strong>Example 3:</strong> Find the x-intercept of the line y = 2x − 6.<br><br>
Set y = 0:<br>
0 = 2x − 6<br>
2x = 6<br>
x = 3<br>
x-intercept is 3.
</div>

<h3>3. Quadratic Functions</h3>
<div class="formula">y = ax² + bx + c</div>
<ul>
<li>If <strong>a > 0</strong> the parabola opens upwards (minimum turning point)</li>
<li>If <strong>a < 0</strong> the parabola opens downwards (maximum turning point)</li>
<li>Axis of symmetry / x-coordinate of turning point: <strong>x = −b/(2a)</strong></li>
</ul>
<div class="example">
<strong>Example 4:</strong> Find the turning point of f(x) = 2x² − 8x + 3.<br><br>
x = −(−8)/(2×2) = 8/4 = 2<br>
f(2) = 2(4) − 8(2) + 3 = 8 − 16 + 3 = −5<br>
Minimum turning point: (2, −5)
</div>
<div class="example">
<strong>Example 5:</strong> Find the x-intercepts of y = x² − 5x + 6.<br><br>
x² − 5x + 6 = 0<br>
(x − 2)(x − 3) = 0<br>
x = 2 or x = 3
</div>
<div class="example">
<strong>Example 6:</strong> Write y = x² − 6x + 5 in the form y = (x − p)² + q and write down the turning point.<br><br>
y = (x − 3)² − 9 + 5<br>
y = (x − 3)² − 4<br>
Turning point: (3, −4)
</div>
<div class="example">
<strong>Example 7:</strong> Does the parabola y = −x² + 4x − 7 have a maximum or minimum value? Find that value.<br><br>
a = −1 < 0 → maximum<br>
x = −4/(2×−1) = 2<br>
y = −(2)² + 4(2) − 7 = −4 + 8 − 7 = −3<br>
Maximum value is −3 at x = 2.
</div>

<h3>4. Exponential Functions</h3>
<div class="formula">y = abˣ</div>
<ul>
<li>If <strong>b > 1</strong> → exponential growth</li>
<li>If <strong>0 < b < 1</strong> → exponential decay</li>
</ul>
<div class="example">
<strong>Example 8:</strong> A population of 500 doubles every year. Find the population after 4 years.<br><br>
y = 500 × 2⁴ = 500 × 16 = 8000
</div>
<div class="example">
<strong>Example 9:</strong> A car worth R200 000 depreciates by 15% per year. Find its value after 3 years.<br><br>
y = 200000 × (0.85)³<br>
= 200000 × 0.614125 ≈ R122 825
</div>

<h3>5. Hyperbolic Functions</h3>
<div class="formula">y = a/x + q</div>
<ul>
<li>Vertical asymptote: x = 0</li>
<li>Horizontal asymptote: y = q</li>
</ul>
<div class="example">
<strong>Example 10:</strong> For y = 2/x − 3, state the asymptotes and the y-intercept (if any).<br><br>
Vertical asymptote: x = 0<br>
Horizontal asymptote: y = −3<br>
No y-intercept (undefined at x = 0).
</div>
`},

{id:"calculus",title:"Differentiation – Complete Guide",subject:"Mathematics",grade:12,content:`
<h3>1. Basic Differentiation Rules</h3>
<div class="formula">d/dx [xⁿ] = n xⁿ⁻¹</div>
<div class="formula">d/dx [k] = 0 (where k is a constant)</div>
<div class="formula">d/dx [kf(x)] = k · f′(x)</div>
<div class="example">
<strong>Example 1:</strong> Differentiate y = 5x⁴ − 3x² + 7x − 2<br><br>
dy/dx = 20x³ − 6x + 7
</div>
<div class="example">
<strong>Example 2:</strong> Differentiate y = 4x³ − 1/x² + 6<br><br>
First rewrite: y = 4x³ − x⁻² + 6<br>
dy/dx = 12x² + 2x⁻³ = 12x² + 2/x³
</div>
<div class="example">
<strong>Example 3:</strong> Differentiate y = √x + 3/x<br><br>
y = x¹ᐟ² + 3x⁻¹<br>
dy/dx = (1/2)x⁻¹ᐟ² − 3x⁻² = 1/(2√x) − 3/x²
</div>
<div class="example">
<strong>Example 4:</strong> Differentiate y = 2x⁵ − 7x + 4<br><br>
dy/dx = 10x⁴ − 7
</div>

<h3>2. Product Rule</h3>
<div class="formula">If y = u · v then dy/dx = u′v + uv′</div>
<div class="example">
<strong>Example 5:</strong> Differentiate y = (3x + 1)(x² − 4)<br><br>
Let u = 3x + 1 → u′ = 3<br>
Let v = x² − 4 → v′ = 2x<br>
dy/dx = 3(x² − 4) + (3x + 1)(2x)<br>
= 3x² − 12 + 6x² + 2x<br>
= 9x² + 2x − 12
</div>
<div class="example">
<strong>Example 6:</strong> Differentiate y = x²(2x − 5)<br><br>
u = x² → u′ = 2x<br>
v = 2x − 5 → v′ = 2<br>
dy/dx = 2x(2x − 5) + x²(2) = 4x² − 10x + 2x² = 6x² − 10x
</div>
<div class="example">
<strong>Example 7:</strong> Differentiate y = (x + 2)(x − 3)<br><br>
dy/dx = 1(x − 3) + (x + 2)(1) = x − 3 + x + 2 = 2x − 1
</div>

<h3>3. Quotient Rule</h3>
<div class="formula">If y = u/v then dy/dx = (u′v − uv′)/v²</div>
<div class="example">
<strong>Example 8:</strong> Differentiate y = (2x + 3)/(x − 1)<br><br>
u = 2x + 3 → u′ = 2<br>
v = x − 1 → v′ = 1<br>
dy/dx = [2(x − 1) − (2x + 3)(1)] / (x − 1)²<br>
= (2x − 2 − 2x − 3)/(x − 1)² = −5/(x − 1)²
</div>
<div class="example">
<strong>Example 9:</strong> Differentiate y = x²/(x + 1)<br><br>
u = x² → u′ = 2x<br>
v = x + 1 → v′ = 1<br>
dy/dx = [2x(x + 1) − x²(1)]/(x + 1)² = (2x² + 2x − x²)/(x + 1)² = (x² + 2x)/(x + 1)²
</div>

<h3>4. Stationary Points (Turning Points)</h3>
<p>A stationary point occurs where the gradient is zero.</p>
<ol>
<li>Find the first derivative dy/dx</li>
<li>Set dy/dx = 0 and solve for x</li>
<li>Substitute the x-values back into the original function to find y</li>
<li>Use the second derivative test:
<ul>
<li>If f′′(x) > 0 → local minimum</li>
<li>If f′′(x) < 0 → local maximum</li>
</ul>
</li>
</ol>
<div class="example">
<strong>Example 10:</strong> Find the stationary points of f(x) = x³ − 6x² + 9x + 1 and determine their nature.<br><br>
f′(x) = 3x² − 12x + 9<br>
Set 3x² − 12x + 9 = 0<br>
x² − 4x + 3 = 0<br>
(x − 1)(x − 3) = 0<br>
x = 1 or x = 3<br><br>
f(1) = 1 − 6 + 9 + 1 = 5 → point (1, 5)<br>
f(3) = 27 − 54 + 27 + 1 = 1 → point (3, 1)<br><br>
f′′(x) = 6x − 12<br>
f′′(1) = −6 < 0 → local maximum<br>
f′′(3) = 6 > 0 → local minimum
</div>
<div class="example">
<strong>Example 11:</strong> Find the turning point of f(x) = x² − 4x + 3.<br><br>
f′(x) = 2x − 4 = 0 → x = 2<br>
f(2) = 4 − 8 + 3 = −1<br>
Minimum turning point: (2, −1)
</div>
`},

{id:"sequences",title:"Sequences & Series – Complete Guide",subject:"Mathematics",grade:12,content:`
<h3>1. Arithmetic Sequences</h3>
<p>An arithmetic sequence has a constant difference between consecutive terms. This constant is called the <strong>common difference (d)</strong>.</p>
<div class="formula">Tₙ = a + (n − 1)d</div>
<div class="formula">Sₙ = n/2 [2a + (n − 1)d]</div>
<div class="formula">Sₙ = n/2 (a + l) (where l is the last term)</div>
<div class="example">
<strong>Example 1:</strong> Given the sequence 7, 12, 17, 22… find the 15th term and the sum of the first 15 terms.<br><br>
a = 7, d = 5<br>
T₁₅ = 7 + (15 − 1)×5 = 7 + 70 = 77<br>
S₁₅ = 15/2 [2(7) + 14×5] = 15/2 [14 + 70] = 15/2 × 84 = 630
</div>
<div class="example">
<strong>Example 2:</strong> The 4th term of an arithmetic sequence is 17 and the 9th term is 32. Find a and d.<br><br>
T₄ = a + 3d = 17<br>
T₉ = a + 8d = 32<br>
Subtract the first equation from the second:<br>
5d = 15 → d = 3<br>
a + 3(3) = 17 → a + 9 = 17 → a = 8
</div>
<div class="example">
<strong>Example 3:</strong> How many terms of the sequence 3, 7, 11, 15… must be added to give a sum of 325?<br><br>
a = 3, d = 4, Sₙ = 325<br>
n/2 [2(3) + (n−1)4] = 325<br>
n/2 [6 + 4n − 4] = 325<br>
n/2 (4n + 2) = 325<br>
n(2n + 1) = 325<br>
2n² + n − 325 = 0<br>
Solve using quadratic formula or inspection: n = 13
</div>

<h3>2. Geometric Sequences</h3>
<p>A geometric sequence has a constant ratio between consecutive terms. This constant is called the <strong>common ratio (r)</strong>.</p>
<div class="formula">Tₙ = arⁿ⁻¹</div>
<div class="formula">Sₙ = a(rⁿ − 1)/(r − 1) (r ≠ 1)</div>
<div class="formula">S∞ = a/(1 − r) (|r| < 1)</div>
<div class="example">
<strong>Example 4:</strong> For the sequence 3, 6, 12, 24… find the sum of the first 8 terms.<br><br>
a = 3, r = 2<br>
S₈ = 3(2⁸ − 1)/(2 − 1) = 3(256 − 1) = 3 × 255 = 765
</div>
<div class="example">
<strong>Example 5:</strong> Find the sum to infinity of 16 + 8 + 4 + 2 + …<br><br>
a = 16, r = 1/2<br>
S∞ = 16/(1 − 0.5) = 16/0.5 = 32
</div>
<div class="example">
<strong>Example 6:</strong> The first term of a geometric sequence is 5 and the common ratio is ½. Find S∞.<br><br>
S∞ = 5/(1 − 0.5) = 10
</div>
<div class="example">
<strong>Example 7:</strong> Which term of the sequence 2, 6, 18, 54… is equal to 486?<br><br>
2 × 3ⁿ⁻¹ = 486<br>
3ⁿ⁻¹ = 243 = 3⁵<br>
n − 1 = 5 → n = 6<br>
The 6th term is 486.
</div>
`},

{id:"finance",title:"Financial Maths – Complete Guide",subject:"Mathematics",grade:12,content:`
<h3>1. Simple Interest</h3>
<div class="formula">A = P(1 + in)</div>
<ul>
<li>P = principal (starting amount)</li>
<li>i = interest rate per year (as a decimal)</li>
<li>n = number of years</li>
<li>A = final amount</li>
</ul>
<div class="example">
<strong>Example 1:</strong> R5 000 is invested at 10% p.a. simple interest for 4 years. Find the final amount.<br><br>
A = 5000(1 + 0.10 × 4) = 5000(1.4) = R7 000
</div>

<h3>2. Compound Interest</h3>
<div class="formula">A = P(1 + i)ⁿ</div>
<div class="example">
<strong>Example 2:</strong> R15 000 is invested at 8% p.a. compounded annually for 5 years.<br><br>
A = 15000(1.08)⁵ ≈ R22 039.92
</div>
<div class="example">
<strong>Example 3:</strong> R10 000 is invested at 9% p.a. compounded monthly for 3 years.<br><br>
i = 0.09/12 = 0.0075<br>
n = 3 × 12 = 36<br>
A = 10000(1.0075)³⁶ ≈ R13 090.32
</div>

<h3>3. Future Value of an Annuity (Savings)</h3>
<div class="formula">F = x[((1 + i)ⁿ − 1)/i]</div>
<p>x = regular payment</p>
<div class="example">
<strong>Example 4:</strong> How much must be deposited at the end of each year for 6 years to accumulate R50 000 if interest is 9% p.a. compounded annually?<br><br>
50000 = x[((1.09)⁶ − 1)/0.09]<br>
50000 = x[7.5233]<br>
x ≈ R6 646.04
</div>

<h3>4. Present Value of an Annuity (Loans)</h3>
<div class="formula">P = x[(1 − (1 + i)⁻ⁿ)/i]</div>
<div class="example">
<strong>Example 5:</strong> A loan of R80 000 is to be repaid with equal monthly payments over 5 years at 12% p.a. compounded monthly. Calculate the monthly payment.<br><br>
i = 0.12/12 = 0.01<br>
n = 5 × 12 = 60<br>
80000 = x[(1 − (1.01)⁻⁶⁰)/0.01]<br>
80000 = x[44.955]<br>
x ≈ R1 778.00
</div>

<h3>5. Effective Interest Rate</h3>
<div class="formula">i_eff = (1 + i/m)ᵐ − 1</div>
<div class="example">
<strong>Example 6:</strong> Convert a nominal rate of 12% p.a. compounded monthly to an effective annual rate.<br><br>
i_eff = (1 + 0.12/12)¹² − 1 = (1.01)¹² − 1 ≈ 0.1268 = 12.68%
</div>
`},

{id:"analytical",title:"Analytical Geometry",subject:"Mathematics",grade:12,content:`
<h3>1. Distance Formula</h3>
<div class="formula">d = √[(x₂ − x₁)² + (y₂ − y₁)²]</div>
<div class="example">
<strong>Example 1:</strong> Find the distance between A(1, 2) and B(4, 6).<br><br>
d = √[(4−1)² + (6−2)²] = √[9 + 16] = √25 = 5
</div>

<h3>2. Gradient Formula</h3>
<div class="formula">m = (y₂ − y₁)/(x₂ − x₁)</div>
<div class="example">
<strong>Example 2:</strong> Find the gradient of the line joining A(1, 2) and B(4, 6).<br><br>
m = (6 − 2)/(4 − 1) = 4/3
</div>

<h3>3. Midpoint Formula</h3>
<div class="formula">M = ((x₁ + x₂)/2 , (y₁ + y₂)/2)</div>
<div class="example">
<strong>Example 3:</strong> Find the midpoint of A(1, 2) and B(4, 6).<br><br>
M = ((1+4)/2 , (2+6)/2) = (2.5 , 4)
</div>

<h3>4. Equation of a Line</h3>
<div class="formula">y − y₁ = m(x − x₁)</div>
<div class="example">
<strong>Example 4:</strong> Find the equation of the line through (2, 3) with gradient −1.<br><br>
y − 3 = −1(x − 2)<br>
y − 3 = −x + 2<br>
y = −x + 5
</div>
<div class="example">
<strong>Example 5:</strong> Find the equation of the line through (1, 4) and (3, 10).<br><br>
m = (10−4)/(3−1) = 3<br>
y − 4 = 3(x − 1)<br>
y = 3x + 1
</div>
`},

{id:"newton",title:"Newton’s Laws – Complete Guide",subject:"Physical Sciences",grade:12,content:`
<h3>1. Newton’s First Law (Law of Inertia)</h3>
<p>An object will remain at rest or continue to move at constant velocity in a straight line unless acted upon by a non-zero net force.</p>
<div class="example">
<strong>Key idea:</strong> Objects resist changes in their motion. This resistance is called inertia. The greater the mass, the greater the inertia.
</div>

<h3>2. Newton’s Second Law</h3>
<div class="formula">F<sub>net</sub> = ma</div>
<ul>
<li>F<sub>net</sub> is measured in newtons (N)</li>
<li>m is mass in kilograms (kg)</li>
<li>a is acceleration in m·s⁻²</li>
<li>The direction of acceleration is the same as the direction of the net force</li>
</ul>
<div class="example">
<strong>Example 1:</strong> A 5 kg box is pulled by a force of 20 N. Friction is 5 N. Calculate the acceleration.<br><br>
F<sub>net</sub> = 20 − 5 = 15 N<br>
a = F<sub>net</sub>/m = 15/5 = 3 m·s⁻²
</div>
<div class="example">
<strong>Example 2:</strong> A 10 kg box is pulled up a frictionless incline of 30° by a force of 80 N parallel to the incline. Find the acceleration.<br><br>
Component of weight down the incline = mg sinθ = 10 × 9.8 × sin30° = 49 N<br>
F<sub>net</sub> = 80 − 49 = 31 N<br>
a = 31/10 = 3.1 m·s⁻² up the incline
</div>
<div class="example">
<strong>Example 3:</strong> A 2 kg object accelerates at 4 m·s⁻². Calculate the net force acting on it.<br><br>
F<sub>net</sub> = ma = 2 × 4 = 8 N
</div>
<div class="example">
<strong>Example 4:</strong> A 6 kg object experiences a net force of 24 N. Find its acceleration.<br><br>
a = 24/6 = 4 m·s⁻²
</div>
<div class="example">
<strong>Example 5:</strong> Calculate the weight of a 70 kg person (g = 9.8 m·s⁻²).<br><br>
W = mg = 70 × 9.8 = 686 N
</div>
<div class="example">
<strong>Example 6:</strong> A force of 15 N acts on a 3 kg object on a frictionless surface. Find the acceleration and the distance travelled from rest in 4 s.<br><br>
a = 15/3 = 5 m·s⁻²<br>
Δx = ut + ½at² = 0 + ½(5)(16) = 40 m
</div>

<h3>3. Newton’s Third Law</h3>
<p>For every action force there is an equal and opposite reaction force. The two forces act on different objects.</p>
<div class="example">
<strong>Example 7:</strong> When you push against a wall with 50 N, the wall pushes back on you with 50 N. These forces do not cancel because they act on different objects.
</div>
`},

{id:"momentum",title:"Momentum & Impulse – Complete Guide",subject:"Physical Sciences",grade:12,content:`
<h3>1. Momentum</h3>
<div class="formula">p = mv</div>
<ul>
<li>p = momentum (kg·m·s⁻¹)</li>
<li>m = mass (kg)</li>
<li>v = velocity (m·s⁻¹)</li>
<li>Momentum is a vector quantity</li>
</ul>
<div class="example">
<strong>Example 1:</strong> Calculate the momentum of a 2 kg object moving at 3 m·s⁻¹.<br><br>
p = 2 × 3 = 6 kg·m·s⁻¹
</div>

<h3>2. Impulse</h3>
<div class="formula">Impulse = FΔt = Δp = mv − mu</div>
<ul>
<li>Impulse is equal to the change in momentum</li>
<li>Unit of impulse: N·s or kg·m·s⁻¹</li>
</ul>
<div class="example">
<strong>Example 2:</strong> A 0.5 kg ball moving at 10 m·s⁻¹ hits a wall and rebounds at 6 m·s⁻¹. Calculate the change in momentum.<br><br>
Take original direction as positive:<br>
Δp = m(v − u) = 0.5(−6 − 10) = 0.5(−16) = −8 kg·m·s⁻¹
</div>
<div class="example">
<strong>Example 3:</strong> A force of 20 N acts on a 4 kg object for 0.5 s. Calculate the change in velocity.<br><br>
Impulse = FΔt = 20 × 0.5 = 10 N·s<br>
Δp = 10 = mΔv → 10 = 4Δv → Δv = 2.5 m·s⁻¹
</div>

<h3>3. Conservation of Momentum</h3>
<div class="formula">m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂</div>
<p>Total momentum before collision = total momentum after collision (when no external forces act).</p>
<div class="example">
<strong>Example 4:</strong> A 2 kg object moving at 6 m·s⁻¹ collides with a stationary 3 kg object. They stick together. Find their common velocity after the collision.<br><br>
Momentum before = 2×6 + 3×0 = 12<br>
Momentum after = (2+3)v = 5v<br>
5v = 12 → v = 2.4 m·s⁻¹
</div>
<div class="example">
<strong>Example 5:</strong> A 3 kg object moving at 4 m·s⁻¹ collides with a stationary 1 kg object. After the collision the 3 kg object continues at 2 m·s⁻¹. Find the velocity of the 1 kg object.<br><br>
3×4 + 1×0 = 3×2 + 1×v<br>
12 = 6 + v → v = 6 m·s⁻¹
</div>
<div class="example">
<strong>Example 6:</strong> Distinguish between elastic and inelastic collisions.<br><br>
<strong>Elastic:</strong> Momentum and kinetic energy are both conserved.<br>
<strong>Inelastic:</strong> Momentum is conserved but kinetic energy is not (objects may stick together).
</div>
`},

{id:"work-energy",title:"Work, Energy & Power – Complete Guide",subject:"Physical Sciences",grade:12,content:`
<h3>1. Work</h3>
<div class="formula">W = FΔx cosθ</div>
<ul>
<li>W = work (Joules)</li>
<li>F = force (N)</li>
<li>Δx = displacement (m)</li>
<li>θ = angle between force and displacement</li>
</ul>
<div class="example">
<strong>Example 1:</strong> A force of 50 N pushes a box 8 m horizontally. Calculate the work done.<br><br>
W = 50 × 8 × cos0° = 400 J
</div>
<div class="example">
<strong>Example 2:</strong> A force of 30 N is applied at 60° to the horizontal and moves an object 5 m. Calculate the work done.<br><br>
W = 30 × 5 × cos60° = 150 × 0.5 = 75 J
</div>

<h3>2. Kinetic Energy</h3>
<div class="formula">Eₖ = ½mv²</div>
<div class="example">
<strong>Example 3:</strong> Calculate the kinetic energy of a 4 kg object moving at 5 m·s⁻¹.<br><br>
Eₖ = ½ × 4 × 25 = 50 J
</div>

<h3>3. Potential Energy</h3>
<div class="formula">Eₚ = mgh</div>
<div class="example">
<strong>Example 4:</strong> A 2 kg object is held 5 m above the ground. Calculate its gravitational potential energy.<br><br>
Eₚ = 2 × 9.8 × 5 = 98 J
</div>
<div class="example">
<strong>Example 5:</strong> An object falls from a height of 5 m. What is its kinetic energy just before it hits the ground? (Ignore air resistance)<br><br>
By conservation of energy: Eₖ = Eₚ = mgh = 98 J (for a 2 kg object)
</div>

<h3>4. Power</h3>
<div class="formula">P = W/Δt = Fv</div>
<div class="example">
<strong>Example 6:</strong> A machine does 1200 J of work in 4 s. Calculate the power.<br><br>
P = 1200/4 = 300 W
</div>
<div class="example">
<strong>Example 7:</strong> A force of 30 N moves an object at a constant speed of 4 m·s⁻¹. Calculate the power.<br><br>
P = Fv = 30 × 4 = 120 W
</div>
`},

{id:"circuits",title:"Electric Circuits – Complete Guide",subject:"Physical Sciences",grade:12,content:`
<h3>1. Ohm’s Law</h3>
<div class="formula">V = IR</div>
<ul>
<li>V = voltage (V)</li>
<li>I = current (A)</li>
<li>R = resistance (Ω)</li>
</ul>
<div class="example">
<strong>Example 1:</strong> A current of 2 A flows through a 12 Ω resistor. Calculate the voltage and the power.<br><br>
V = IR = 2 × 12 = 24 V<br>
P = VI = 24 × 2 = 48 W or P = I²R = 4 × 12 = 48 W
</div>

<h3>2. Resistors in Series</h3>
<div class="formula">R<sub>total</sub> = R₁ + R₂ + R₃ + …</div>
<ul>
<li>Current is the same through each resistor</li>
<li>Voltage divides across the resistors</li>
</ul>
<div class="example">
<strong>Example 2:</strong> Three resistors of 2 Ω, 3 Ω and 6 Ω are connected in series across a 22 V supply. Find the total resistance and the current.<br><br>
R<sub>total</sub> = 2 + 3 + 6 = 11 Ω<br>
I = V/R = 22/11 = 2 A
</div>

<h3>3. Resistors in Parallel</h3>
<div class="formula">1/R<sub>total</sub> = 1/R₁ + 1/R₂ + 1/R₃ + …</div>
<ul>
<li>Voltage is the same across each resistor</li>
<li>Current divides between the branches</li>
</ul>
<div class="example">
<strong>Example 3:</strong> Calculate the total resistance of a 4 Ω and a 6 Ω resistor in parallel.<br><br>
1/R = 1/4 + 1/6 = 3/12 + 2/12 = 5/12<br>
R = 12/5 = 2.4 Ω
</div>
<div class="example">
<strong>Example 4:</strong> Three 6 Ω resistors are connected in parallel. Find the total resistance.<br><br>
1/R = 1/6 + 1/6 + 1/6 = 3/6 = 1/2<br>
R = 2 Ω
</div>
<div class="example">
<strong>Example 5:</strong> Two 8 Ω resistors are connected in parallel. This combination is then connected in series with a 4 Ω resistor. Find the total resistance.<br><br>
Parallel part: 1/R = 1/8 + 1/8 = 1/4 → R = 4 Ω<br>
Total = 4 + 4 = 8 Ω
</div>

<h3>4. Power</h3>
<div class="formula">P = VI = I²R = V²/R</div>
<div class="example">
<strong>Example 6:</strong> A 60 W bulb is connected to a 12 V supply. Calculate the current and the resistance of the bulb.<br><br>
I = P/V = 60/12 = 5 A<br>
R = V/I = 12/5 = 2.4 Ω
</div>
`},

{id:"waves",title:"Waves, Sound & Light",subject:"Physical Sciences",grade:12,content:`
<h3>1. Basic Wave Equation</h3>
<div class="formula">v = fλ</div>
<ul>
<li>v = wave speed (m·s⁻¹)</li>
<li>f = frequency (Hz)</li>
<li>λ = wavelength (m)</li>
</ul>
<div class="formula">T = 1/f</div>
<p>T is the period (time for one complete wave).</p>
<div class="example">
<strong>Example 1:</strong> A wave has a frequency of 50 Hz and a wavelength of 2 m. Calculate its speed.<br><br>
v = fλ = 50 × 2 = 100 m·s⁻¹
</div>
<div class="example">
<strong>Example 2:</strong> The speed of sound is 340 m·s⁻¹ and the frequency is 170 Hz. Calculate the wavelength and the period.<br><br>
λ = v/f = 340/170 = 2 m<br>
T = 1/f = 1/170 ≈ 0.0059 s
</div>
<div class="example">
<strong>Example 3:</strong> A wave travels at 12 m·s⁻¹ and has a wavelength of 3 m. Find its frequency and period.<br><br>
f = v/λ = 12/3 = 4 Hz<br>
T = 1/4 = 0.25 s
</div>

<h3>2. Important Concepts</h3>
<ul>
<li><strong>Amplitude</strong> – maximum displacement from the rest position</li>
<li><strong>Frequency</strong> – number of waves per second</li>
<li><strong>Period</strong> – time for one complete wave</li>
<li><strong>Wavelength</strong> – distance between two successive crests (or troughs)</li>
</ul>
<div class="example">
<strong>Example 4:</strong> If the frequency of a wave doubles and the speed stays constant, what happens to the wavelength?<br><br>
From v = fλ, if f doubles then λ is halved.
</div>
`},

{id:"cell-division",title:"Cell Division – Complete Guide",subject:"Life Sciences",grade:12,content:`
<h3>1. Mitosis</h3>
<p><strong>Purpose:</strong> Growth, repair, asexual reproduction.</p>
<p><strong>Result:</strong> Two genetically identical diploid cells.</p>
<ol>
<li><strong>Prophase</strong> – Chromosomes condense, nuclear membrane disappears, spindle forms</li>
<li><strong>Metaphase</strong> – Chromosomes line up at the equator</li>
<li><strong>Anaphase</strong> – Sister chromatids pulled to opposite poles</li>
<li><strong>Telophase</strong> – Nuclear membranes reform, cytokinesis occurs</li>
</ol>
<div class="example">
<strong>Key point:</strong> Chromosome number stays the same (diploid → diploid)
</div>

<h3>2. Meiosis</h3>
<p><strong>Purpose:</strong> Produce gametes (sperm and eggs).</p>
<p><strong>Result:</strong> Four genetically different haploid cells.</p>
<ul>
<li><strong>Meiosis I</strong> – Homologous chromosomes separate. Crossing over occurs in Prophase I.</li>
<li><strong>Meiosis II</strong> – Sister chromatids separate (similar to mitosis).</li>
</ul>
<div class="example">
<strong>Importance:</strong> Maintains chromosome number at fertilisation and creates genetic variation through crossing over and independent assortment.
</div>
`},

{id:"genetics",title:"Genetics & Inheritance – Complete Guide",subject:"Life Sciences",grade:12,content:`
<h3>1. Key Terms</h3>
<ul>
<li><strong>Gene</strong> – DNA section coding for a characteristic</li>
<li><strong>Allele</strong> – Different form of a gene</li>
<li><strong>Genotype</strong> – Genetic make-up (e.g. Bb)</li>
<li><strong>Phenotype</strong> – Physical expression</li>
<li><strong>Homozygous</strong> – Two same alleles (BB or bb)</li>
<li><strong>Heterozygous</strong> – Two different alleles (Bb)</li>
<li><strong>Dominant</strong> – Expressed with one copy</li>
<li><strong>Recessive</strong> – Only expressed with two copies</li>
</ul>

<div class="example">
<strong>Monohybrid cross:</strong> Tt × Tt (T = tall, t = short)<br>
Genotypic ratio 1:2:1<br>
Phenotypic ratio 3 Tall : 1 Short
</div>
<div class="example">
<strong>Test cross:</strong> Used to determine if an individual showing the dominant trait is homozygous or heterozygous. Cross with homozygous recessive.
</div>

<h3>2. Sex Determination</h3>
<ul>
<li>Females: XX</li>
<li>Males: XY</li>
<li>Sperm determines the sex of the child</li>
</ul>
`},

{id:"human-reproduction",title:"Human Reproduction – Complete Guide",subject:"Life Sciences",grade:12,content:`
<h3>1. Male System</h3>
<ul>
<li><strong>Testes</strong> – produce sperm and testosterone</li>
<li><strong>Epididymis</strong> – stores mature sperm</li>
<li><strong>Vas deferens</strong> – carries sperm</li>
<li><strong>Prostate & seminal vesicles</strong> – produce seminal fluid</li>
</ul>

<h3>2. Female System</h3>
<ul>
<li><strong>Ovaries</strong> – produce eggs and hormones</li>
<li><strong>Fallopian tubes</strong> – site of fertilisation</li>
<li><strong>Uterus</strong> – embryo implants and develops</li>
<li><strong>Cervix & Vagina</strong> – birth canal</li>
</ul>

<h3>3. Menstrual Cycle (±28 days)</h3>
<ul>
<li><strong>Days 1–5:</strong> Menstruation</li>
<li><strong>Days 6–13:</strong> Follicular phase (oestrogen rises)</li>
<li><strong>Day 14:</strong> Ovulation</li>
<li><strong>Days 15–28:</strong> Luteal phase (progesterone maintains lining)</li>
</ul>
<div class="example">
<strong>Key hormones:</strong><br>
FSH – stimulates follicle development<br>
LH – triggers ovulation<br>
Oestrogen – repairs uterine lining<br>
Progesterone – maintains uterine lining
</div>
`},

{id:"mapwork",title:"Mapwork – Complete Guide",subject:"Geography",grade:12,content:`
<div class="formula">Real distance = Map distance × Scale factor</div>
<div class="example">
<strong>Example 1:</strong> 4.5 cm on 1:50 000 map = 2.25 km
</div>
<div class="example">
<strong>Example 2:</strong> 6.2 cm on 1:10 000 map = 620 m
</div>
<div class="example">
<strong>Example 3:</strong> Real distance 8 km, map distance 4 cm → Scale = 1:200 000
</div>
<div class="example">
<strong>Example 4:</strong> Bearing from A to B is measured clockwise from True North and written as three digits (e.g. 045°, 270°).
</div>
<ul>
<li>Close contours = steep slope</li>
<li>Wide contours = gentle slope</li>
<li>V-shaped contours pointing upstream = river valley</li>
<li>Contours forming closed loops usually indicate a hill</li>
</ul>
`},

{id:"climate",title:"Climate & Weather – Complete Guide",subject:"Geography",grade:12,content:`
<h3>1. Factors Affecting Temperature</h3>
<ul>
<li><strong>Latitude</strong> – cooler towards the poles</li>
<li><strong>Altitude</strong> – decreases ±6.5°C per 1000 m</li>
<li><strong>Distance from sea</strong> – maritime vs continental climates</li>
<li><strong>Ocean currents</strong> – warm currents raise temperature</li>
<li><strong>Aspect</strong> – north-facing slopes warmer in South Africa</li>
</ul>

<h3>2. South African Climate</h3>
<ul>
<li>Most of SA: summer rainfall</li>
<li>Western Cape: Mediterranean (winter rainfall)</li>
<li>Interior has greater temperature extremes than the coast</li>
</ul>

<div class="example">
<strong>Mid-latitude cyclones:</strong> Bring winter rain to the Western Cape. Move from west to east.
</div>
`},

{id:"geomorphology",title:"Geomorphology – Complete Guide",subject:"Geography",grade:12,content:`
<h3>1. River Processes</h3>
<ul>
<li><strong>Erosion</strong> – wearing away of bed and banks</li>
<li><strong>Transportation</strong> – suspension, solution, saltation, traction</li>
<li><strong>Deposition</strong> – material dropped when energy is lost</li>
</ul>

<h3>2. River Course</h3>
<ul>
<li><strong>Upper</strong> – V-shaped valleys, vertical erosion</li>
<li><strong>Middle</strong> – wider valleys</li>
<li><strong>Lower</strong> – floodplains, deposition dominant</li>
</ul>

<h3>3. Drainage Patterns</h3>
<ul>
<li><strong>Dendritic</strong> – tree-like (uniform rock)</li>
<li><strong>Trellis</strong> – parallel streams (folded areas)</li>
<li><strong>Radial</strong> – outwards from a high point</li>
</ul>
<div class="example">
<strong>Tip:</strong> In the upper course vertical erosion dominates; in the lower course deposition dominates.
</div>
`}
];

// ====================== QUIZZES ======================
const quizzes = [
{id:"quiz-functions",title:"Functions Quiz",subject:"Mathematics",grade:12,questions:[
  {q:"General form of a linear function?",options:["y = ax² + bx + c","y = mx + c","y = a/x","y = abˣ"],answer:1},
  {q:"If a > 0 the parabola:",options:["Opens downwards","Opens upwards","Is a straight line","Has no turning point"],answer:1},
  {q:"Turning point x-coordinate?",options:["b/2a","-b/2a","c/a","-c/b"],answer:1},
  {q:"Range of y = x²?",options:["All real numbers","y ≥ 0","y ≤ 0","x ≥ 0"],answer:1},
  {q:"Exponential growth has base:",options:["Between 0 and 1","Equal to 1","Greater than 1","Negative"],answer:2},
  {q:"The y-intercept of y = 3x − 5 is:",options:["3","-5","5","0"],answer:1},
  {q:"A hyperbola of the form y = a/x + q has vertical asymptote:",options:["y = q","x = 0","x = q","y = 0"],answer:1}
]},
{id:"quiz-calculus",title:"Differentiation Quiz",subject:"Mathematics",grade:12,questions:[
  {q:"Derivative of x³?",options:["3x²","x²","3x","x³"],answer:0},
  {q:"Product rule is used for:",options:["Sum of functions","Product of two functions","A constant","A single power"],answer:1},
  {q:"To find stationary points we set:",options:["f(x) = 0","f′′(x) = 0","f′(x) = 0","x = 0"],answer:2},
  {q:"Derivative of a constant is:",options:["1","The constant","0","Undefined"],answer:2},
  {q:"If f′′(x) > 0 at a stationary point it is a:",options:["Local maximum","Local minimum","Point of inflection","None"],answer:1},
  {q:"Derivative of 5x⁴ is:",options:["5x³","20x³","4x³","20x⁴"],answer:1},
  {q:"The quotient rule formula is:",options:["u′v + uv′","(u′v − uv′)/v²","u′ + v′","uv′"],answer:1}
]},
{id:"quiz-sequences",title:"Sequences & Series Quiz",subject:"Mathematics",grade:12,questions:[
  {q:"In an arithmetic sequence the common difference is:",options:["Ratio of terms","Difference between consecutive terms","First term","Last term"],answer:1},
  {q:"Geometric sequence nth term?",options:["a+(n-1)d","arⁿ⁻¹","n/2[2a+(n-1)d]","a/(1-r)"],answer:1},
  {q:"Sum to infinity is possible when:",options:["r > 1","|r| < 1","r = 1","r = 0"],answer:1},
  {q:"The first term of a sequence is called:",options:["d","r","a","n"],answer:2},
  {q:"Sₙ means:",options:["The nth term","Sum of the first n terms","The last term","Common difference"],answer:1},
  {q:"In the sequence 5, 9, 13, 17… the common difference is:",options:["5","4","3","2"],answer:1},
  {q:"For a geometric sequence with r = 2 and a = 3, T₄ is:",options:["6","12","24","48"],answer:2}
]},
{id:"quiz-finance",title:"Financial Maths Quiz",subject:"Mathematics",grade:12,questions:[
  {q:"A = P(1+i)ⁿ is used for:",options:["Simple interest","Compound interest","Annuities only","Depreciation"],answer:1},
  {q:"In the future value annuity formula, x represents:",options:["Final amount","Interest rate","Regular payment","Number of periods"],answer:2},
  {q:"Effective interest rate is higher than nominal when:",options:["Compounded once a year","Compounded more than once a year","Interest is simple","Never"],answer:1},
  {q:"Present value of an annuity calculates:",options:["Future value","What a series of payments is worth now","Interest only","Number of payments"],answer:1},
  {q:"i in the formulas represents:",options:["Number of years","Interest rate per period","Principal","Final amount"],answer:1},
  {q:"Simple interest formula is:",options:["A = P(1+i)ⁿ","A = P(1+in)","A = P + i","A = Piⁿ"],answer:1},
  {q:"If interest is compounded monthly, n for 3 years is:",options:["3","12","36","6"],answer:2}
]},
{id:"quiz-newton",title:"Newton’s Laws Quiz",subject:"Physical Sciences",grade:12,questions:[
  {q:"Newton’s Second Law?",options:["F = mv","F_net = ma","F = m/a","F = a/m"],answer:1},
  {q:"Newton’s First Law is the law of:",options:["Acceleration","Action-Reaction","Inertia","Gravity"],answer:2},
  {q:"Newton’s Third Law states:",options:["F = ma","Objects stay at rest","Action-reaction pairs","Momentum is conserved"],answer:2},
  {q:"Unit of force?",options:["Joule","Newton","Watt","Pascal"],answer:1},
  {q:"If net force is zero, acceleration is:",options:["Maximum","Zero","Constant but non-zero","Infinite"],answer:1},
  {q:"A 4 kg object has net force 12 N. Acceleration is:",options:["3 m·s⁻²","48 m·s⁻²","0.33 m·s⁻²","16 m·s⁻²"],answer:0},
  {q:"Weight is calculated by:",options:["W = ma","W = mg","W = mv","W = FΔt"],answer:1}
]},
{id:"quiz-momentum",title:"Momentum & Impulse Quiz",subject:"Physical Sciences",grade:12,questions:[
  {q:"Momentum formula?",options:["F × t","m × v","½mv²","mgh"],answer:1},
  {q:"Impulse equals:",options:["Change in momentum","Change in velocity","Force only","Mass only"],answer:0},
  {q:"In an inelastic collision objects:",options:["Bounce off","Stick together","Lose all momentum","Gain kinetic energy"],answer:1},
  {q:"Unit of momentum?",options:["N","J","kg·m/s","W"],answer:2},
  {q:"Momentum is conserved when:",options:["There is friction","External forces are zero","Objects stick","Always"],answer:1},
  {q:"A 2 kg object moving at 3 m·s⁻¹ has momentum:",options:["6 kg·m/s","1.5 kg·m/s","5 kg·m/s","9 kg·m/s"],answer:0},
  {q:"Impulse can also be written as:",options:["mv","FΔt","½mv²","mgh"],answer:1}
]},
{id:"quiz-circuits",title:"Electric Circuits Quiz",subject:"Physical Sciences",grade:12,questions:[
  {q:"In series total resistance is:",options:["Less than the smallest","Sum of the resistors","Product of the resistors","Always 1 Ω"],answer:1},
  {q:"In parallel the voltage across each resistor is:",options:["Different","The same","Zero","Half"],answer:1},
  {q:"Power can be calculated using:",options:["V×I only","I²R only","V²/R only","All of these"],answer:3},
  {q:"Ohm’s Law is:",options:["P = VI","V = IR","E = mc²","F = ma"],answer:1},
  {q:"Unit of resistance?",options:["Volt","Ampere","Ohm","Watt"],answer:2},
  {q:"Two 4 Ω resistors in parallel give total resistance:",options:["8 Ω","4 Ω","2 Ω","1 Ω"],answer:2},
  {q:"Current is measured in:",options:["Volts","Amperes","Ohms","Watts"],answer:1}
]},
{id:"quiz-cells",title:"Cell Division Quiz",subject:"Life Sciences",grade:12,questions:[
  {q:"Mitosis produces:",options:["4 haploid cells","2 identical diploid cells","4 identical cells","2 different cells"],answer:1},
  {q:"Meiosis is important for:",options:["Growth only","Producing gametes","Repairing wounds","Asexual reproduction"],answer:1},
  {q:"Chromosomes line up at the equator during:",options:["Prophase","Metaphase","Anaphase","Telophase"],answer:1},
  {q:"Crossing over occurs during:",options:["Mitosis","Meiosis I","Meiosis II","Cytokinesis"],answer:1},
  {q:"Result of meiosis is:",options:["2 diploid cells","4 haploid cells","2 haploid cells","4 diploid cells"],answer:1},
  {q:"Sister chromatids separate during:",options:["Prophase","Metaphase","Anaphase","Interphase"],answer:2},
  {q:"The purpose of mitosis is mainly:",options:["Genetic variation","Growth and repair","Producing gametes","Reducing chromosome number"],answer:1}
]},
{id:"quiz-genetics",title:"Genetics Quiz",subject:"Life Sciences",grade:12,questions:[
  {q:"Heterozygous means:",options:["Two identical alleles","Two different alleles","No alleles","Only dominant alleles"],answer:1},
  {q:"Monohybrid heterozygote cross phenotypic ratio?",options:["1:1","3:1","1:2:1","9:3:3:1"],answer:1},
  {q:"A recessive allele is expressed when:",options:["One copy is present","Two copies are present","It is dominant","It is heterozygous"],answer:1},
  {q:"Genotype refers to:",options:["Physical appearance","Genetic make-up","Environment","Only dominant traits"],answer:1},
  {q:"Males have sex chromosomes:",options:["XX","XY","YY","XO"],answer:1},
  {q:"Phenotype is:",options:["The genetic code","The physical expression of a gene","Always dominant","Only found in males"],answer:1},
  {q:"An example of a homozygous dominant genotype is:",options:["Bb","bb","BB","XY"],answer:2}
]},
{id:"quiz-reproduction",title:"Human Reproduction Quiz",subject:"Life Sciences",grade:12,questions:[
  {q:"Fertilisation usually takes place in the:",options:["Uterus","Ovary","Fallopian tube","Vagina"],answer:2},
  {q:"Ovulation usually occurs around day:",options:["1","7","14","28"],answer:2},
  {q:"Hormone that maintains the uterine lining?",options:["Oestrogen","Testosterone","Progesterone","FSH"],answer:2},
  {q:"Sperm is produced in the:",options:["Prostate","Testes","Epididymis","Vas deferens"],answer:1},
  {q:"The egg is released from the:",options:["Uterus","Fallopian tube","Ovary","Cervix"],answer:2},
  {q:"The site of embryo implantation is the:",options:["Ovary","Fallopian tube","Uterus","Vagina"],answer:2},
  {q:"Testosterone is produced by the:",options:["Prostate","Testes","Seminal vesicles","Epididymis"],answer:1}
]},
{id:"quiz-mapwork",title:"Mapwork Quiz",subject:"Geography",grade:12,questions:[
  {q:"Bearing is measured:",options:["Anti-clockwise from North","Clockwise from North","From the East","From the South"],answer:1},
  {q:"Close contour lines indicate:",options:["Gentle slope","Flat land","Steep slope","A river"],answer:2},
  {q:"On a 1:50 000 map, 2 cm represents:",options:["0.5 km","1 km","2 km","5 km"],answer:1},
  {q:"A bearing of 090° means:",options:["North","East","South","West"],answer:1},
  {q:"Contour lines that form a V pointing upstream indicate:",options:["A ridge","A river valley","A hill","A depression"],answer:1},
  {q:"Widely spaced contour lines mean:",options:["Steep slope","Gentle slope","Cliff","Depression"],answer:1},
  {q:"The scale 1:10 000 means 1 cm on the map represents:",options:["10 m","100 m","1 km","10 km"],answer:1}
]},
{id:"quiz-climate",title:"Climate & Weather Quiz",subject:"Geography",grade:12,questions:[
  {q:"Temperature generally decreases with:",options:["Increasing latitude","Decreasing altitude","Moving closer to the sea","Warm ocean currents"],answer:0},
  {q:"The Western Cape mainly receives rainfall in:",options:["Summer","Winter","Autumn only","All year equally"],answer:1},
  {q:"Mid-latitude cyclones bring rain mainly to:",options:["KwaZulu-Natal","Limpopo","Western Cape","Mpumalanga"],answer:2},
  {q:"Altitude effect on temperature:",options:["Increases with height","Decreases with height","No effect","Only at night"],answer:1},
  {q:"A maritime climate has:",options:["Large temperature range","Small temperature range","No rain","Only snow"],answer:1},
  {q:"Temperature decreases approximately how much per 1000 m?",options:["1°C","3°C","6.5°C","10°C"],answer:2},
  {q:"Most of South Africa has:",options:["Winter rainfall","Summer rainfall","Rain all year","No rain"],answer:1}
]},
{id:"quiz-geomorphology",title:"Geomorphology Quiz",subject:"Geography",grade:12,questions:[
  {q:"Dominant process in the upper course of a river?",options:["Deposition","Lateral erosion","Vertical erosion","Transportation only"],answer:2},
  {q:"A dendritic drainage pattern looks like:",options:["Parallel lines","A tree","A circle","A grid"],answer:1},
  {q:"Deposition occurs when a river:",options:["Gains energy","Loses energy","Flows faster","Erodes more"],answer:1},
  {q:"V-shaped valleys are found in the:",options:["Lower course","Middle course","Upper course","Mouth"],answer:2},
  {q:"Trellis drainage is common in:",options:["Uniform rock","Folded areas","Volcanic areas","Deserts"],answer:1},
  {q:"In the lower course the dominant process is:",options:["Vertical erosion","Deposition","Headward erosion","None"],answer:1},
  {q:"Radial drainage patterns develop around:",options:["Folded mountains","A central high point","Fault lines","Coastal plains"],answer:1}
]}
];
