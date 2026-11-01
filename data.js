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
<h3>1. What is a Function?</h3>
<p>A function assigns exactly one output value (y) to every input value (x). Written as y = f(x).</p>
<ul>
<li><strong>Domain</strong> – all allowed x-values</li>
<li><strong>Range</strong> – all possible y-values</li>
</ul>

<h3>2. Linear Functions</h3>
<div class="formula">y = mx + c</div>
<ul>
<li>m = gradient</li>
<li>c = y-intercept</li>
</ul>
<div class="example">
<strong>Example 1:</strong> Line through (2, 5) with gradient 3.<br>
y − 5 = 3(x − 2)<br>
y = 3x − 1
</div>
<div class="example">
<strong>Example 2:</strong> Line through A(1, 2) and B(4, 8).<br>
m = (8−2)/(4−1) = 2<br>
y − 2 = 2(x − 1)<br>
y = 2x
</div>
<div class="example">
<strong>Example 3:</strong> Find x-intercept of y = 2x − 6.<br>
0 = 2x − 6 → x = 3
</div>

<h3>3. Quadratic Functions</h3>
<div class="formula">y = ax² + bx + c</div>
<ul>
<li>a > 0 → opens up (minimum)</li>
<li>a < 0 → opens down (maximum)</li>
<li>Turning point: x = −b/(2a)</li>
</ul>
<div class="example">
<strong>Example 4:</strong> f(x) = 2x² − 8x + 3<br>
x = 8/4 = 2<br>
f(2) = −5 → minimum at (2, −5)
</div>
<div class="example">
<strong>Example 5:</strong> Find x-intercepts of y = x² − 5x + 6<br>
(x−2)(x−3)=0 → x=2 or x=3
</div>
<div class="example">
<strong>Example 6:</strong> Complete the square: y = x² − 6x + 5<br>
y = (x−3)² − 4<br>
Turning point: (3, −4)
</div>
<div class="example">
<strong>Example 7:</strong> Does y = −x² + 4x − 7 have a maximum or minimum?<br>
a = −1 < 0 → maximum
</div>

<h3>4. Exponential Functions</h3>
<div class="formula">y = abˣ</div>
<ul>
<li>b > 1 → growth</li>
<li>0 < b < 1 → decay</li>
</ul>
<div class="example">
<strong>Example 8:</strong> Population starts at 500 and doubles yearly. After 4 years?<br>
500 × 2⁴ = 8000
</div>
<div class="example">
<strong>Example 9:</strong> A car worth R200 000 depreciates by 15% per year. Value after 3 years?<br>
200000 × (0.85)³ ≈ R122 825
</div>

<h3>5. Hyperbola</h3>
<div class="formula">y = a/x + q</div>
<ul>
<li>Vertical asymptote: x = 0</li>
<li>Horizontal asymptote: y = q</li>
</ul>
`},

{id:"calculus",title:"Differentiation – Complete Guide",subject:"Mathematics",grade:12,content:`
<h3>1. Basic Rules</h3>
<div class="formula">d/dx [xⁿ] = n xⁿ⁻¹</div>
<div class="formula">d/dx [constant] = 0</div>
<div class="example">
<strong>Example 1:</strong> y = 5x⁴ − 3x² + 7x − 2<br>
dy/dx = 20x³ − 6x + 7
</div>
<div class="example">
<strong>Example 2:</strong> y = 4x³ − 1/x² + 6<br>
y = 4x³ − x⁻² + 6<br>
dy/dx = 12x² + 2x⁻³ = 12x² + 2/x³
</div>
<div class="example">
<strong>Example 3:</strong> y = √x + 3/x<br>
y = x¹ᐟ² + 3x⁻¹<br>
dy/dx = (1/2)x⁻¹ᐟ² − 3x⁻² = 1/(2√x) − 3/x²
</div>

<h3>2. Product Rule</h3>
<div class="formula">(uv)′ = u′v + uv′</div>
<div class="example">
<strong>Example 4:</strong> y = (3x+1)(x²−4)<br>
u′=3, v′=2x<br>
dy/dx = 3(x²−4) + (3x+1)(2x) = 9x² + 2x − 12
</div>
<div class="example">
<strong>Example 5:</strong> y = x²(2x−5)<br>
dy/dx = 2x(2x−5) + x²(2) = 6x² − 10x
</div>
<div class="example">
<strong>Example 6:</strong> y = (x+2)(x−3)<br>
dy/dx = 1(x−3) + (x+2)(1) = 2x − 1
</div>

<h3>3. Quotient Rule</h3>
<div class="formula">(u/v)′ = (u′v − uv′)/v²</div>
<div class="example">
<strong>Example 7:</strong> y = (2x+3)/(x−1)<br>
dy/dx = [2(x−1) − (2x+3)(1)]/(x−1)² = −5/(x−1)²
</div>
<div class="example">
<strong>Example 8:</strong> y = x²/(x+1)<br>
dy/dx = [2x(x+1) − x²(1)]/(x+1)² = (x² + 2x)/(x+1)²
</div>

<h3>4. Stationary Points</h3>
<ol>
<li>Find dy/dx</li>
<li>Set dy/dx = 0 and solve</li>
<li>Find y-values</li>
<li>Second derivative test: f′′>0 → min, f′′<0 → max</li>
</ol>
<div class="example">
<strong>Example 9:</strong> f(x) = x³ − 6x² + 9x + 1<br>
f′(x) = 3x² − 12x + 9 = 0 → x=1 or x=3<br>
(1,5) local max • (3,1) local min
</div>
<div class="example">
<strong>Example 10:</strong> f(x) = x² − 4x + 3<br>
f′(x) = 2x − 4 = 0 → x=2<br>
f(2) = −1 → minimum at (2,−1)
</div>
`},

{id:"sequences",title:"Sequences & Series – Complete Guide",subject:"Mathematics",grade:12,content:`
<h3>1. Arithmetic Sequences</h3>
<div class="formula">Tₙ = a + (n−1)d</div>
<div class="formula">Sₙ = n/2 [2a + (n−1)d]</div>
<div class="formula">Sₙ = n/2 (a + l)</div>
<div class="example">
<strong>Example 1:</strong> 7, 12, 17, 22… Find T₁₅ and S₁₅.<br>
a=7, d=5<br>
T₁₅ = 7 + 14×5 = 77<br>
S₁₅ = 15/2 × (14 + 70) = 630
</div>
<div class="example">
<strong>Example 2:</strong> 4th term is 17, 9th term is 32. Find a and d.<br>
a+3d=17<br>
a+8d=32<br>
Subtract: 5d=15 → d=3 → a=8
</div>
<div class="example">
<strong>Example 3:</strong> How many terms of 3, 7, 11… add up to 325?<br>
Sₙ = n/2 [6 + (n−1)4] = 325<br>
2n + 2n² = 325 → n² + n − 162.5 = 0<br>
n = 13 (check)
</div>

<h3>2. Geometric Sequences</h3>
<div class="formula">Tₙ = arⁿ⁻¹</div>
<div class="formula">Sₙ = a(rⁿ − 1)/(r − 1)</div>
<div class="formula">S∞ = a/(1 − r) (|r| < 1)</div>
<div class="example">
<strong>Example 4:</strong> 3, 6, 12, 24… Sum of first 8 terms.<br>
S₈ = 3(2⁸ − 1)/(2−1) = 765
</div>
<div class="example">
<strong>Example 5:</strong> Sum to infinity of 16 + 8 + 4 + 2…<br>
S∞ = 16/(1−0.5) = 32
</div>
<div class="example">
<strong>Example 6:</strong> First term 5, common ratio 1/2. Find S∞.<br>
S∞ = 5/(1−0.5) = 10
</div>
<div class="example">
<strong>Example 7:</strong> Which term of 2, 6, 18… is 486?<br>
2 × 3ⁿ⁻¹ = 486 → 3ⁿ⁻¹ = 243 = 3⁵ → n = 6
</div>
`},

{id:"finance",title:"Financial Maths – Complete Guide",subject:"Mathematics",grade:12,content:`
<div class="formula">Simple Interest: A = P(1 + in)</div>
<div class="formula">Compound Interest: A = P(1 + i)ⁿ</div>
<div class="formula">Future Value Annuity: F = x[((1+i)ⁿ − 1)/i]</div>
<div class="formula">Present Value Annuity: P = x[(1 − (1+i)⁻ⁿ)/i]</div>

<div class="example">
<strong>Example 1:</strong> R15 000 at 8% p.a. compounded annually for 5 years.<br>
A = 15000(1.08)⁵ ≈ R22 039.92
</div>
<div class="example">
<strong>Example 2:</strong> R10 000 at 9% p.a. compounded monthly for 3 years.<br>
i = 0.09/12 = 0.0075, n = 36<br>
A = 10000(1.0075)³⁶ ≈ R13 090.32
</div>
<div class="example">
<strong>Example 3:</strong> How much to deposit yearly for 6 years to get R50 000 at 9%?<br>
50000 = x[((1.09)⁶ − 1)/0.09]<br>
x ≈ R6 646
</div>
<div class="example">
<strong>Example 4:</strong> Convert 12% p.a. compounded monthly to effective rate.<br>
i_eff = (1.01)¹² − 1 ≈ 12.68%
</div>
<div class="example">
<strong>Example 5:</strong> R5 000 invested at 10% simple interest for 4 years.<br>
A = 5000(1 + 0.10×4) = R7 000
</div>
<div class="example">
<strong>Example 6:</strong> A loan of R80 000 is repaid with equal monthly payments over 5 years at 12% p.a. compounded monthly. Find the monthly payment.<br>
i = 0.01, n = 60<br>
80000 = x[(1 − (1.01)⁻⁶⁰)/0.01]<br>
x ≈ R1 777.78
</div>
`},

{id:"analytical",title:"Analytical Geometry",subject:"Mathematics",grade:12,content:`
<div class="formula">Distance: d = √[(x₂−x₁)² + (y₂−y₁)²]</div>
<div class="formula">Gradient: m = (y₂−y₁)/(x₂−x₁)</div>
<div class="formula">Midpoint: M = ((x₁+x₂)/2 , (y₁+y₂)/2)</div>
<div class="example">
<strong>Example:</strong> Points A(1,2) and B(4,6)<br><br>
Distance = 5<br>
Midpoint = (2.5, 4)<br>
Gradient = 4/3
</div>
`},

{id:"newton",title:"Newton’s Laws – Complete Guide",subject:"Physical Sciences",grade:12,content:`
<h3>1. Newton’s First Law (Inertia)</h3>
<p>An object stays at rest or moves at constant velocity unless a net force acts on it.</p>

<h3>2. Newton’s Second Law</h3>
<div class="formula">F<sub>net</sub> = ma</div>
<div class="example">
<strong>Example 1:</strong> 5 kg box pulled by 20 N, friction 5 N.<br>
F_net = 15 N → a = 3 m·s⁻²
</div>
<div class="example">
<strong>Example 2:</strong> 10 kg box up frictionless 30° incline with 80 N parallel to incline.<br>
Component down = mg sin30° = 49 N<br>
F_net = 31 N → a = 3.1 m·s⁻²
</div>
<div class="example">
<strong>Example 3:</strong> 2 kg object accelerates at 4 m·s⁻². Find net force.<br>
F_net = 8 N
</div>
<div class="example">
<strong>Example 4:</strong> A 6 kg object experiences a net force of 24 N. Find acceleration.<br>
a = 4 m·s⁻²
</div>
<div class="example">
<strong>Example 5:</strong> Weight of a 70 kg person.<br>
W = mg = 70 × 9.8 = 686 N
</div>

<h3>3. Newton’s Third Law</h3>
<p>For every action there is an equal and opposite reaction. The forces act on different objects.</p>
`},

{id:"momentum",title:"Momentum & Impulse – Complete Guide",subject:"Physical Sciences",grade:12,content:`
<div class="formula">p = mv</div>
<div class="formula">Impulse = FΔt = Δp = mv − mu</div>
<div class="formula">m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂</div>

<div class="example">
<strong>Example 1:</strong> 2 kg at 6 m/s collides and sticks to 3 kg at rest.<br>
Common velocity = 2.4 m·s⁻¹
</div>
<div class="example">
<strong>Example 2:</strong> 0.5 kg ball at 10 m/s rebounds at 6 m/s.<br>
Δp = −8 kg·m·s⁻¹
</div>
<div class="example">
<strong>Example 3:</strong> Force of 20 N acts on 4 kg object for 0.5 s. Find change in velocity.<br>
Impulse = 10 → Δv = 2.5 m·s⁻¹
</div>
<div class="example">
<strong>Example 4:</strong> 3 kg object at 4 m/s collides elastically with stationary 1 kg object. If 3 kg object continues at 2 m/s, find velocity of 1 kg object.<br>
12 = 6 + 1×v → v = 6 m·s⁻¹
</div>
`},

{id:"work-energy",title:"Work, Energy & Power – Complete Guide",subject:"Physical Sciences",grade:12,content:`
<div class="formula">W = FΔx cosθ</div>
<div class="formula">Eₖ = ½mv²</div>
<div class="formula">Eₚ = mgh</div>
<div class="formula">P = W/Δt = Fv</div>

<div class="example">
<strong>Example 1:</strong> A 50 N force pushes a box 8 m horizontally. Calculate work done.<br><br>
W = 50 × 8 = 400 J
</div>
<div class="example">
<strong>Example 2:</strong> A 2 kg object falls from a height of 5 m. Find its kinetic energy just before hitting the ground.<br><br>
Eₖ = mgh = 2×9.8×5 = 98 J
</div>
<div class="example">
<strong>Example 3:</strong> A machine does 1200 J of work in 4 s. Calculate power.<br><br>
P = 1200/4 = 300 W
</div>
<div class="example">
<strong>Example 4:</strong> A force of 30 N moves an object at constant speed of 4 m·s⁻¹. Calculate power.<br><br>
P = Fv = 30×4 = 120 W
</div>
`},

{id:"circuits",title:"Electric Circuits – Complete Guide",subject:"Physical Sciences",grade:12,content:`
<div class="formula">V = IR</div>
<div class="formula">Series: R = R₁ + R₂ + …</div>
<div class="formula">Parallel: 1/R = 1/R₁ + 1/R₂ + …</div>
<div class="formula">P = VI = I²R = V²/R</div>

<div class="example">
<strong>Example 1:</strong> 4Ω and 6Ω in parallel.<br>
R = 2.4 Ω
</div>
<div class="example">
<strong>Example 2:</strong> 2 A through 12 Ω. Find V and P.<br>
V = 24 V • P = 48 W
</div>
<div class="example">
<strong>Example 3:</strong> 2Ω, 3Ω, 6Ω in series with 22 V.<br>
R = 11 Ω • I = 2 A
</div>
<div class="example">
<strong>Example 4:</strong> Two 8Ω in parallel then in series with 4Ω.<br>
Parallel = 4Ω • Total = 8Ω
</div>
<div class="example">
<strong>Example 5:</strong> Three 6Ω resistors in parallel. Find total resistance.<br>
1/R = 3/6 → R = 2 Ω
</div>
<div class="example">
<strong>Example 6:</strong> A 60 W bulb connected to 12 V. Find current and resistance.<br>
I = 5 A • R = 2.4 Ω
</div>
`},

{id:"waves",title:"Waves, Sound & Light",subject:"Physical Sciences",grade:12,content:`
<div class="formula">v = fλ</div>
<div class="formula">T = 1/f</div>
<div class="example">
<strong>Example 1:</strong> Frequency 50 Hz, wavelength 2 m. Find speed.<br><br>
v = 50 × 2 = 100 m·s⁻¹
</div>
<div class="example">
<strong>Example 2:</strong> Speed of sound 340 m·s⁻¹, frequency 170 Hz. Find wavelength and period.<br><br>
λ = 2 m T ≈ 0.0059 s
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
