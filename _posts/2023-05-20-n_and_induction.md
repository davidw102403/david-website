---
layout: default
title: The Set of Natural Numbers and Proof by Induction
subtitle: My solutions to chapter 1.1 of Elementary Analysis The Theory of Calculus by Kenneth Ross
mathjax: true
---

<script type="text/javascript" async src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML'></script>

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({ TeX: { extensions: ["color.js"] }});
</script>

<div markdown="1" class="container">

<div class="postTitle"> The Set of Natural Numbers and Proof by Induction </div>
<div class="desc"> My solutions to chapter 1.1 of <u>Elementary Analysis: The Theory of Calculus</u> by Kenneth Ross </div>

<div class="postDate"> Posted by David Wang on May 20, 2023 </div>

## Introduction

In an effort to improve my mathematical and analytical thinking, I have started the task of studying elementary real analysis. Specifically, I will be studying the book <u>Elementary Analysis: The Theory of Calculus</u> by Kenneth A. Ross. 

This post will cover the main ideas of *chapter 1.1: The Set \\(\mathbb{N}\\)of Natural Numbers* and its exercises.

### The Set \\(\mathbb{N}\\)of Natural Numbers

The set of natural numbers, denoted by \\(\mathbb{N}\\), represents all positive integers. It includes the numbers starting from 1 and extending infinitely: 1, 2, 3, 4, 5, and so on.

The following properties hold for \\(\mathbb{N}\\):


$$
\text{N1. 1 belongs to } \mathbb{N} \\
\text{N2. If n belongs to } \mathbb{N} \text{, then its successor n+1 belongs to } \mathbb{N} \\
\text{N3. 1 is not the successor of any element in } \mathbb{N} \\
\text{N4. If n and m in } \mathbb{N} \text{ have the same successor, then n = m} \\
\text{N5. A subset of } \mathbb{N} \text{ which contains 1, and which contains n+1} \\ 
\text{ whenever it contains n, must equal } \mathbb{N} \\
$$

### Mathematical Induction

Mathematical induction is a method of mathematical proof commonly used to establish statements or properties that hold for all natural numbers (or a subset of natural numbers). It consists of two steps: the base case and the inductive step.

Step 1: Base Case
Prove that the statement is true for the smallest natural number (usually 1).

Step 2: Inductive Hypothesis
Assume that the statement is true for an arbitrary natural number "k."

Step 3: Inductive Step
Using the inductive hypothesis, prove that the statement is true for "k+1."

By following these steps, you can use mathematical induction to prove various mathematical statements and properties that hold for all natural numbers. 

Mathematical induction stems from property N5 of natural numbers. If the statement applies to n, and it also applies to n+1 whenever it applies to n, then it is true fo all n.

### Exercises

\\(\text{1.1 Prove } 1^2 + 2^2 + ... + n^2 = \frac{1}{6}n(n+1)(2n+1) \text{ for all positive integers n.}\\)

The nth proposition is: \\(P_{n}: 1^2 + 2^2 + ... + n^2 = \frac{1}{6}n(n+1)(2n+1)\\)

First show that the basis for induction is true (base case):

For n=1:
$$
\\
\begin{align}
1^2 & = \frac{1}{6}(1)(1+1)(2(1)+1) \\
1 & = 1
\end{align}
$$

Next, show that \\(P_{n+1}\\) is true whenever \\(P_{n}\\) is true (inductive step): 

Suppose \\(P_{n}\\) is true for n=k:
$$
\\ P_{k}: 1^2 + 2^2 + ... + k^2 = \frac{1}{6}k(k+1)(2k+1)
$$

For \\(P_{k+1}\\):

$$
\\
\begin{align}
P_{k+1}: & 1^2 + 2^2 + ... + k^2 + (k+1)^2 \\
= & \frac{1}{6}k(k+1)(2k+1) + (k+1)^2 \\
= & \frac{1}{6}(k+1)[k(2k+1) + 6(k+1)] \\ 
= & \frac{1}{6}(k+1)[2k^2 + 7k + 6] \\ 
= & \frac{1}{6}(k+1)(k+2)(2k+3) \\
= & \frac{1}{6}(k+1)((k+1)+1)(2(k+1)+1) \\
\end{align}
$$

Thus, \\(P_{k+1}\\) is true whenever \\(P_{k}\\) is true. 
Therefore, by the principle of mathematical induction, \\(P_{n}\\) is true for all n.
$$ \blacksquare $$

<br>



\\(\text{1.2 Prove } 3 + 11 + ... + (8n-5) = 4n^2 - n \text{ for all positive integers n.}\\)

Base case:
For n = 1:
$$
\\
\begin{align}
8(1)-5 & = 4(1)^2 - (1) \\
3 & = 3
\end{align}
$$

Inductive step:
Suppose \\(P_{n}\\) is true for n=k:

$$
\\ P_{k}: 3 + 11 + ... + (8k-5) = 4k^2 - k
$$

For \\(P_{k+1}\\):

$$
\\
\begin{align}
P_{k+1}: & 3 + 11 + ... + (8k-5) + (8(k+1)-5) \\
= & 4k^2 -k + 8(k+1)-5 \\
= & (4k^2 + 8k +4 -4) - k + 8 - 5 \\
= & 4(k^2 + 2k + 4) - k - 1 \\
= & 4(k+1)^2 - (k+1) \\
\end{align}
$$

$$ \blacksquare $$

<br>

\\(\text{1.3 Prove } 1^3 + 2^3 + ... + n^3 = (1+2+...+n)^2 \text{ for all positive integers n.}\\)

Use the fact that \\(1+2+...+n=n(n+1)/2\\).
\\(P_{n}: 1^3+2^3+...+n^3=(n(n+1)/2)^2\\) 

Base case:
For n = 1:

$$
\\
\begin{align}
1^3 & = (1(1+1)/2)^2 \\
1 & = 1
\end{align}
$$

Inductive step:
Suppose \\(P_{n}\\) is true for n=k:

$$
\\ P_{k}: 1^3 + 2^3 + ... + k^3 = (k(k+1)/2)^2
$$

For \\(P_{k+1}\\):

$$
\\
\begin{align}
P_{k+1}: & 1^3 + 2^3 + ... + k^3 + (k+1)^3 \\
= & (\frac{1}{2}k(k+1))^2 + (k+1)^3 \\
= & \frac{1}{4}k^2(k+1)^2 + (k+1)^3 \\ 
= & \frac{1}{4}(k+1)^2[k^2+4(k+1)] \\
= & \frac{1}{4}(k+1)^2(k+2)^2 \\
= & (\frac{(k+1)(k+2)}{2})^2 \\
= & (\frac{(k+1)((k+1)+1)}{2})^2 \\
\end{align}
$$

$$ \blacksquare $$

<br>

\\(\text{1.4a Guess a formula for } 1+3+...+(2n-1)\\)

Let \\(P_{n}: 1+3+...+(2n-1)\\):

$$
P_{1}: 1 \\
P_{2}: 4 \\
P_{3}: 9 \\
P_{4}: 16 \\
... \\
P_{n}: n^2
$$

\\(\text{1.4b Prove your formula using mathematical induction} \\)

Base case:
For n = 1:

$$
\\
\begin{align}
2(1)-1 & = 1^2 \\
1 & = 1
\end{align}
$$

Inductive step:
Suppose \\(P_{n}\\) is true for n=k:

$$
\\ P_{k}: 1+3+...+(2k-1) = k^2
$$

For \\(P_{k+1}\\):

$$
\\
\begin{align}
P_{k+1}: & 1+3+...+(2k-1)+(2(k+1)-1) \\
= & k^2 + 2(k+1)-1 \\
= & k^2+2k+1 \\
= & (k+1)^2
\end{align}
$$

$$ \blacksquare $$

<br>

\\(\text{1.5 Prove } 1+\frac{1}{2} + \frac{1}{4} + ... + \frac{1}{2^n} = 2-\frac{1}{2^n} \text{ for all positive integers n} \\)

Base case:
For n = 0:

$$
\\
\begin{align}
\frac{1}{2^0} & = 2-\frac{1}{2^0} \\
1 & = 1
\end{align}
$$

Inductive step:
Suppose \\(P_{n}\\) is true for n=k:

$$
\\ P_{k}: 1+\frac{1}{2} + \frac{1}{4} + ... + \frac{1}{2^k} = 2-\frac{1}{2^k}
$$

For \\(P_{k+1}\\):

$$
\\
\begin{align}
P_{k+1}: & 1+\frac{1}{2} + \frac{1}{4} + ... + \frac{1}{2^k} + \frac{1}{2^{(k+1)}}\\
= & 2-\frac{1}{2^k} + \frac{1}{2^{(k+1)}}\\
= & 2-\frac{2}{2^{(k+1)}} + \frac{1}{2^{(k+1)}}\\
= & 2-\frac{1}{2^{(k+1)}} 
\end{align}
$$

$$ \blacksquare $$

<br>

\\(\text{1.6 Prove } (11)^n -4^n \text{ is divisible by 7 when n is a positive integer } \\)

Base case:
For n = 1:

$$
\\
\begin{align}
(11)^1 -4^1 & = 7 \\
\end{align}
$$

Inductive step:
Suppose \\(P_{n}\\) is true for n=k:

$$
\\ P_{k}: (11)^k -4^k \text{ is divisible by 7.}
$$

For \\(P_{k+1}\\):

$$
\\
\begin{align}
P_{k+1}: & (11)^{(k+1)} - 4^{(k+1)} \\
= & (11)^k(11) - (4)^k(4) \\
= & (11)^k(4 + 7) - (4)^k(4) \\
= & 4(11)^k + 7(11)^k - 4(4)^k \\
= & 4[(11)^k - (4)^k] + 7(11)^k \\
\end{align}
$$
Both terms are divisible by 7. Thus, their sum is also divisible by 7. 

$$ \blacksquare $$

<br>

\\(\text{1.7 Prove } 7^n - 6n -1 \text{ is divisible by 36 when n is a positive integer } \\)

Base case:
For n = 1:

$$
\\
\begin{align}
7^1 - 6(1) - 1 & = 0 \\
\end{align}
$$

Inductive step:
Suppose \\(P_{n}\\) is true for n=k:

$$
\\ P_{k}: 7^k - 6k -1 \text{ is divisible by 36.}
$$

For \\(P_{k+1}\\):

$$
\\
\begin{align}
P_{k+1}: & 7^{(k+1)} - 6(k+1) -1 \\
= & 7^k(7) - 6k -7 \\
= & (7^k(7) -42k + 42k - 7) -6k \\
= & 7(7^k -6k -1) + 36k 
\end{align}
$$
Both terms are divisible by 36. Thus, their sum is also divisible by 36. 

$$ \blacksquare $$

<br>

\\(\text{1.8a Prove } n^2>n+1 \text{ for all integers } n \ge 2\\)

Base case:
For n = 2:

$$
\\
\begin{align}
2^2 & \ge 2+1 \\
4 & \ge 3
\end{align}
$$

Inductive step:
Suppose \\(P_{n}\\) is true for n=k:

$$
\\ P_{k}: n^2>n+1 \text{ for all integers } n \ge 2
$$

For \\(P_{k+1}\\):

$$
\\
\begin{align}
P_{k+1}: & (k+1)^2  \\
= & \\
\end{align}
$$
Both terms are divisible by 36. Thus, their sum is also divisible by 36. 

$$ \blacksquare $$




