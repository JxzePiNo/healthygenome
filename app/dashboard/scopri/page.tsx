"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { AuthGuard } from "@/components/auth-guard"
import { motion } from "framer-motion"
import { useAuth } from "@/lib/auth-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dna, BookOpen, Lightbulb, Heart, Shield, Droplets, Moon, Activity, CheckCircle } from "lucide-react"

const guidelines = [
  "Mantieniti sempre attivo",
  "Più frutta e verdura",
  "Più cereali integrali e legumi",
  "Bevi ogni giorno acqua in abbondanza",
  "Grassi: scegli quali e limita la quantità",
  "Zuccheri, dolci e bevande zuccherate: meno è meglio",
  "Il sale: meno è meglio",
  "Bevande alcoliche: il meno possibile",
  "Varia la tua alimentazione",
  "La sicurezza degli alimenti dipende anche da te",
]

const waterBrands = [
  "Fonte Essenziale",
  "Ferrarelle",
  "Sangemini",
  "Lete",
  "Santagata",
  "Sveva",
  "Uliveto",
  "San Pellegrino",
]

export default function ScopriPage() {
  const { user } = useAuth()

  return (
    <AuthGuard requireAuth={true}>
      <DashboardLayout user={user}>
        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl font-bold text-foreground">Scopri di più</h1>
            <p className="text-muted-foreground mt-1">Approfondimenti scientifici e linee guida</p>
          </motion.div>

          {/* Genetica, Nutrigenomica e Nutrigenetica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Dna className="h-5 w-5 text-accent" />
                  Genetica, Nutrigenomica e Nutrigenetica
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Il DNA contiene tutte le istruzioni per la vita, organizzate in geni. Il 99,9% del DNA umano è
                  identico tra tutti, ma piccole variazioni (SNP o polimorfismi) determinano le differenze individuali,
                  incluse le predisposizioni nutrizionali e metaboliche.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  La <strong>nutrigenomica</strong> studia l'impatto di nutrienti e alimenti sull'espressione dei geni,
                  mentre la
                  <strong> nutrigenetica</strong> indaga come le varianti genetiche influenzano la risposta agli
                  alimenti. Questo permette di personalizzare la dieta per migliorare salute, prevenzione e benessere.
                </p>
                <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-sm">
                    <strong>Il profilo genetico</strong> consente di individuare predisposizioni a intolleranze
                    (lattosio, glutine), alterazioni del metabolismo di zuccheri, folati, vitamina D, stato
                    infiammatorio e rischio di sovrappeso. Le scelte alimentari mirate possono compensare queste
                    predisposizioni e migliorare la qualità della vita.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Linee Guida */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  Linee Guida per una Sana Alimentazione
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-blue-900 dark:text-blue-100 font-medium italic text-center">
                    "Fa che il cibo sia la tua medicina e la medicina sia il tuo cibo" - Ippocrate
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {guidelines.map((guideline, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{guideline}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Indicazioni Pratiche */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-500" />
                  Indicazioni Pratiche
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Droplets className="h-5 w-5 text-blue-500" />
                      <h3 className="font-semibold text-blue-900 dark:text-blue-100">Idratazione</h3>
                    </div>
                    <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                      Bere almeno 1,5/2L di acqua al giorno, preferendo acque calciche:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {waterBrands.map((brand, index) => (
                        <span
                          key={index}
                          className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Activity className="h-5 w-5 text-green-500" />
                      <h3 className="font-semibold text-green-900 dark:text-green-100">Digestione</h3>
                    </div>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      Non coricarsi né sulla poltrona né sul letto dopo pranzo e dopo cena per almeno 1h/1h e mezza
                      dalla fine del pasto.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Moon className="h-5 w-5 text-purple-500" />
                      <h3 className="font-semibold text-purple-900 dark:text-purple-100">Riposo</h3>
                    </div>
                    <p className="text-sm text-purple-800 dark:text-purple-200">
                      Assicurare un riposo notturno di almeno 8 ore per permettere il corretto recupero metabolico.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg border border-accent/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold">Nota Importante</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Non si parla di dieta ma di stile di vita!</strong> L'approccio nutrigenetico mira a creare
                    abitudini alimentari sostenibili e personalizzate che accompagnino la persona per tutta la vita.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Fondamenti Scientifici */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  Fondamenti Scientifici
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Basi Genetiche</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Analisi di polimorfismi a singolo nucleotide (SNP)</li>
                      <li>• Valutazione di geni coinvolti nel metabolismo</li>
                      <li>• Studio delle varianti che influenzano l'assorbimento</li>
                      <li>• Identificazione di predisposizioni individuali</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Applicazioni Cliniche</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Prevenzione di patologie croniche</li>
                      <li>• Ottimizzazione della composizione corporea</li>
                      <li>• Miglioramento delle performance metaboliche</li>
                      <li>• Personalizzazione dell'integrazione nutrizionale</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </DashboardLayout>
    </AuthGuard>
  )
}
