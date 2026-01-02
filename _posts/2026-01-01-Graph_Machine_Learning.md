---
layout: post
title: "My notes of Graph Machine Learning"
date: 2026-01-01 16:40:16
description: Personal study notes and insights on Graph Machine Learning, covering core concepts, models, and practical considerations for learning on graph-structured data.
tags:
  - graph-machine-learning
  - graph-neural-networks
  - gnn
  - representation-learning
  - machine-learning
  - deep-learning
categories:
  - notes
  - research
---

## What Are Graphs?

Graphs are a powerful and widely used mathematical structure for representing **complex systems**. At their core, a graph consists of a set of entities, called **nodes** (or vertices), and the **edges** that define the relationships between them. Unlike representations that focus primarily on individual entities, graphs emphasize the **interactions and dependencies** among elements. This relational perspective, combined with their expressive generality, makes graphs an especially versatile modeling tool.

#### Examples
- **Social networks:** Nodes represent individuals, while edges capture social relationships such as friendships or interactions.
- **Biology:** Nodes may correspond to proteins, and edges describe biochemical or functional interactions between them.

### Why Graphs?

Unlike **tabular** data or **grid-structured** data (e.g., images or text), graphs explicitly encode both **structure** and **relationships**. This makes them particularly well suited for modeling systems where connectivity and interdependence play a central role, such as networks, molecules, knowledge bases, and communication systems.

## What Is a Graph?

Before exploring machine learning techniques on graphs, it is useful to formalize what we mean by **graph-structured data**.

### Formal Definition

A graph is formally defined as  
\[
G = (V, E),
\]
where:
- \(V\) denotes a set of **nodes** (vertices), and  
- \(E\) denotes a set of **edges** representing connections between pairs of nodes.

An edge connecting node \(u \in V\) to node \(v \in V\) is written as \((u, v) \in E\).

In many applications, we focus on **simple graphs**, which satisfy the following conditions:
- There is at most one edge between any pair of nodes.
- Self-loops (edges from a node to itself) are not allowed.
- All edges are **undirected**, meaning:
  \[
  (u, v) \in E \iff (v, u) \in E.
  \]

### Adjacency Matrix Representation

One common and convenient way to represent a graph is through an **adjacency matrix**
\[
A \in \mathbb{R}^{|V| \times |V|}.
\]

The construction of this matrix proceeds as follows:
1. Assign each node a unique index corresponding to a row and column.
2. Define the entries of the matrix as:
   \[
   A[u, v] =
   \begin{cases}
   1 & \text{if } (u, v) \in E, \\
   0 & \text{otherwise}.
   \end{cases}
   \]

- For **undirected graphs**, the adjacency matrix \(A\) is **symmetric**.
- For **directed graphs**, symmetry is not required, as edge directionality is preserved.

### Weighted Graphs

In many real-world scenarios, edges carry additional information in the form of **weights**, reflecting the strength, cost, or capacity of a connection. In such cases, the adjacency matrix entries take real values:
\[
A[u, v] \in \mathbb{R}.
\]

For instance, in a **protein–protein interaction network**, edge weights may quantify the strength or confidence of interaction between two proteins.
