"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { AuthGuard } from "@/components/auth-guard"
import { motion } from "framer-motion"
import { useAuth } from "@/lib/auth-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Activity, Target, Flame, ChevronLeft, ChevronRight, Coffee, Utensils, Apple, Moon } from "lucide-react"
import { useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const metabolicData = {
  basale: 1650,
  fabbisogno: 2200,
  obiettivo: 1900,
}

const macronutrientsData = [
  { name: "Proteine", value: 40, color: "#8b5cf6" },
  { name: "Carboidrati", value: 35, color: "#06b6d4" },
  { name: "Grassi", value: 25, color: "#10b981" },
]

const weeklyPlan = [
  {
    day: "Lunedì",
    meals: {
      colazione: { name: "Yogurt greco con mirtilli e noci", kcal: 320 },
      pranzo: { name: "Salmone alla griglia con quinoa e verdure", kcal: 580 },
      spuntino: { name: "Mandorle e mela", kcal: 180 },
      cena: { name: "Pollo al curry con riso integrale", kcal: 520 },
    },
    total: 1600,
  },
  {
    day: "Martedì",
    meals: {
      colazione: { name: "Avocado toast con uovo", kcal: 380 },
      pranzo: { name: "Insalata di tonno con ceci", kcal: 520 },
      spuntino: { name: "Frullato proteico", kcal: 200 },
      cena: { name: "Merluzzo con patate dolci", kcal: 480 },
    },
    total: 1580,
  },
  {
    day: "Mercoledì",
    meals: {
      colazione: { name: "Porridge con banana e cannella", kcal: 340 },
      pranzo: { name: "Wrap di pollo con verdure", kcal: 560 },
      spuntino: { name: "Yogurt con semi di chia", kcal: 160 },
      cena: { name: "Bistecca con broccoli", kcal: 540 },
    },
    total: 1600,
  },
]

const mealIcons = {
  colazione: Coffee,
  pranzo: Utensils,
  spuntino: Apple,
  cena: Moon,
}

export default function DietaPage() {
  const { user } = useAuth()
  const [selectedDay, setSelectedDay] = useState(0)

  const currentDay = weeklyPlan[selectedDay]

  const dailyCaloriesData = weeklyPlan.map((day) => ({
    name: day.day.slice(0, 3),
    calories: day.total,
  }))

  return (
    <AuthGuard requireAuth={true}>
      <DashboardLayout user={user}>
        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl font-bold text-foreground">Piano Alimentare Personalizzato</h1>
            <p className="text-muted-foreground mt-1">Basato sulla tua analisi genetica</p>
          </motion.div>

          {/* Analisi Metabolica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Analisi Metabolica</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 rounded-lg bg-accent/10">
                    <Activity className="h-8 w-8 text-accent mx-auto mb-2" />
                    <h3 className="font-semibold">Metabolismo Basale</h3>
                    <p className="text-2xl font-bold text-accent">{metabolicData.basale}</p>
                    <p className="text-sm text-muted-foreground">kcal/giorno a riposo</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-blue-500/10">
                    <Target className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <h3 className="font-semibold">Fabbisogno Giornaliero</h3>
                    <p className="text-2xl font-bold text-blue-500">{metabolicData.fabbisogno}</p>
                    <p className="text-sm text-muted-foreground">kcal per mantenere peso</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-green-500/10">
                    <Flame className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <h3 className="font-semibold">Obiettivo Giornaliero</h3>
                    <p className="text-2xl font-bold text-green-500">{metabolicData.obiettivo}</p>
                    <p className="text-sm text-muted-foreground">kcal per obiettivo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Distribuzione Macronutrienti */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Distribuzione Macronutrienti Ottimale</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={macronutrientsData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {macronutrientsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-4">
                    {macronutrientsData.map((macro, index) => (
                      <div key={macro.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{macro.name}</span>
                          <Badge style={{ backgroundColor: macro.color, color: "white" }}>{macro.value}%</Badge>
                        </div>
                        <Progress value={macro.value} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Piano Settimanale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Piano Alimentare Settimanale
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedDay(Math.max(0, selectedDay - 1))}
                      disabled={selectedDay === 0}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="font-medium min-w-20 text-center">{currentDay.day}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedDay(Math.min(weeklyPlan.length - 1, selectedDay + 1))}
                      disabled={selectedDay === weeklyPlan.length - 1}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {Object.entries(currentDay.meals).map(([mealType, meal]) => {
                    const IconComponent = mealIcons[mealType as keyof typeof mealIcons]
                    return (
                      <motion.div
                        key={mealType}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="p-4 rounded-lg border bg-card"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <IconComponent className="h-4 w-4 text-accent" />
                          <h3 className="font-medium capitalize">{mealType}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{meal.name}</p>
                        <Badge variant="outline">{meal.kcal} kcal</Badge>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="flex justify-between items-center p-4 bg-accent/10 rounded-lg">
                  <span className="font-semibold">Totale Giornaliero</span>
                  <Badge className="text-lg px-3 py-1">{currentDay.total} kcal</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Grafico Calorie Settimanali */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Andamento Calorico Settimanale</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dailyCaloriesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="calories" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Motivazioni */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Motivazioni delle Scelte Alimentari</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Proteine Elevate (40%)</h4>
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    La tua analisi genetica mostra un metabolismo proteico efficiente e una predisposizione al
                    mantenimento della massa muscolare. L'alto apporto proteico supporta il tuo obiettivo di
                    composizione corporea.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Carboidrati Moderati (35%)</h4>
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    Il tuo profilo genetico indica una sensibilità moderata all'insulina. I carboidrati sono concentrati
                    nei momenti di maggiore attività per ottimizzare l'utilizzo energetico.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Grassi Bilanciati (25%)</h4>
                  <p className="text-purple-800 dark:text-purple-200 text-sm">
                    La tua capacità di metabolizzare i grassi è nella norma. Sono privilegiati omega-3 e grassi
                    monoinsaturi per supportare la salute cardiovascolare e ridurre l'infiammazione.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </DashboardLayout>
    </AuthGuard>
  )
}
