import React from 'react'

export default function Filters({ value, onChange }) {
  const set = (k, v) => onChange({ ...value, [k]: v })
  return (
    <div className="sticky top-0 z-20 -mt-6 mb-2 backdrop-blur bg-black/30 rounded-2xl p-3 border border-white/10">
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
        <select value={value.family || ''} onChange={(e) => set('family', e.target.value || undefined)} className="bg-white/10 text-white text-xs rounded-full px-3 py-2">
          <option value="">All Families</option>
          <option value="floral">Floral</option>
          <option value="woody">Woody</option>
          <option value="citrus">Citrus</option>
          <option value="oriental">Oriental</option>
        </select>
        <select value={value.gender || ''} onChange={(e) => set('gender', e.target.value || undefined)} className="bg-white/10 text-white text-xs rounded-full px-3 py-2">
          <option value="">All Genders</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="unisex">Unisex</option>
        </select>
        <select value={value.season || ''} onChange={(e) => set('season', e.target.value || undefined)} className="bg-white/10 text-white text-xs rounded-full px-3 py-2">
          <option value="">Any Season</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="fall">Fall</option>
          <option value="winter">Winter</option>
        </select>
        <select value={value.occasion || ''} onChange={(e) => set('occasion', e.target.value || undefined)} className="bg-white/10 text-white text-xs rounded-full px-3 py-2">
          <option value="">Any Occasion</option>
          <option value="daytime">Daytime</option>
          <option value="office">Office</option>
          <option value="casual">Casual</option>
          <option value="evening">Evening</option>
          <option value="date">Date</option>
        </select>
      </div>
    </div>
  )
}
