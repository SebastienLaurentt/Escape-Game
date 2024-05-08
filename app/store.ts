import { create } from 'zustand'

interface ExperienceNameState {
  experienceName: string
  setExperienceName: (experienceName: string) => void
}

export const useExperienceNameStore = create<ExperienceNameState>()((set) => ({
  experienceName: 'clvv571y2000013kkmos8kdth',
  setExperienceName: (experienceName) => set({ experienceName }),
}))