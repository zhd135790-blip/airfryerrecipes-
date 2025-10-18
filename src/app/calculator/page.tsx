import { Metadata } from 'next'
import CalculatorTool from '@/components/CalculatorTool'

export const metadata: Metadata = {
  title: 'Air Fryer Calculator - Convert Oven Recipes to Air Fryer Settings',
  description: 'Free air fryer calculator to convert any oven recipe to perfect air fryer temperature and time settings. Get crispy, healthy results every time with our smart conversion tool.',
  keywords: 'air fryer calculator, oven to air fryer conversion, air fryer temperature, air fryer cooking time, recipe converter',
  openGraph: {
    title: 'Air Fryer Calculator - Convert Oven Recipes to Air Fryer Settings',
    description: 'Free air fryer calculator to convert any oven recipe to perfect air fryer temperature and time settings.',
    type: 'website',
  },
}

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      <CalculatorTool />
    </div>
  )
}
