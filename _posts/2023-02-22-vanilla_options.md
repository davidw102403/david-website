---
layout: default
title: Plain Vanilla Options
subtitle: Understanding how plain vanilla options work

---

<script type="text/javascript" async src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML'></script>

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({ TeX: { extensions: ["color.js"] }});
</script>

<div markdown="1" class="container">

<div class="postTitle"> Plain Vanilla Options </div>
<div class="desc">Understanding options and how they work</div>
<div class="postDate"> Posted by David Wang on Febuary 20, 2023 </div>

## Introduction

In this post, we will be covering what a vanilla option is, the types of options, features of options, calculating the payoff of options, and some examples. 

## What is a Option

An option is a contract between two parties, that gives the holder the right, but not obligation, to buy/sell an [underlying asset](https://www.investopedia.com/terms/u/underlying-asset.asp) at a predetermined price within a certain timeframe. 

A plain vanilla option is a type of option that has no special features or special terms. 

### Call vs Put Options

There are two types of vanilla options: call options and put options. 

The holder(or buyer) of a <span style="color:blue">**call**</span> option has the right, but not obligation, to <span style="color:blue">**buy**</span> from the seller one unit of the asset for a predetermined pirce **_K_**, called the **strike**. For this right, the buyer pays **_C(t)_** at time **_t < T_** to the seller of the call.

The holder of a <span style="color:red">**put**</span> option has the right, but not obligation, to <span style="color:red">**sell**</span> from the seller one unit of the asset for a predetermined pirce **_K_**, called the **strike**. For this right, the buyer pays **_P(t)_** at time **_t < T_** to the seller of the put.

Both calls and puts have a predetermined expiration date **_T_** in the future, called the **maturity**, which puts a limit on the time the holder has to exercise the option. 

### European vs American Option

- European Option: the buyer can only exercise the right to buy/sell the underlying asset at maturity or time **_T_**.

- American Option: the buyer can exercise the right to buy/sell the underying asset at any time before maturity or time **_t < T_**.

## In, Out, and At the money

Let **_S(t)_** be the price of an underlying asset at time **_t_** and **_K_** be the predetermined price: 

A <span style="color:blue">**call**</span> option is:
- in the money (ITM) if **_S(t) > K_**
- out the money (OTM) if **_S(t) < K_**
- at the money (ATM) if **_S(t) = K_**

Similarly, a <span style="color:blue">**call**</span> option is said to _expire_ ITM, OTM, or ATM at time **_T_** if **_S(T) > K_**, **_S(T) < K_**, or **_S(T) = K_** respectively. 

A <span style="color:red">**put**</span> option is:
- in the money (ITM) if **_S(t) < K_**
- out the money (OTM) if **_S(t) > K_**
- at the money (ATM) if **_S(t) = K_**

Similarly, a <span style="color:red">**put**</span> option is said to _expire_ ITM, OTM, or ATM at time **_T_** if **_S(T) < K_**, **_S(T) > K_**, or **_S(T) = K_** respectively. 

### Calculating Payoff of a Vanilla Option

The payoff of a call option at maturity is: 

$$
C(T) = max(S(T) - K, 0) =
\begin{cases}
S(T) - K & \text{if } S(T) > K \\
0 & \text{if } S(T) \le K \\
\end{cases}
$$

The payoff of a put option at maturity is:

$$
C(T) = max(S(T) - K, 0) =
\begin{cases}
0 & \text{if } S(T) \ge K \\
S(T) - K & \text{if } S(T) < K \\
\end{cases}
$$

## Example

</div>


