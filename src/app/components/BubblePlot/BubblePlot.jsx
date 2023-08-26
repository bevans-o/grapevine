import React from 'react'
import bubble from './bubble.module.css'
import {useRef, useEffect, useState} from "react";
import * as d3 from "d3";
import { GrapeStatus } from '@/app/lib/types';

function BubblePlot({vine, selected, onSelect}) {
  const width = 1500;
  const height = 1300; 

  console.log(selected)

  const ref = useRef()

  useEffect(() => {

    const drag = simulation => {
  
      function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }
      
      function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
      }
      
      function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }
      
      return d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended);
    }

    const svg = d3.select("#plot");

    const root = d3.hierarchy(vine, (d) => {
      // object is a vine
      if (d.bunches && d.grapes) {
        return d.bunches.concat(d.grapes);
      }

      // object is a grape
      if (d.grapes && d.yeses) {
        // add vote to user objects
        let children = [];

        d.yeses.forEach((yes) => {
          // check for overlap between user tags and grape tags
          const tags = d.tags.filter(tag => yes.tags.includes(tag));

          children.push({
            ...yes,
            vote: "yes",
            tagged: tags.length > 0
          })
        }
          
        )

        d.nos.forEach((no) => {
          const tags = d.tags.filter(tag => no.tags.includes(tag));

          children.push({
            ...no,
            vote: "no",
            tagged: tags.length > 0
          })
        }
        )

        console.log(children);

        return d.grapes.concat(children);
      }

      if (d.grapes) {
        return d.grapes;
      }
    });

    const links = root.links();
    const nodes = root.descendants();

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(d => {
        console.log(d);
        if (d.target.data.owner) return 180;
        if (d.target.data.email) return 50;
        return 120;
      }
      ).strength(1))
      .force("charge", d3.forceManyBody().strength(-300));

    svg.attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "max-width: 100%; max-height: 100%; height: auto;");

    const link = svg.append("g")
      .attr("stroke", "var(--n300)")
      .attr("stroke-opacity", 1)
      .attr("stroke-width", 5)
      .selectAll("line")
      .data(links)
      .join("line");

      const node = svg.append("g")
      .attr("fill", "#fff")
      .attr("stroke", "var(--n600)")
      .attr("stroke-width", 5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("fill", d => {
        if (d.data.tagged) return "var(--n800)";
        if (d.data.owner) return "var(--n100)";
        if (d.data.status === GrapeStatus.FAILED) return "var(--no500)";
        if (d.data.status === GrapeStatus.PASSED) return "var(--yes500)";
        if (d.data.status === GrapeStatus.OPEN) return "var(--b200)";
        return "var(--n800)";
      })
      .attr("stroke", d => {
        if (d.data.owner) return "var(--n300)";
        if (d.data.status === GrapeStatus.FAILED || d.data.vote === "no") return "var(--no700)";
        if (d.data.status === GrapeStatus.PASSED || d.data.vote === "yes") return "var(--yes700)";
        if (d.data.status === GrapeStatus.OPEN) return "var(--b400)";
        return "var(--n900)";
      })
      .attr("r", d => {
        if (d.data.owner) return 60;
        if (d.data.threshold) return 26;
        if (d.data.email) return (5 * d.data.weight) * (d.data.tagged ? 2 : 1);
        return 40;
      })
      .call(drag(simulation));

      node.append("title")
      .text(d => d.data.name);

      simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);
      });


      return () => {
        //svg.remove();
      }
  }, [])
  
  return (
    <div>
      <svg id="plot">

      </svg>
    </div>
  )
}

export default BubblePlot