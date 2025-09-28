"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { AuthGuard } from "@/components/auth-guard"
import { motion } from "framer-motion"
import { useAuth } from "@/lib/auth-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  User,
  Calendar,
  CreditCard,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Activity,
  Zap,
  Shield,
  Heart,
  Brain,
  Eye,
} from "lucide-react"

const mockUserData = {
  nome: "Mario",
  cognome: "Rossi",
  dataNascita: "15/03/1985",
  codiceFiscale: "RSSMRA85C15H501Z",
}

const intoleranceData = [
  { name: "Lattosio", status: "intollerante", risk: "alto", icon: XCircle, color: "text-red-500" },
  { name: "Glutine", status: "tollerante", risk: "basso", icon: CheckCircle, color: "text-green-500" },
  { name: "Arachidi", status: "sensibile", risk: "medio", icon: AlertTriangle, color: "text-yellow-500" },
]

const metabolismData = [
  { name: "Metabolismo Caffeina", value: 75, status: "normale", icon: Zap },
  { name: "Assorbimento Ferro", value: 60, status: "ridotto", icon: Activity },
  { name: "Assorbimento Vitamina D", value: 85, status: "buono", icon: Shield },
  { name: "Assorbimento Vitamina B12", value: 90, status: "ottimo", icon: CheckCircle },
]

const predispositionData = [
  { name: "Diabete Tipo 2", risk: 35, level: "medio", icon: Heart, color: "text-yellow-500" },
  { name: "Ipertensione", risk: 45, level: "medio-alto", icon: Activity, color: "text-orange-500" },
  { name: "Alzheimer", risk: 20, level: "basso", icon: Brain, color: "text-green-500" },
  { name: "Trombosi", risk: 55, level: "alto", icon: AlertTriangle, color: "text-red-500" },
  { name: "Degenerazione Maculare", risk: 25, level: "basso", icon: Eye, color: "text-green-500" },
]

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <AuthGuard requireAuth={true}>
      <DashboardLayout user={user}>
        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Card className="bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profilo Paziente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Nome</p>
                      <p className="font-medium">
                        {mockUserData.nome} {mockUserData.cognome}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Data di Nascita</p>
                      <p className="font-medium">{mockUserData.dataNascita}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Codice Fiscale</p>
                      <p className="font-medium">{mockUserData.codiceFiscale}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Stato Analisi</p>
                      <p className="font-medium text-green-500">Completata</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Intolleranze e Allergie</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {intoleranceData.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-4 rounded-lg border bg-card"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{item.name}</h3>
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                      <Badge
                        variant={
                          item.status === "tollerante"
                            ? "default"
                            : item.status === "intollerante"
                              ? "destructive"
                              : "secondary"
                        }
                      >
                        {item.status}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">Rischio: {item.risk}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Metabolismo e Assorbimento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {metabolismData.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <item.icon className="h-4 w-4 text-accent" />
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <Badge variant="outline">{item.status}</Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Efficienza</span>
                          <span>{item.value}%</span>
                        </div>
                        <Progress value={item.value} className="h-2" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Predisposizioni Patologiche</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {predispositionData.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-4 rounded-lg border bg-card"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                        <Badge
                          variant={
                            item.level === "basso" ? "default" : item.level === "alto" ? "destructive" : "secondary"
                          }
                        >
                          {item.level}
                        </Badge>
                      </div>
                      <h3 className="font-medium mb-2">{item.name}</h3>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Rischio</span>
                          <span>{item.risk}%</span>
                        </div>
                        <Progress value={item.risk} className="h-2" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </DashboardLayout>
    </AuthGuard>
  )
}
