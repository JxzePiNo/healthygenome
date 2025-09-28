"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, ExternalLink, GitBranch } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    name: "E-commerce Platform",
    description: "Modern React-based shopping platform",
    status: "active",
    deployments: 12,
    lastDeploy: "2 hours ago",
    url: "https://shop.example.com",
  },
  {
    name: "Analytics Dashboard",
    description: "Real-time data visualization tool",
    status: "building",
    deployments: 8,
    lastDeploy: "1 day ago",
    url: "https://analytics.example.com",
  },
  {
    name: "Mobile App API",
    description: "RESTful API for mobile applications",
    status: "active",
    deployments: 24,
    lastDeploy: "5 minutes ago",
    url: "https://api.example.com",
  },
  {
    name: "Documentation Site",
    description: "Product documentation and guides",
    status: "inactive",
    deployments: 3,
    lastDeploy: "1 week ago",
    url: "https://docs.example.com",
  },
]

export function ProjectsOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <Card className="bg-card border-border/40">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold">Projects</CardTitle>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-lg border border-border/40 hover:border-accent/40 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-medium text-foreground">{project.name}</h3>
                    <Badge
                      variant={
                        project.status === "active"
                          ? "default"
                          : project.status === "building"
                            ? "secondary"
                            : "outline"
                      }
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span className="flex items-center">
                      <GitBranch className="h-3 w-3 mr-1" />
                      {project.deployments} deployments
                    </span>
                    <span>Last deploy: {project.lastDeploy}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
