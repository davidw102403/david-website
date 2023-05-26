---
layout: default
title: The Set of Rational Numbers 
subtitle: My solutions to chapter 1.2 of Elementary Analysis The Theory of Calculus by Kenneth Ross
mathjax: true
---

<script type="text/javascript" async src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML'></script>

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({ TeX: { extensions: ["color.js"] }});
</script>

<div markdown="1" class="container">

<div class="postTitle"> The Set of Rational Numbers </div>
<div class="desc"> My solutions to chapter 1.2 of <u>Elementary Analysis: The Theory of Calculus</u> by Kenneth Ross </div>

<div class="postDate"> Posted by David Wang on May 22, 2023 </div>

## Introduction

Expanding on the previous post, this post will cover the main ideas of chapter 1.2. Specifically, the set \\(\mathbb{Q}\\) of rational numbers, the rational zeros theorem, and the chapter exercises. 

### The Set \\(\mathbb{Q}\\) of Rational Numbers

The set of rational numbers, often denoted as Q, consists of all numbers that can be expressed as a fraction of two integers, where the denominator is not zero. In other words, a rational number is a number that can be written in the form m/n, where m and n are integers and n is not equal to zero.

### Algebraic Numbers

The set \\(\mathbb{Q}\\) of rational numbers works well until one tries to solve equations like \\(x^2 - 2 = 0\\). It turns out that no rational number satisfies this equation. The answer, \\(\sqrt{2}\\), is not a rational number beacuse it cannot be expressed as a fraction of integers. This is an example of what is called an **algebraic number**: a number that satisfies a polynomial equation.  

### Rational Zeros Theorem

The rational zeros theorem provides a way to find rational zeros of polynomials with integer coefficients. It states:

Suppose \\(c_0, c_1, ... ,c_n\\) are integers and \\(r\\) is a rational number satisfying the polynomial equation \\(c_nx^n+c_{n-1}x^{n-1}+...+c_1x+c_0 = 0\\) where \\(n \ge 1, c_n \ne 0, c_0 \ne 0\\). Then \\(r=\frac{p}{q}\\), where \\(p\\) and \\(q\\) have no common factors and \\(q \ne 0\\) and p divides \\(c_0\\) and \\(q\\) divides \\(c_n\\).

In other words, the only rational candidates for solutions have the form \\(\frac{p}{q}\\), where \\(p\\) and \\(q\\) have no common factors and \\(p\\) is a factor of \\(c_0\\) and \\(q\\) is a factor of \\(c_n\\).

### Exercises

\\(\text{2.1 Show that } \sqrt{31} \text{ is not a rational number}\\)

Let \\(f(x)\\) be the polynomial \\(x^2-31\\)

By the rational zeros theorem, the only possible rational roots are \\(\pm 1\\) and \\(\pm 31\\). None of these are solutions to \\(f(x)\\), meaning that \\(f(x)\\) has no rational solutions. \\(\sqrt{31}\\) is a solution to \\(f(x)\\). Thus, it cannot be rational. 

$$ \blacksquare $$

<br>

\\(\text{2.2 Show that } \sqrt[7]{5} \text{ is not a rational number}\\)

Let \\(f(x)\\) be the polynomial \\(x^7-5\\)

By the rational zeros theorem, the only possible rational roots are \\(\pm 1\\) and \\(\pm 5\\). None of these are solutions to \\(f(x)\\), meaning that \\(f(x)\\) has no rational solutions. \\(\sqrt[7]{5}\\) is a solution to \\(f(x)\\). Thus, it cannot be rational. 

$$ \blacksquare $$

<br>

\\(\text{2.3 Show that } \sqrt{2+\sqrt{2}} \text{ is not a rational number}\\)

Let \\(x=\sqrt{2+\sqrt{2}}\\) \\
This implies:
$$
\\
\begin{align}
x^2 & = 2 +\sqrt{2} \\
x^2 - 2 & = \sqrt{2} \\ 
(x^2 - 2)^2 & = 2 \\
(x^2 - 2)^2 - 2 & = 0 \\
x^4 - 4x^2 + 2 & = 0 \\
\end{align}
$$

By the rational zeros theorem, the only possible rational roots are \\(\pm 1\\) and \\(\pm 2\\). None of these are solutions to \\(f(x)\\), meaning that \\(f(x)\\) has no rational solutions. \\(\sqrt{2+\sqrt{2}}\\) is a solution to \\(f(x)\\). Thus, it cannot be rational. 

$$ \blacksquare $$

<br>

\\(\text{2.4 Show that } \sqrt[3]{5-\sqrt{3}} \text{ is not a rational number}\\)

Let \\(x=\sqrt[3]{5-\sqrt{3}}\\) \\
This implies:
$$
\\
\begin{align}
x^3 & = 5 - \sqrt{3} \\ 
x^3 -5 & = - \sqrt{3} \\
(x^3 - 5)^2 = 3 \\
x^6 -10x^3 +22 = 0 \\
\end{align}
$$

By the rational zeros theorem, the only possible rational roots are \\(\pm 1\\), \\(\pm 2\\), \\(\pm 11\\), and \\(\pm 22\\). None of these are solutions to \\(f(x)\\), meaning that \\(f(x)\\) has no rational solutions. \\(\sqrt[3]{5-\sqrt{3}}\\) is a solution to \\(f(x)\\). Thus, it cannot be rational. 

$$ \blacksquare $$

<br>

\\(\text{2.5 Show that } [3+\sqrt{2}]^{2/3} \text{ is not a rational number}\\)

Let \\(x=[3+\sqrt{2}]^{2/3}\\) \\
This implies:
$$
\\
\begin{align}
x^3 & = [3+\sqrt{2}]^2 \\
x^3 & = 9 + 6\sqrt{2} + 2 \\ 
(x^3 - 11)^2 & = 72 \\ 
x^6 - 22x + 49 & = 0 \\
\end{align}
$$

By the rational zeros theorem, the only possible rational roots are \\(\pm 1\\), \\(\pm 7\\), \\(\pm 49\\). None of these are solutions to \\(f(x)\\), meaning that \\(f(x)\\) has no rational solutions. \\([3+\sqrt{2}]^{2/3}\\) is a solution to \\(f(x)\\). Thus, it cannot be rational. 

$$ \blacksquare $$

<br>

\\(\text{2.6 Show why } 4-7b^2 \text{ is rational if } b \text{ is rational }\\)

If b is rational, then it must be of the form \\(\frac{m}{n}\\), where \\(m, n \in \mathbb{Z}, n \ne 0 \\).
$$
\\
\begin{align}
& 4-7b \\
= & 4-7(\frac{m}{n})^2 \\
= & \frac{4n^2-7m^2}{n^2}
\end{align}
$$

$$
4n^2-7m^2 \in \mathbb{Z}, n^2 \in Z, n^2 \ne 0 \\
\text{Thus, } \frac{4n^2-7m^2}{n^2} \in \mathbb{Q}
$$

$$
\blacksquare
$$

<br>

\\(\text{2.7a Show that } \sqrt{4+2\sqrt{3}}-\sqrt{3} \text{ is rational }\\)

$$
\begin{align}
& \sqrt{4+2\sqrt{3}}-\sqrt{3} \\
& = \sqrt{1 + 3+2\sqrt{3}}-\sqrt{3} \\
& = \sqrt{1^2 + (\sqrt{3})^2+2\sqrt{3}}-\sqrt{3} \\ 
& = \sqrt{(1+\sqrt{3})^2}-\sqrt{3} \\
& = 1+\sqrt{3}-\sqrt{3} \\
& = 1 
\end{align}
$$


<br>

\\(\text{2.7b Show that } \sqrt{6+4\sqrt{2}}-\sqrt{2} \text{ is rational }\\)

$$
\begin{align}
& \sqrt{6+4\sqrt{2}}-\sqrt{2} \\
& = \sqrt{4 + 2+4\sqrt{2}}-\sqrt{2} \\
& = \sqrt{2^2+(\sqrt{2})^2+4\sqrt{2}}-\sqrt{2} \\
& = \sqrt{(2+\sqrt{2})^2} - \sqrt{2} \\ 
& = 2 + \sqrt{2} - \sqrt{2} \\ 
& = 2
\end{align}
$$

<br>

\\(\text{2.8 Find all rational solutions of the equation } x^8-4x^5+13x^3-7x+1=0\\)

By the rational zeros theorem, the only possible rational roots are \\(\pm 1\\). Check \\(x=1\\):
\\(1^8-4(1)^5+13(1)^3-7(1)+1=4\ne0\\). Check \\(x=-1\\): \\((-1)^8-4(-1)^5+13(-1)^3-7(-1)+1=0\\). 

\\(x=-1\\) is the only rational solution.

<br>