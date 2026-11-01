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
  {id:"geo-p1-nov-2025",title:"Geography P1 Nov 2025 Eng",grade:12,subject:"Geography",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1cyk9dnh6Ztr45C_n8fkOkh6cB0xtw_lG/view"},
  {id:"geo-p1-mj-2025",title:"Geography P1 May-June 2025 Eng",grade:12,subject:"Geography",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1BosDIeUFOHPoUtKQBUDx7hRCJVVJqTxw/view"},
  {id:"geo-p1-mj-2025-mg",title:"Geography P1 May-June 2025 MG Eng",grade:12,subject:"Geography",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1yGgkfabfoUWcnLcURQ0tP7BIz1WBSug3/view"},
  {id:"geo-p2-mj-2025-mg",title:"Geography P2 May-June 2025 MG Eng",grade:12,subject:"Geography",year:2025,type:"Memo",link:"https://drive.google.com/file/d/18hA-Gjg-Pz2k6fbxecmysb0IcIzjgl_M/view"},
  {id:"geo-p1-nov-2025-mg",title:"Geography P1 Nov 2025 MG Eng",grade:12,subject:"Geography",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1CTKDCM1Sl0GHE2CoaOWmTbKcLhp0uzn8/view"},
  {id:"life-p1-nov-2025-mg",title:"Life Sciences P1 Nov 2025 MG Eng",grade:12,subject:"Life Sciences",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1gvEBfYZA3idNAOG7xhiXnOlUPyCLiZqs/view"},
  {id:"life-p1-mj-2025-mg",title:"Life Sciences P1 May-June 2025 MG Eng",grade:12,subject:"Life Sciences",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1jA9a-gImhY5o7YsiD-ZsOeQ_RDtvhMzN/view"},
  {id:"life-p2-mj-2025-mg",title:"Life Sciences P2 May-June 2025 MG Eng",grade:12,subject:"Life Sciences",year:2025,type:"Memo",link:"https://drive.google.com/file/d/17qFj44_6txn-z18CeD-fBc7Zherfzzil/view"},
  {id:"life-p1-mj-2025",title:"Life Sciences P1 May-June 2025 Eng",grade:12,subject:"Life Sciences",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1OyBX9IBg0N6uvmukWnAXhpDPJBTf13zg/view"},
  {id:"phys-p1-mj-2025-mg",title:"Physical Sciences P1 May-June 2025 MG Afr & Eng",grade:12,subject:"Physical Sciences",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1QI_iN1_Rjfogau4X-arGrLjP2Fq1fhkq/view"},
  {id:"phys-p2-mj-2025-mg",title:"Physical Sciences P2 May-June 2025 MG Afr & Eng",grade:12,subject:"Physical Sciences",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1OFLd3NETsvQgYSqs78niEMavFPl2Zb70/view"},
  {id:"phys-p2-mj-2025",title:"Physical Sciences P2 May-June 2025 Eng",grade:12,subject:"Physical Sciences",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1nxBBEZsteyB78-V1KN5HAuavmmacDa4n/view"},
  {id:"phys-p1-nov-2025",title:"Physical Sciences P1 Nov 2025 Eng",grade:12,subject:"Physical Sciences",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1bJRJeMsF-dZz0cNBpQZW1KoWKMTXvsl5/view"}
,
  {id:"life-p2-mj-2025",title:"Life Sciences P2 May-June 2025 Eng",grade:12,subject:"Life Sciences",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1BlzWPEOOB1JZB2hd7kdlN46YnEfUIeZI/view"},
  {id:"geo-p2-mj-2025",title:"Geography P2 May-June 2025 Eng",grade:12,subject:"Geography",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1TUostTEGGHHYciNelqsBrAdTIpwaJB5w/view"},
  {id:"math-p2-mj-2025-ab",title:"Mathematics P2 May-June 2025 Answer Book Afr & Eng",grade:12,subject:"Mathematics",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1nL-Eijtu5FauecSCZJModTT0DDxiFULL/view"},
  {id:"life-p1-nov-2025",title:"Life Sciences P1 Nov 2025 Eng",grade:12,subject:"Life Sciences",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1SHrS7gcAFDjkUqrk70LoLrxFf8qhX8dK/view"},
  {id:"phys-p1-nov-2025-mg",title:"Physical Sciences P1 Nov 2025 MG Afr & Eng",grade:12,subject:"Physical Sciences",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1ecSSoGqeMJ1gl2tm_5GPbaPwkT4MhA1F/view"},
  {id:"math-p2-nov-2025-ab",title:"Mathematics P2 Nov 2025 Answer Book Afr & Eng",grade:12,subject:"Mathematics",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1aJg8j3FgNTrNe3kJ-60jMpMMOcYo9lCI/view"},
  {id:"math-p1-nov-2025-mg",title:"Mathematics P1 Nov 2025 MG Afr & Eng",grade:12,subject:"Mathematics",year:2025,type:"Memo",link:"https://drive.google.com/file/d/18LmaFDSF-ewuRNFaRCqc-x2Jw86AuOpl/view"},
  {id:"geo-p2-nov-2025",title:"Geography P2 Nov 2025 Eng",grade:12,subject:"Geography",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1IwtDN5tAsCg5ys0r6eBb8xKx_LBr8SQL/view"},
  {id:"life-p2-nov-2025",title:"Life Sciences P2 Nov 2025 Eng",grade:12,subject:"Life Sciences",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1xDyhrvxYzsKQZ2BvzLEVkBGQNvuySjYF/view"},
  {id:"phys-p2-nov-2025",title:"Physical Sciences P2 Nov 2025 Eng",grade:12,subject:"Physical Sciences",year:2025,type:"Question Paper",link:"https://drive.google.com/file/d/1YwVCmtm4-r6dbIwh3_yDS18e8J6j3Zpv/view"},
  {id:"phys-p2-nov-2025-mg",title:"Physical Sciences P2 Nov 2025 MG Afr & Eng",grade:12,subject:"Physical Sciences",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1TIR7pcaSGooGh4t5QiNcvf3DNOzxTe5G/view"},
  {id:"life-p2-nov-2025-mg",title:"Life Sciences P2 Nov 2025 MG Eng",grade:12,subject:"Life Sciences",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1J_JPQP9sRrPJ-YZxglyOj_AxPMeF0lFW/view"},
  {id:"math-p2-nov-2025-mg",title:"Mathematics P2 Nov 2025 MG Afr & Eng",grade:12,subject:"Mathematics",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1apF53r-juoWxP-EfA_J43y6NKbztJxQA/view"},
  {id:"geo-p2-nov-2025-mg",title:"Geography P2 Nov 2025 MG Eng",grade:12,subject:"Geography",year:2025,type:"Memo",link:"https://drive.google.com/file/d/1sMTCjeXcKYUmOlXm3Yqq0SjwLmtLMBA0/view"},
  {id:"phys-p1-nov-2023-mg",title:"Physical Sciences P1 Nov 2023 MG Afr & Eng",grade:12,subject:"Physical Sciences",year:2023,type:"Memo",link:"https://drive.google.com/file/d/1qIvZg_c1fJjYFGcrJ4EhqaZHbdMnu5jn/view"},
];

// ====================== NOTES ======================
const notes = [
{id:"functions",title:"Functions – Grade 12 (Complete Guide)",subject:"Mathematics",grade:12,content:`
<h3>1. Introduction to Functions</h3>
<p>A function is a relationship where every input (x) has exactly one output (y). We write y = f(x).</p>
<ul>
<li><strong>Domain</strong> – all possible x-values</li>
<li><strong>Range</strong> – all possible y-values</li>
</ul>

<h3>2. Linear Functions</h3>
<div class="formula">y = mx + c</div>
<ul>
<li>m = gradient (slope)</li>
<li>c = y-intercept</li>
</ul>

<div class="example">
<strong>Example 1:</strong> Find the equation of the line through (2, 5) with gradient 3.<br><br>
<strong>Step 1:</strong> y − y₁ = m(x − x₁)<br>
y − 5 = 3(x − 2)<br>
<strong>Step 2:</strong> y − 5 = 3x − 6<br>
<strong>Step 3:</strong> y = 3x − 1<br>
<strong>Answer:</strong> y = 3x − 1
</div>

<div class="example">
<strong>Example 2:</strong> Sketch y = −2x + 4<br><br>
<strong>Step 1:</strong> y-intercept = 4 → (0, 4)<br>
<strong>Step 2:</strong> Set y = 0 → 0 = −2x + 4 → x = 2 → (2, 0)<br>
<strong>Step 3:</strong> Draw the line through these points (slopes downwards).
</div>

<div class="example">
<strong>Example 3:</strong> Find the equation of the line through A(1, 2) and B(4, 8).<br><br>
<strong>Step 1:</strong> Gradient m = (8−2)/(4−1) = 6/3 = 2<br>
<strong>Step 2:</strong> y − 2 = 2(x − 1)<br>
y = 2x − 2 + 2<br>
y = 2x<br>
<strong>Answer:</strong> y = 2x
</div>

<h3>3. Quadratic Functions</h3>
<div class="formula">y = ax² + bx + c</div>
<ul>
<li>a > 0 → opens upwards (minimum)</li>
<li>a < 0 → opens downwards (maximum)</li>
<li>Turning point: x = −b/(2a)</li>
</ul>

<div class="example">
<strong>Example 4:</strong> For f(x) = 2x² − 8x + 3, find the turning point and its nature.<br><br>
<strong>Step 1:</strong> x = −(−8)/(2×2) = 8/4 = 2<br>
<strong>Step 2:</strong> f(2) = 2(4) − 16 + 3 = −5<br>
<strong>Step 3:</strong> a > 0 → minimum at (2, −5)
</div>

<div class="example">
<strong>Example 5:</strong> Find the x-intercepts of y = x² − 5x + 6<br><br>
x² − 5x + 6 = 0<br>
(x − 2)(x − 3) = 0<br>
x = 2 or x = 3<br>
<strong>Answer:</strong> (2, 0) and (3, 0)
</div>

<div class="example">
<strong>Example 6:</strong> Write y = x² − 6x + 5 in completed square form and state the turning point.<br><br>
y = (x − 3)² − 9 + 5 = (x − 3)² − 4<br>
<strong>Answer:</strong> Turning point is (3, −4)
</div>

<div class="example">
<strong>Example 7:</strong> Find the equation of the parabola with turning point (−1, 4) that passes through (1, 0).<br><br>
Form: y = a(x + 1)² + 4<br>
Substitute (1, 0): 0 = a(2)² + 4 → 4a = −4 → a = −1<br>
y = −(x + 1)² + 4<br>
<strong>Answer:</strong> y = −(x + 1)² + 4
</div>

<h3>4. Exponential Functions</h3>
<div class="formula">y = abˣ</div>
<ul>
<li>b > 1 → growth</li>
<li>0 < b < 1 → decay</li>
</ul>

<div class="example">
<strong>Example 8:</strong> A population starts at 500 and doubles every year. Find the population after 4 years.<br><br>
y = 500 × 2ˣ<br>
When x = 4: y = 500 × 16 = 8000<br>
<strong>Answer:</strong> 8000
</div>

<div class="example">
<strong>Example 9:</strong> R20 000 is invested and grows at 8% per year. Write the formula and find the value after 6 years.<br><br>
A = 20000(1.08)ⁿ<br>
After 6 years: 20000(1.08)⁶ ≈ R31 738.56
</div>

<h3>5. Hyperbolic Functions</h3>
<div class="formula">y = a/x + q</div>
<ul>
<li>Vertical asymptote: x = 0</li>
<li>Horizontal asymptote: y = q</li>
</ul>
`},

{id:"calculus",title:"Differentiation – Complete Guide",subject:"Mathematics",grade:12,content:`
<h3>1. Basic Differentiation Rules</h3>
<div class="formula">d/dx [xⁿ] = n xⁿ⁻¹</div>
<div class="formula">d/dx [k] = 0</div>
<div class="formula">d/dx [kf(x)] = k f′(x)</div>

<div class="example">
<strong>Example 1:</strong> Differentiate y = 5x⁴ − 3x² + 7x − 2<br><br>
dy/dx = 20x³ − 6x + 7<br>
<strong>Answer:</strong> 20x³ − 6x + 7
</div>

<div class="example">
<strong>Example 2:</strong> Differentiate y = 4x³ − 1/x² + 6<br><br>
y = 4x³ − x⁻² + 6<br>
dy/dx = 12x² + 2x⁻³ = 12x² + 2/x³<br>
<strong>Answer:</strong> 12x² + 2/x³
</div>

<h3>2. Product Rule</h3>
<div class="formula">If y = uv then dy/dx = u′v + uv′</div>

<div class="example">
<strong>Example 3:</strong> Differentiate y = (3x + 1)(x² − 4)<br><br>
u = 3x + 1 → u′ = 3<br>
v = x² − 4 → v′ = 2x<br>
dy/dx = 3(x² − 4) + (3x + 1)(2x) = 3x² − 12 + 6x² + 2x = 9x² + 2x − 12<br>
<strong>Answer:</strong> 9x² + 2x − 12
</div>

<div class="example">
<strong>Example 4:</strong> Differentiate y = x²(2x − 5)<br><br>
u = x² → u′ = 2x<br>
v = 2x − 5 → v′ = 2<br>
dy/dx = 2x(2x − 5) + x²(2) = 4x² − 10x + 2x² = 6x² − 10x<br>
<strong>Answer:</strong> 6x² − 10x
</div>

<div class="example">
<strong>Example 5:</strong> Differentiate y = (x − 3)(x² + 4x)<br><br>
u = x − 3 → u′ = 1<br>
v = x² + 4x → v′ = 2x + 4<br>
dy/dx = 1(x² + 4x) + (x − 3)(2x + 4) = x² + 4x + 2x² + 4x − 6x − 12 = 3x² + 2x − 12<br>
<strong>Answer:</strong> 3x² + 2x − 12
</div>

<h3>3. Quotient Rule</h3>
<div class="formula">If y = u/v then dy/dx = (u′v − uv′) / v²</div>

<div class="example">
<strong>Example 6:</strong> Differentiate y = (2x + 3)/(x − 1)<br><br>
u = 2x + 3 → u′ = 2<br>
v = x − 1 → v′ = 1<br>
dy/dx = [2(x − 1) − (2x + 3)(1)] / (x − 1)² = (2x − 2 − 2x − 3)/(x − 1)² = −5/(x − 1)²<br>
<strong>Answer:</strong> −5/(x − 1)²
</div>

<div class="example">
<strong>Example 7:</strong> Differentiate y = (x² + 1)/x<br><br>
u = x² + 1 → u′ = 2x<br>
v = x → v′ = 1<br>
dy/dx = [2x(x) − (x² + 1)(1)] / x² = (2x² − x² − 1)/x² = (x² − 1)/x²<br>
<strong>Answer:</strong> (x² − 1)/x²
</div>

<h3>4. Stationary Points</h3>
<ol>
<li>Find the first derivative</li>
<li>Set dy/dx = 0 and solve for x</li>
<li>Find the y-values</li>
<li>Use the second derivative test</li>
</ol>

<div class="example">
<strong>Example 8:</strong> Find the stationary points of f(x) = x³ − 6x² + 9x + 1 and determine their nature.<br><br>
f′(x) = 3x² − 12x + 9 = 0<br>
x² − 4x + 3 = 0 → (x − 1)(x − 3) = 0<br>
x = 1 or x = 3<br>
f(1) = 5 → (1, 5)<br>
f(3) = 1 → (3, 1)<br>
f′′(x) = 6x − 12<br>
f′′(1) = −6 < 0 → local maximum at (1, 5)<br>
f′′(3) = 6 > 0 → local minimum at (3, 1)
</div>

<div class="example">
<strong>Example 9:</strong> Find the stationary points of y = x³ − 3x² − 9x + 4<br><br>
dy/dx = 3x² − 6x − 9 = 0<br>
x² − 2x − 3 = 0 → (x − 3)(x + 1) = 0<br>
x = 3 or x = −1<br>
When x = 3: y = 27 − 27 − 27 + 4 = −23 → (3, −23)<br>
When x = −1: y = −1 − 3 + 9 + 4 = 9 → (−1, 9)<br>
d²y/dx² = 6x − 6<br>
At x = 3: 12 > 0 → local minimum<br>
At x = −1: −12 < 0 → local maximum
</div>
`},

{id:"sequences",title:"Sequences & Series – Complete Guide",subject:"Mathematics",grade:12,content:`
<h3>1. Arithmetic Sequences</h3>
<div class="formula">Tₙ = a + (n − 1)d</div>
<div class="formula">Sₙ = n/2 [2a + (n − 1)d]</div>
<div class="formula">Sₙ = n/2 (a + l) (where l is the last term)</div>

<div class="example">
<strong>Example 1:</strong> Sequence: 7, 12, 17, 22, ... Find the 15th term and the sum of the first 15 terms.<br><br>
a = 7, d = 5<br>
T₁₅ = 7 + 14×5 = 77<br>
S₁₅ = 15/2 [14 + 70] = 630<br>
<strong>Answer:</strong> 77 and 630
</div>

<div class="example">
<strong>Example 2:</strong> The 4th term of an arithmetic sequence is 17 and the 9th term is 32. Find a and d.<br><br>
a + 3d = 17<br>
a + 8d = 32<br>
Subtract: 5d = 15 → d = 3<br>
a + 9 = 17 → a = 8<br>
<strong>Answer:</strong> a = 8, d = 3
</div>

<div class="example">
<strong>Example 3:</strong> Find the sum of the first 20 terms of the sequence 5, 9, 13, 17, ...<br><br>
a = 5, d = 4<br>
S₂₀ = 20/2 [2×5 + 19×4] = 10[10 + 76] = 860<br>
<strong>Answer:</strong> 860
</div>

<h3>2. Geometric Sequences</h3>
<div class="formula">Tₙ = arⁿ⁻¹</div>
<div class="formula">Sₙ = a(rⁿ − 1)/(r − 1) (r ≠ 1)</div>
<div class="formula">S∞ = a/(1 − r) (|r| < 1)</div>

<div class="example">
<strong>Example 4:</strong> Sequence: 3, 6, 12, 24, ... Find the sum of the first 8 terms.<br><br>
a = 3, r = 2<br>
S₈ = 3(2⁸ − 1)/(2 − 1) = 3×255 = 765<br>
<strong>Answer:</strong> 765
</div>

<div class="example">
<strong>Example 5:</strong> Find the sum to infinity of the series 16 + 8 + 4 + 2 + ...<br><br>
a = 16, r = 1/2<br>
S∞ = 16 / (1 − 0.5) = 16 / 0.5 = 32<br>
<strong>Answer:</strong> 32
</div>

<div class="example">
<strong>Example 6:</strong> The first term of a geometric sequence is 5 and the common ratio is 3. Find the 6th term and the sum of the first 6 terms.<br><br>
T₆ = 5 × 3⁵ = 5 × 243 = 1215<br>
S₆ = 5(3⁶ − 1)/(3 − 1) = 5(729 − 1)/2 = 5×364 = 1820<br>
<strong>Answer:</strong> 1215 and 1820
</div>
`},

{id:"finance",title:"Financial Maths – Complete Guide",subject:"Mathematics",grade:12,content:`
<div class="formula">Simple Interest: A = P(1 + in)</div>
<div class="formula">Compound Interest: A = P(1 + i)ⁿ</div>
<div class="formula">Future Value of Annuity: F = x[((1 + i)ⁿ − 1)/i]</div>
<div class="formula">Present Value of Annuity: P = x[(1 − (1 + i)⁻ⁿ)/i]</div>

<div class="example">
<strong>Example 1 (Compound Interest):</strong> R15 000 is invested at 8% p.a. compounded annually for 5 years. Find the final amount.<br><br>
A = 15000(1.08)⁵ ≈ R22 039.92<br>
<strong>Answer:</strong> R22 039.92
</div>

<div class="example">
<strong>Example 2 (Compound Interest – monthly):</strong> R10 000 is invested at 9% p.a. compounded monthly for 3 years. Find the final amount.<br><br>
i = 0.09/12 = 0.0075, n = 36<br>
A = 10000(1.0075)³⁶ ≈ R13 090.32<br>
<strong>Answer:</strong> R13 090.32
</div>

<div class="example">
<strong>Example 3 (Future Value of Annuity):</strong> How much must be deposited at the end of each year for 6 years to accumulate R50 000 if interest is 9% p.a. compounded annually?<br><br>
50000 = x[((1.09)⁶ − 1)/0.09]<br>
50000 = x × 7.523334<br>
x ≈ R6 646<br>
<strong>Answer:</strong> Approximately R6 646 per year
</div>

<div class="example">
<strong>Example 4 (Present Value of Annuity):</strong> What is the present value of an annuity of R2 000 per year for 5 years if interest is 10% p.a.?<br><br>
P = 2000[(1 − (1.10)⁻⁵)/0.10] ≈ 2000 × 3.79079 = R7 581.58<br>
<strong>Answer:</strong> R7 581.58
</div>

<div class="example">
<strong>Example 5 (Finding time):</strong> How long will it take for R8 000 to grow to R12 000 at 7% p.a. compounded annually?<br><br>
12000 = 8000(1.07)ⁿ<br>
1.5 = (1.07)ⁿ<br>
n = log(1.5)/log(1.07) ≈ 6.07 years<br>
<strong>Answer:</strong> Approximately 6.1 years
</div>

<div class="example">
<strong>Example 6 (Effective interest rate):</strong> Convert 12% p.a. compounded monthly to an effective annual rate.<br><br>
i_eff = (1 + 0.12/12)¹² − 1 = (1.01)¹² − 1 ≈ 0.1268 = 12.68%<br>
<strong>Answer:</strong> 12.68%
</div>
`},

{id:"analytical",title:"Analytical Geometry – with Examples",subject:"Mathematics",grade:12,content:`
<div class="formula">d = √[(x₂ − x₁)² + (y₂ − y₁)²]</div>
<div class="formula">m = (y₂ − y₁)/(x₂ − x₁)</div>
<div class="formula">M = ((x₁ + x₂)/2 , (y₁ + y₂)/2)</div>

<div class="example">
<strong>Example:</strong> Points A(1, 2) and B(4, 6)<br><br>
Distance = 5<br>
Midpoint = (2.5, 4)<br>
Gradient = 4/3
</div>
`},

{id:"newton",title:"Newton’s Laws – Complete Guide",subject:"Physical Sciences",grade:12,content:`
<h3>1. Newton’s First Law (Law of Inertia)</h3>
<p>An object continues in its state of rest or uniform motion in a straight line unless acted upon by a net force.</p>

<h3>2. Newton’s Second Law</h3>
<div class="formula">F<sub>net</sub> = ma</div>
<p>The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.</p>

<div class="example">
<strong>Example 1:</strong> A 5 kg box is pulled to the right by a force of 20 N. The frictional force is 5 N. Calculate the acceleration.<br><br>
F<sub>net</sub> = 20 − 5 = 15 N<br>
a = 15 / 5 = 3 m·s⁻²<br>
<strong>Answer:</strong> 3 m·s⁻² to the right
</div>

<div class="example">
<strong>Example 2:</strong> A force of 12 N acts on a 4 kg object. What is its acceleration if there is no friction?<br><br>
a = 12 / 4 = 3 m·s⁻²<br>
<strong>Answer:</strong> 3 m·s⁻²
</div>

<div class="example">
<strong>Example 3:</strong> A 2 kg object accelerates at 4 m·s⁻². Calculate the net force acting on it.<br><br>
F<sub>net</sub> = 2 × 4 = 8 N<br>
<strong>Answer:</strong> 8 N
</div>

<div class="example">
<strong>Example 4:</strong> A 10 kg box is pulled up a frictionless incline of 30° by a force of 80 N parallel to the incline. Calculate the acceleration.<br><br>
Component of weight down the incline = mg sinθ = 10 × 9.8 × 0.5 = 49 N<br>
F<sub>net</sub> = 80 − 49 = 31 N<br>
a = 31 / 10 = 3.1 m·s⁻² up the incline<br>
<strong>Answer:</strong> 3.1 m·s⁻² up the incline
</div>

<h3>3. Newton’s Third Law</h3>
<p>For every action there is an equal and opposite reaction. The two forces act on different objects.</p>
`},

{id:"momentum",title:"Momentum & Impulse – Complete Guide",subject:"Physical Sciences",grade:12,content:`
<div class="formula">p = mv</div>
<div class="formula">Impulse (J) = FΔt = Δp = mv − mu</div>
<div class="formula">Conservation of momentum: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂</div>

<div class="example">
<strong>Example 1:</strong> A 2 kg object moving at 6 m·s⁻¹ collides with a stationary 3 kg object. They stick together. Find their common velocity.<br><br>
Momentum before = 12 kg·m·s⁻¹<br>
5v = 12 → v = 2.4 m·s⁻¹<br>
<strong>Answer:</strong> 2.4 m·s⁻¹
</div>

<div class="example">
<strong>Example 2:</strong> A 0.5 kg ball moving at 10 m·s⁻¹ hits a wall and rebounds at 6 m·s⁻¹. Calculate the change in momentum.<br><br>
Δp = 0.5(−6 − 10) = −8 kg·m·s⁻¹<br>
<strong>Answer:</strong> −8 kg·m·s⁻¹
</div>

<div class="example">
<strong>Example 3:</strong> A force of 20 N acts on a 4 kg object for 0.5 s. Calculate the change in velocity.<br><br>
Impulse = 10 N·s<br>
Δv = 10 / 4 = 2.5 m·s⁻¹<br>
<strong>Answer:</strong> 2.5 m·s⁻¹
</div>
`},

{id:"work-energy",title:"Work, Energy & Power – Complete Guide",subject:"Physical Sciences",grade:12,content:`
<div class="formula">W = FΔx cosθ</div>
<div class="formula">Eₖ = ½mv²</div>
<div class="formula">Eₚ = mgh</div>
<div class="formula">Power: P = W/Δt = Fv</div>

<div class="example">
<strong>Example 1:</strong> A constant force of 50 N pushes a box 8 m across a horizontal floor. Calculate the work done.<br><br>
W = 50 × 8 = 400 J<br>
<strong>Answer:</strong> 400 J
</div>

<div class="example">
<strong>Example 2:</strong> A 2 kg object falls from a height of 5 m. Calculate its kinetic energy just before it hits the ground.<br><br>
Eₖ = mgh = 2 × 9.8 × 5 = 98 J<br>
<strong>Answer:</strong> 98 J
</div>

<div class="example">
<strong>Example 3:</strong> A machine does 1200 J of work in 4 seconds. Calculate its power.<br><br>
P = 1200 / 4 = 300 W<br>
<strong>Answer:</strong> 300 W
</div>

<div class="example">
<strong>Example 4:</strong> A force of 30 N moves an object at a constant speed of 4 m·s⁻¹. Calculate the power.<br><br>
P = 30 × 4 = 120 W<br>
<strong>Answer:</strong> 120 W
</div>
`},

{id:"circuits",title:"Electric Circuits – Complete Guide",subject:"Physical Sciences",grade:12,content:`
<div class="formula">V = IR</div>
<div class="formula">Series: R_total = R₁ + R₂ + R₃ + ...</div>
<div class="formula">Parallel: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...</div>
<div class="formula">Power: P = VI = I²R = V²/R</div>

<div class="example">
<strong>Example 1:</strong> Two resistors of 4 Ω and 6 Ω are connected in parallel. Calculate the total resistance.<br><br>
1/R = 1/4 + 1/6 = 5/12 → R = 2.4 Ω<br>
<strong>Answer:</strong> 2.4 Ω
</div>

<div class="example">
<strong>Example 2:</strong> A current of 2 A flows through a 12 Ω resistor. Calculate the voltage and power dissipated.<br><br>
V = 24 V P = 48 W<br>
<strong>Answer:</strong> 24 V and 48 W
</div>

<div class="example">
<strong>Example 3:</strong> Three resistors of 2 Ω, 3 Ω and 6 Ω are connected in series across a 22 V battery. Calculate total resistance and current.<br><br>
R_total = 11 Ω I = 2 A<br>
<strong>Answer:</strong> 11 Ω and 2 A
</div>

<div class="example">
<strong>Example 4:</strong> Two 8 Ω resistors in parallel are connected in series with a 4 Ω resistor. Calculate total resistance.<br><br>
Parallel = 4 Ω Total = 8 Ω<br>
<strong>Answer:</strong> 8 Ω
</div>
`},

{id:"waves",title:"Waves, Sound & Light – Complete Guide",subject:"Physical Sciences",grade:12,content:`
<div class="formula">v = fλ</div>
<div class="formula">T = 1/f</div>

<div class="example">
<strong>Example 1:</strong> A wave has a frequency of 50 Hz and a wavelength of 2 m. Calculate its speed.<br><br>
v = 50 × 2 = 100 m·s⁻¹<br>
<strong>Answer:</strong> 100 m·s⁻¹
</div>

<div class="example">
<strong>Example 2:</strong> The speed of sound is 340 m·s⁻¹. A sound wave has a frequency of 170 Hz. Calculate its wavelength and period.<br><br>
λ = 2 m T ≈ 0.0059 s<br>
<strong>Answer:</strong> λ = 2 m, T ≈ 0.0059 s
</div>
`},

{id:"cell-division",title:"Cell Division – Complete Guide",subject:"Life Sciences",grade:12,content:`
<h3>1. Mitosis</h3>
<p><strong>Purpose:</strong> Growth, repair of damaged tissue, and asexual reproduction.</p>
<p><strong>Result:</strong> Two genetically identical diploid daughter cells.</p>

<ol>
<li><strong>Prophase</strong> – Chromosomes condense and become visible. Nuclear membrane starts to disappear. Spindle fibres form.</li>
<li><strong>Metaphase</strong> – Chromosomes line up at the equator of the cell. Each chromosome is attached to spindle fibres at the centromere.</li>
<li><strong>Anaphase</strong> – Sister chromatids are pulled apart to opposite poles of the cell.</li>
<li><strong>Telophase</strong> – Nuclear membranes reform around each set of chromosomes. Chromosomes uncoil. Cytokinesis usually follows.</li>
</ol>

<h3>2. Meiosis</h3>
<p><strong>Purpose:</strong> Production of gametes (sperm and egg cells) for sexual reproduction.</p>
<p><strong>Result:</strong> Four genetically different haploid cells.</p>

<ul>
<li><strong>Meiosis I</strong> – Homologous chromosomes separate (reduction division). Crossing over occurs during prophase I.</li>
<li><strong>Meiosis II</strong> – Sister chromatids separate.</li>
</ul>

<p><strong>Importance of meiosis:</strong> Produces haploid gametes and creates genetic variation through crossing over and independent assortment.</p>
`},

{id:"genetics",title:"Genetics & Inheritance – Complete Guide",subject:"Life Sciences",grade:12,content:`
<h3>1. Key Terms</h3>
<ul>
<li><strong>Gene</strong> – A section of DNA that codes for a particular characteristic.</li>
<li><strong>Allele</strong> – Different forms of the same gene.</li>
<li><strong>Genotype</strong> – The genetic make-up of an organism.</li>
<li><strong>Phenotype</strong> – The physical appearance that is expressed.</li>
<li><strong>Homozygous</strong> – Two identical alleles.</li>
<li><strong>Heterozygous</strong> – Two different alleles.</li>
<li><strong>Dominant allele</strong> – Expressed even if only one copy is present.</li>
<li><strong>Recessive allele</strong> – Only expressed when two copies are present.</li>
</ul>

<h3>2. Monohybrid Cross</h3>
<div class="example">
<strong>Example:</strong> Tall (T) is dominant over short (t). Cross two heterozygous tall plants (Tt × Tt).<br><br>
Genotypic ratio: 1 TT : 2 Tt : 1 tt<br>
Phenotypic ratio: 3 Tall : 1 Short
</div>

<h3>3. Sex Determination</h3>
<ul>
<li>Females = XX</li>
<li>Males = XY</li>
<li>Sex of the child is determined by the sperm.</li>
</ul>
`},

{id:"human-reproduction",title:"Human Reproduction – Complete Guide",subject:"Life Sciences",grade:12,content:`
<h3>1. Male Reproductive System</h3>
<ul>
<li><strong>Testes</strong> – Produce sperm and testosterone.</li>
<li><strong>Epididymis</strong> – Stores mature sperm.</li>
<li><strong>Vas deferens</strong> – Carries sperm to the urethra.</li>
<li><strong>Prostate & seminal vesicles</strong> – Produce seminal fluid.</li>
</ul>

<h3>2. Female Reproductive System</h3>
<ul>
<li><strong>Ovaries</strong> – Produce eggs and hormones.</li>
<li><strong>Fallopian tubes</strong> – Site of fertilisation.</li>
<li><strong>Uterus</strong> – Where the embryo develops.</li>
<li><strong>Cervix & Vagina</strong> – Birth canal.</li>
</ul>

<h3>3. Menstrual Cycle</h3>
<ul>
<li><strong>Days 1–5:</strong> Menstruation</li>
<li><strong>Days 6–13:</strong> Follicular phase</li>
<li><strong>Day 14:</strong> Ovulation</li>
<li><strong>Days 15–28:</strong> Luteal phase</li>
</ul>
`},

{id:"mapwork",title:"Mapwork – Complete Guide",subject:"Geography",grade:12,content:`
<div class="formula">Real distance = Map distance × Scale factor</div>

<div class="example">
<strong>Example 1:</strong> On a 1:50 000 map the distance is 4.5 cm. Real distance?<br><br>
4.5 × 50 000 = 225 000 cm = 2.25 km<br>
<strong>Answer:</strong> 2.25 km
</div>

<div class="example">
<strong>Example 2:</strong> 6.2 cm on a 1:10 000 map. Real distance in metres?<br><br>
6.2 × 10 000 = 62 000 cm = 620 m<br>
<strong>Answer:</strong> 620 m
</div>

<div class="example">
<strong>Example 3:</strong> Real distance is 8 km. Map distance is 4 cm. Scale of the map?<br><br>
1 : 200 000<br>
<strong>Answer:</strong> 1 : 200 000
</div>

<ul>
<li>Bearing is measured clockwise from True North (three digits).</li>
<li>Close contour lines = steep slope</li>
<li>Wide contour lines = gentle slope</li>
</ul>
`},

{id:"climate",title:"Climate & Weather – Complete Guide",subject:"Geography",grade:12,content:`
<h3>1. Factors Affecting Temperature</h3>
<ul>
<li><strong>Latitude</strong> – Decreases from equator to poles.</li>
<li><strong>Altitude</strong> – Decreases with height (±6.5°C per 1000 m).</li>
<li><strong>Distance from the sea</strong> – Maritime vs continental climates.</li>
<li><strong>Ocean currents</strong> – Warm currents raise temperatures.</li>
<li><strong>Aspect</strong> – North-facing slopes warmer in Southern Hemisphere.</li>
</ul>

<h3>2. South African Climate</h3>
<ul>
<li>Most of SA has summer rainfall.</li>
<li>Western Cape has Mediterranean (winter rainfall) climate.</li>
</ul>
`},

{id:"geomorphology",title:"Geomorphology – Complete Guide",subject:"Geography",grade:12,content:`
<h3>1. River Processes</h3>
<ul>
<li><strong>Erosion</strong> – Wearing away of bed and banks.</li>
<li><strong>Transportation</strong> – Suspension, solution, saltation, traction.</li>
<li><strong>Deposition</strong> – Dropping of material when energy is lost.</li>
</ul>

<h3>2. River Profiles</h3>
<ul>
<li>Upper course: V-shaped valleys, vertical erosion.</li>
<li>Middle course: Wider valleys.</li>
<li>Lower course: Floodplains, deposition dominant.</li>
</ul>

<h3>3. Drainage Patterns</h3>
<ul>
<li><strong>Dendritic</strong> – Tree-like (uniform rock).</li>
<li><strong>Trellis</strong> – Parallel streams (folded areas).</li>
<li><strong>Radial</strong> – Outwards from a high point.</li>
</ul>
`}
];

// ====================== QUIZZES ======================
const quizzes = [
{id:"quiz-functions",title:"Functions Quiz",subject:"Mathematics",grade:12,questions:[
  {q:"General form of a linear function?",options:["y = ax² + bx + c","y = mx + c","y = a/x","y = abˣ"],answer:1},
  {q:"If a > 0 the parabola:",options:["Opens downwards","Opens upwards","Is a straight line","Has no turning point"],answer:1},
  {q:"Turning point x-coordinate is:",options:["b/2a","-b/2a","c/a","-c/b"],answer:1}
]},
{id:"quiz-calculus",title:"Differentiation Quiz",subject:"Mathematics",grade:12,questions:[
  {q:"Derivative of x³?",options:["3x²","x²","3x","x³"],answer:0},
  {q:"Product rule is used for:",options:["Sum of functions","Product of two functions","A constant","A single power"],answer:1},
  {q:"To find stationary points we set:",options:["The function = 0","The second derivative = 0","The first derivative = 0","x = 0"],answer:2}
]},
{id:"quiz-sequences",title:"Sequences & Series Quiz",subject:"Mathematics",grade:12,questions:[
  {q:"In an arithmetic sequence the difference between consecutive terms is called the:",options:["Common ratio","Common difference","First term","Last term"],answer:1},
  {q:"The formula for the nth term of a geometric sequence is:",options:["a + (n-1)d","arⁿ⁻¹","n/2[2a+(n-1)d]","a/(1-r)"],answer:1},
  {q:"Sum to infinity is only possible when:",options:["r > 1","|r| < 1","r = 1","r = 0"],answer:1}
]},
{id:"quiz-finance",title:"Financial Maths Quiz",subject:"Mathematics",grade:12,questions:[
  {q:"The formula A = P(1+i)ⁿ is used for:",options:["Simple interest","Compound interest","Annuities","Depreciation"],answer:1},
  {q:"In the future value of an annuity formula, x represents:",options:["The final amount","The interest rate","The regular payment","The number of periods"],answer:2},
  {q:"Effective interest rate is always:",options:["Lower than nominal rate","Higher than nominal rate when compounded more than once a year","Equal to nominal rate","Half the nominal rate"],answer:1}
]},
{id:"quiz-newton",title:"Newton’s Laws Quiz",subject:"Physical Sciences",grade:12,questions:[
  {q:"Newton’s Second Law is:",options:["F = mv","F_net = ma","F = m/a","F = a/m"],answer:1},
  {q:"Newton’s First Law is the law of:",options:["Acceleration","Action-Reaction","Inertia","Gravity"],answer:2},
  {q:"Newton’s Third Law states:",options:["F = ma","Objects stay at rest","Action-reaction pairs","Momentum is conserved"],answer:2}
]},
{id:"quiz-momentum",title:"Momentum & Impulse Quiz",subject:"Physical Sciences",grade:12,questions:[
  {q:"Momentum is calculated using:",options:["F × t","m × v","½mv²","mgh"],answer:1},
  {q:"Impulse is equal to:",options:["Change in momentum","Change in velocity","Force only","Mass only"],answer:0},
  {q:"In an inelastic collision:",options:["Kinetic energy is conserved","Objects stick together","Momentum is not conserved","Velocity stays the same"],answer:1}
]},
{id:"quiz-circuits",title:"Electric Circuits Quiz",subject:"Physical Sciences",grade:12,questions:[
  {q:"In a series circuit the total resistance is:",options:["Less than the smallest resistor","The sum of all resistors","The product of the resistors","Always 1 ohm"],answer:1},
  {q:"In a parallel circuit the voltage across each resistor is:",options:["Different","The same","Zero","Half"],answer:1},
  {q:"Power can be calculated using:",options:["V × I only","I²R only","V²/R only","All of the above"],answer:3}
]},
{id:"quiz-cells",title:"Cell Division Quiz",subject:"Life Sciences",grade:12,questions:[
  {q:"Mitosis produces:",options:["4 haploid cells","2 identical diploid cells","4 identical cells","2 different cells"],answer:1},
  {q:"Meiosis is important for:",options:["Growth only","Producing gametes","Repairing wounds","Asexual reproduction"],answer:1},
  {q:"Chromosomes line up at the equator during:",options:["Prophase","Metaphase","Anaphase","Telophase"],answer:1}
]},
{id:"quiz-genetics",title:"Genetics Quiz",subject:"Life Sciences",grade:12,questions:[
  {q:"A heterozygous genotype means:",options:["Two identical alleles","Two different alleles","No alleles","Only dominant alleles"],answer:1},
  {q:"In a monohybrid cross of two heterozygotes the phenotypic ratio is usually:",options:["1:1","3:1","1:2:1","9:3:3:1"],answer:1},
  {q:"A recessive allele is expressed when:",options:["One copy is present","Two copies are present","It is dominant","It is heterozygous"],answer:1}
]},
{id:"quiz-reproduction",title:"Human Reproduction Quiz",subject:"Life Sciences",grade:12,questions:[
  {q:"Where does fertilisation usually take place?",options:["Uterus","Ovary","Fallopian tube","Vagina"],answer:2},
  {q:"Ovulation usually occurs around day:",options:["1","7","14","28"],answer:2},
  {q:"The hormone that maintains the uterine lining after ovulation is:",options:["Oestrogen","Testosterone","Progesterone","FSH"],answer:2}
]},
{id:"quiz-mapwork",title:"Mapwork Quiz",subject:"Geography",grade:12,questions:[
  {q:"Bearing is measured:",options:["Anti-clockwise from North","Clockwise from North","From the East","From the South"],answer:1},
  {q:"Close contour lines indicate:",options:["Gentle slope","Flat land","Steep slope","A river"],answer:2},
  {q:"On a 1:50 000 map, 2 cm represents:",options:["0.5 km","1 km","2 km","5 km"],answer:1}
]},
{id:"quiz-climate",title:"Climate & Weather Quiz",subject:"Geography",grade:12,questions:[
  {q:"Temperature generally decreases with:",options:["Increasing latitude","Decreasing altitude","Moving closer to the sea","Warm ocean currents"],answer:0},
  {q:"The Western Cape mainly receives rainfall in:",options:["Summer","Winter","Autumn only","All year equally"],answer:1},
  {q:"Mid-latitude cyclones bring rain mainly to:",options:["KwaZulu-Natal","Limpopo","Western Cape","Mpumalanga"],answer:2}
]},
{id:"quiz-geomorphology",title:"Geomorphology Quiz",subject:"Geography",grade:12,questions:[
  {q:"In the upper course of a river the dominant process is:",options:["Deposition","Lateral erosion","Vertical erosion","Transportation only"],answer:2},
  {q:"A dendritic drainage pattern looks like:",options:["Parallel lines","A tree","A circle","A grid"],answer:1},
  {q:"Deposition occurs when a river:",options:["Gains energy","Loses energy","Flows faster","Erodes more"],answer:1}
]}
];
