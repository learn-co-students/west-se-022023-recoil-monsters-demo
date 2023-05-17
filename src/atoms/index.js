import { atom, selector } from 'recoil'

// a basic atom to initialize state for a horde size of 4
export const hordeState = atom({
    key: 'hordeState',
    default: 4
})

// this atom is more complex because we're initializing it with a default value
// which we'll fetch from an API, but only selectors can execute functions
export const monstersState = atom({
    key: 'monstersState',
    default: selector({
        key: 'monstersLoader',
        get: async () => {
            const response = await fetch("http://localhost:3000/monsters")
            const monsters = await response.json()
            return monsters
        }
    })
})

export const monsterFilterState = atom({
    key: 'monsterFilterState',
    default: ''
})


// this selector is very representative of how selectors are used in Recoil;
// the callback fn depends on state in two different atoms, so if those state values
// change, this cb function gets re-evaluated
export const filteredMonsters = selector({
    key: 'filteredMonsters',
    get: ({get}) => {
        const filter = get(monsterFilterState)
        const monsters = get(monstersState)

        switch (filter){
            case 'dragon':
                return monsters.filter(m => m.meta.includes('dragon'))
            case 'beast':
                return monsters.filter(m => m.meta.includes('beast'))
            case 'undead':
                return monsters.filter(m => m.meta.includes('undead'))
            case 'humanoid':
                return monsters.filter(m => m.meta.includes('humanoid'))
            default:
                return monsters
        }
    }
})
