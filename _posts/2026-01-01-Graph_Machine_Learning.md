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

Graphs are a fundamental mathematical structure for representing **complex systems**. At their core, a graph is composed of a set of entities, called **nodes** (or *vertices*), and a set of **edges** that encode relationships between them. Unlike representations that focus solely on individual entities, graphs explicitly model the **interactions, dependencies, and structure** of a system.

This relational viewpoint, combined with their expressive power, makes graphs a highly versatile tool across many domains.

#### Examples
- **Social networks:** Nodes represent individuals, and edges denote relationships such as friendships or interactions.
- **Biology:** Nodes may correspond to proteins, while edges represent biochemical or functional interactions.

---

## Why Graphs?

Unlike **tabular data** or **grid-structured data** (e.g., images or text), graphs naturally encode both **entities and their relationships**. This makes them particularly well suited for domains where connectivity and interdependence are central, including:
- social and communication networks,
- molecular and biological systems,
- knowledge graphs,
- transportation and infrastructure networks.

---

## What Is a Graph?

Before applying machine learning techniques to graph-structured data, we first introduce a formal definition.

### Formal Definition

A graph is defined as  
\begin{equation}
G = (V, E),
\end{equation}
where:
- $$(V = \{v_1, v_2, \dots, v_n\})$$ is a finite set of **nodes** (vertices), and  
- $$(E \subseteq V \times V)$$ is a set of **edges**, representing relationships between nodes.

An edge connecting nodes $$(u, v \in V)$$ is denoted by $$((u, v) \in E)$$.

In this README, we primarily consider **simple, undirected graphs**, which satisfy:
- At most one edge exists between any pair of nodes.
- Self-loops (edges of the form $$(u, u)$$) are not allowed.
- Edges are **undirected**, meaning:
  \begin{equation}
  (u, v) \in E \iff (v, u) \in E.
  \end{equation}

---

## Adjacency Matrix Representation

A common and convenient representation of a graph is the **adjacency matrix**
\begin{equation}
A \in \mathbb{R}^{|V| \times |V|}.
\end{equation}

To construct the adjacency matrix:
1. Assign each node $$(v_i \in V)$$ a unique index $$(i \in \{1, \dots, |V|\})$$.
2. Define the matrix entries as:
   \begin{equation}
   A_{uv} =
   \begin{cases}
   1, & \text{if } (u, v) \in E, \\
   0, & \text{otherwise}.
   \end{cases}
   \end{equation}

Key properties:
- For **undirected graphs**, the adjacency matrix is **symmetric**:
  \begin{equation}
  A_{uv} = A_{vu}.
  \end{equation}
- For **directed graphs**, symmetry is not required, as edge direction is preserved.

---

## Weighted Graphs

In many real-world applications, edges carry additional information in the form of **weights**, which may represent strength, cost, similarity, or capacity. In this case, the adjacency matrix becomes:
\begin{equation}
A_{uv} \in \mathbb{R}.
\end{equation}

For example, in a **protein–protein interaction network**, an edge weight may encode the confidence or intensity of interaction between two proteins, rather than a simple binary connection.
