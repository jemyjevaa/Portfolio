import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  CpuChipIcon, 
  SwatchIcon 
} from '@heroicons/react/24/outline';

const tabs = [
  { id: 'card', label: 'ProductCard' },
  { id: 'button', label: 'PrimaryButton' },
  { id: 'tokens', label: 'Design Tokens' },
];

const codeSamples: Record<string, { title: string; sub: string; icon: any; bg: string; code: string }[]> = {
  card: [
    {
      title: 'React + Tailwind',
      sub: 'Web',
      icon: CodeBracketIcon,
      bg: '#e8f0fe',
      code: `// ProductCard.tsx
export function ProductCard({ name, price, img }: Props) {
  return (
    <div className="rounded-lg border p-4 hover:shadow-md transition-all">
      <img src={img} className="w-full rounded-md mb-3" />
      <h3 className="font-bold">{name}</h3>
      <p>\${price}</p>
    </div>
  );
}`
    },
    {
      title: 'Flutter · Dart',
      sub: 'iOS + Android',
      icon: DevicePhoneMobileIcon,
      bg: '#e8f5fe',
      code: `// product_card.dart
class ProductCard extends StatelessWidget {
  final String name, img;
  final double price;

  @override
  Widget build(context) => Card(
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(12)),
    child: Column(children: [
      Image.network(img),
      Text(name, style: TextStyle(fontWeight: FontWeight.bold)),
      Text('\\$\${price}'),
    ]),
  );
}`
    },
    {
      title: 'SwiftUI',
      sub: 'iOS nativo',
      icon: CpuChipIcon,
      bg: '#fce8e8',
      code: `// ProductCard.swift
struct ProductCard: View {
  let name: String
  let price: Double
  let img: String

  var body: some View {
    VStack(alignment: .leading) {
      AsyncImage(url: URL(string: img))
        .clipShape(RoundedRectangle(cornerRadius: 12))
      Text(name).bold()
      Text("\\(price, specifier: "%.2f")")
    }.padding()
    .background(.background)
    .cornerRadius(12)
  }
}`
    }
  ],
  button: [
    {
      title: 'React + Tailwind',
      sub: 'Web',
      icon: CodeBracketIcon,
      bg: '#e8f0fe',
      code: `// PrimaryButton.tsx
export function PrimaryButton({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition-all active:scale-95"
    >
      {children}
    </button>
  );
}`
    },
    {
      title: 'Flutter · Dart',
      sub: 'iOS + Android',
      icon: DevicePhoneMobileIcon,
      bg: '#e8f5fe',
      code: `// primary_button.dart
ElevatedButton(
  onPressed: onPressed,
  style: ElevatedButton.styleFrom(
    backgroundColor: AppTokens.colorPrimary,
    foregroundColor: Colors.white,
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(8)),
    padding: EdgeInsets.symmetric(horizontal: 24, vertical: 12),
  ),
  child: Text(label),
);`
    },
    {
      title: 'SwiftUI',
      sub: 'iOS nativo',
      icon: CpuChipIcon,
      bg: '#fce8e8',
      code: `// PrimaryButton.swift
Button(action: action) {
  Text(label)
    .fontWeight(.semibold)
    .foregroundColor(.white)
    .padding(.horizontal, 24)
    .padding(.vertical, 12)
    .background(AppTokens.colorPrimary)
    .cornerRadius(8)
}
.buttonStyle(.plain)
.scaleEffect(isPressed ? 0.96 : 1)`
    }
  ],
  tokens: [
    {
      title: 'Style Dictionary',
      sub: 'Fuente única',
      icon: SwatchIcon,
      bg: '#f0faf6',
      code: `// tokens.json
{
  "color": {
    "primary": { "value": "#1a1a2e" },
    "accent": { "value": "#c8572a" }
  },
  "radius": {
    "lg": { "value": "12px" }
  },
  "font": {
    "display": { "value": "'Syne'" },
    "mono": { "value": "'DM Mono'" }
  }
}`
    },
    {
      title: '→ Tailwind CSS',
      sub: 'Output web',
      icon: CodeBracketIcon,
      bg: '#e8f0fe',
      code: `// tailwind.config.js (generated)
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#1a1a2e",
        accent: "#c8572a"
      },
      borderRadius: {
        lg: "12px"
      }
    }
  }
}`
    },
    {
      title: '→ Flutter / SwiftUI',
      sub: 'Output mobile',
      icon: DevicePhoneMobileIcon,
      bg: '#e8f5fe',
      code: `// app_tokens.dart (generated)
class AppTokens {
  static const colorPrimary = Color(0xFF1a1a2e);
  static const colorAccent = Color(0xFFc8572a);
  static const radiusLg = 12.0;
}

// AppTokens.swift (generated)
enum AppTokens {
  static let colorPrimary = Color(hex: "#1a1a2e")
}`
    }
  ]
};

export const Comparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState('card');

  return (
    <section id="platform-compare" className="bg-card py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-2 mb-2 reveal visible">
          // Mismo diseño, tres plataformas
        </div>
        <h2 className="font-sans text-[clamp(2rem,3.5vw,3.2rem)] leading-tight text-ink mb-4 reveal visible">
          Un componente.<br />Tres implementaciones.
        </h2>
        <p className="text-[1.05rem] text-ink-muted max-w-[560px] leading-relaxed mb-10 reveal visible">
          El mismo <code className="font-mono bg-surface-alt px-1.5 py-0.5 rounded text-[0.9em]">ProductCard</code> en React, Flutter y SwiftUI. Mismo aspecto visual, rendimiento nativo en cada ecosistema.
        </p>
        
        <div className="flex mb-10 border border-ink-faint rounded-lg overflow-hidden w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-[13px] font-semibold px-6 py-2.5 transition-all ${
                activeTab === tab.id ? 'bg-ink text-surface' : 'text-ink-muted hover:text-ink'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {codeSamples[activeTab].map((sample, idx) => (
              <motion.div
                key={`${activeTab}-${idx}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="border border-ink-faint rounded-lg overflow-hidden flex flex-col"
              >
                <div className="p-4 border-b border-ink-faint flex items-center gap-3 bg-card">
                  <div className="w-8 h-8 rounded flex items-center justify-center text-ink" style={{ background: sample.bg }}>
                    <sample.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-[14px] text-ink">{sample.title}</div>
                    <div className="text-[11px] text-ink-muted">{sample.sub}</div>
                  </div>
                </div>
                <div className="bg-surface p-5 font-mono text-[11.5px] leading-relaxed text-ink-muted min-h-[220px] whitespace-pre-wrap overflow-x-auto">
                  {sample.code}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
