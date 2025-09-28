"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { LoginModal } from "@/components/login-modal"
import { AuthGuard } from "@/components/auth-guard"
import { useState } from "react"
import { useAuth } from "@/lib/auth-context"

export default function HomePage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const { login } = useAuth()

  const handleLogin = async (email: string, password: string) => {
    await login(email, password)
    setIsLoginModalOpen(false)
  }

  return (
    <AuthGuard requireAuth={false}>
      <div className="min-h-screen bg-background">
        <Header onLoginClick={() => setIsLoginModalOpen(true)} />
        <main>
          <HeroSection />
          <FeaturesSection />
          <TestimonialsSection />
          <PricingSection />
          <CTASection />
        </main>
        <Footer />

        <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} onLogin={handleLogin} />
      </div>
    </AuthGuard>
  )
}
