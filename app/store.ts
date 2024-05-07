import { create } from 'zustand'

interface ExperienceNameState {
  experienceName: string
  setExperienceName: (experienceName: string) => void
}

export const useExperienceNameStore = create<ExperienceNameState>()((set) => ({
  experienceName: 'horror',
  setExperienceName: (experienceName) => set({ experienceName }),
}))