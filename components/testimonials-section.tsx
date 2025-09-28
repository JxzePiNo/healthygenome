import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    content:
      "StreamLine transformed how we deploy and manage our applications. What used to take hours now takes minutes. The team collaboration features are game-changing.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Lead Developer at InnovateCorp",
    content:
      "The security features give us peace of mind while the performance analytics help us optimize continuously. Best investment we've made for our development workflow.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Product Manager at StartupXYZ",
    content:
      "Our time to market improved by 300% after switching to StreamLine. The intuitive interface makes it easy for our entire team to collaborate effectively.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Trusted by teams worldwide</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            See what our customers are saying about their experience with StreamLine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border/40">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-card-foreground mb-4 leading-relaxed">"{testimonial.content}"</blockquote>
                <div>
                  <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
