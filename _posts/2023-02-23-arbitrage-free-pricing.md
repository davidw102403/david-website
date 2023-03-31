---
layout: default
title: Arbitrage-Free Pricing [finance]
subtitle: Arbitrage Free Pricing and the Law of one Price

---

<script type="text/javascript" async src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML'></script>

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({ TeX: { extensions: ["color.js"] }});
</script>

<div markdown="1" class="container">

<div class="postTitle"> Arbitrage-Free Pricing </div>
<div class="desc">Arbitrage-Free Pricing and the Law of one Price</div>
<div class="postDate"> Posted by David Wang on Febuary 23, 2023 </div>

## Introduction

This post will seek to explain the concept of arbitrage-free pricing, its implications, and how it can be used in the valuation of uderlying assets. 

## What is an Arbitrage Opportunity

To begin with, it is imporatnt to first understand arbitrage opportunities. An **arbitrage opportunity** is a situation in which an investor can make a profit without any risk involved by exploiting pricing discrepancies. In other words, it is an investment opportunity where an asset can be bought at a lower price in one market and sold at a higher price in another market, realizing a risk free profit. 

Here's a simplified example. Imagine Apple's stock is trading at $145 on the New York Stock Exchange (NYSE) and at $150 at the London Stock Exchange (LSE). An arbitrageur could buy shares of Apple on the NYSE and sell them on the LSE, realizing a profit of $5 per share. This buying of the cheaper share and the selling of the more expensive share would continue, driving the price of the cheaper share up and the price of the more expensive share down, until the price converges on its fair value.

## Arbitrage-Free Pricing

**Arbitrage-free pricing** is a pricing approach that seeks to determine the fair price of an asset by eliminating arbitrage. It assumes that any opportunities for arbitrage in the market would be exploited and the price would converge to their fair value (what is known as an **efficient market**).

### The Law of One Price

**The law of one price** is the underlying priciple of arbitrage-free pricing. It states that in an efficient market, identical goods or assets should have the same value. 

Defined formally, if two portfolios are guaranteed to have the **same value** at a future time **_T > t_** regardles of the market at time **_T_**, then they must have the same value at time **_t_**. Similarly, if a portfolio is guaranteed to be **more valuble** than another at time **_T > t_** regardles of the market at time **_T_**, then it must also be more valuble at time **_t_**. (The same idea applies if one portfolio is **worth less** than another at time **_T_**). 

That may be a _bit difficult_ to understand directly, so here's a concrete example:
Suppose portfolio A and portfolio B are both guaranteed to be worth $1,000 in one year. If the market is efficient and their values are both independent of the state of the market in one year, then their current value must be the same according to the law of one price. Let's suppose that the current value of portfolio A is $950 and portfolio B is $1,050. This would introduce an arbitrage opportunity, as an investor could short portfolio B and buy portfolio A, earning a riskless profit of $100. 

### Using Arbitrage-Free Pricing to Value Assets

A direct result of the law of one price is if the value of a portfolio at time **_T_** in the future is independent of the state of the market, then the present value of the portfolio is the _risk-neutral discounted present value at time_ **_T_**. 

The term **"risk-neutral discounted present value"** refers to time value of money. Cash can be deposited at time **_t<sub>1</sub>_** and returned at time **_t<sub>2</sub>_** where **_t<sub>1</sub> < t<sub>2</sub>_** with interest. If the party receiving the deposit has a probability of _defualt_ of zero (the probability that they will fail to return the deposit), then the return is considered risk-free. 

If interest is compounded continuously and the value **_V(T)_** of a portfolio at time T in the future is independent of the state of the market at the **_T_**, then the current value of the portfolio at the **_t_** is defined as:

$$
\begin{equation}

V(t) = V(T)e^{-r(T-t)}

\end{equation}
$$

,where r is the constant risk-free interest rate.

From this equation, is not difficult to see that the following relationship also applies:

$$
\begin{equation}

V(T) = V(t)e^{r(T-t)}

\end{equation}
$$

### Conclusion

Arbitrage-free pricing is used to derive a fair price for assets while eliminating the possibility of arbitrage. However, in practice, the assumptions of the law of one price and efficient markets may not hold true, leading to discrepancies in the fair price and the opportunity for arbitrage. In the next article, I will discuss ways in which arbitrage opportunities can be identified and how they can be executed.  

</div>


