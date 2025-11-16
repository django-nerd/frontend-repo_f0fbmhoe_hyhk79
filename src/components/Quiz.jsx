import React, { useState } from 'react'

export default function Quiz({ onRecommendations }) {
  const [answers, setAnswers] = useState({ preferences: [] })
  const api = import.meta.env.VITE_BACKEND_URL

  const togglePref = (p) => {
    setAnswers((prev) => {
      const set = new Set(prev.preferences)
      set.has(p) ? set.delete(p) : set.add(p)
      return { ...prev, preferences: Array.from(set) }
    })
  }

  const submit = async () => {
    const r = await fetch(`${api}/api/quiz/recommendations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(answers)
    })
    const data = await r.json()
    onRecommendations?.(data)
  }

  return (
    <section id="quiz" className="px-4 py-8">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
        <h3 className="text-white font-serif text-xl">Fragrance Quiz</h3>
        <p className="text-neutral-300 text-sm mt-1">Tell us your vibe and we’ll suggest the perfect match.</p>
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-white">
          {['floral','woody','citrus','oriental','fresh','spicy','sweet','resinous','powdery'].map(p => (
            <button key={p} onClick={() => togglePref(p)} className={`rounded-full px-3 py-2 border ${answers.preferences.includes(p) ? 'bg-amber-500 text-black border-amber-400' : 'bg-white/10 border-white/10'}`}>{p}</button>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
          <select onChange={(e)=> setAnswers(a=>({...a, gender: e.target.value || undefined}))} className="bg-white/10 text-white rounded-full px-3 py-2">
            <option value="">Gender</option>
            <option>female</option>
            <option>male</option>
            <option>unisex</option>
          </select>
          <select onChange={(e)=> setAnswers(a=>({...a, season: e.target.value || undefined}))} className="bg-white/10 text-white rounded-full px-3 py-2">
            <option value="">Season</option>
            <option>spring</option>
            <option>summer</option>
            <option>fall</option>
            <option>winter</option>
          </select>
          <select onChange={(e)=> setAnswers(a=>({...a, occasion: e.target.value || undefined}))} className="bg-white/10 text-white rounded-full px-3 py-2">
            <option value="">Occasion</option>
            <option>daytime</option>
            <option>office</option>
            <option>casual</option>
            <option>evening</option>
            <option>date</option>
          </select>
        </div>
        <div className="mt-4">
          <button onClick={submit} className="rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 text-black font-semibold px-5 py-2">Get Recommendations</button>
        </div>
      </div>
    </section>
  )
}
